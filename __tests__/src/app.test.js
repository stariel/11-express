'use strict';

import app from '../../src/app.js';
import supertest from 'supertest';

const mockRequest = supertest(app.server);
const apiUrl = '/api/v1/cats'

describe('api module', () => {

  it('should get no cats', () => {

    return mockRequest
      .get(apiUrl)
      .then(results => {
        
        const cats = JSON.parse(results.text);

        expect(cats).toEqual({});
        
      });

  });

  it('should create a cat', (done) => {

    const java = {name:'Java', age: '16'};

    mockRequest.post(apiUrl).send(java).then(results => {

      const java = JSON.parse(results.text);

      expect(java.name).toBe('Java');

      done();
    });

  });

  it('should get all notes', () => {

    const lyra = {name:'Lyra', age: '13'};

    return mockRequest.post(apiUrl).send(lyra).then(results => {

      return mockRequest.get(apiUrl).then(results => {
        
        const lyra = JSON.parse(results.text);

        expect(Object.keys(lyra).length).toBe(2);
      });
    });

  });

  it('should get single note', () => {

    const chat = {name:'Chat', age: '12'};

    return mockRequest.post(apiUrl).send(chat).then(results => {

      const postedCat = JSON.parse(results.text);

      return mockRequest.get(apiUrl + '/' + postedCat.id).then(results => {
        
        const retrievedCat = JSON.parse(results.text);

        expect(retrievedCat.age).toBe('12');
      });
    });

  });

});