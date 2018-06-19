'use strict';

import superagent from 'superagent';
import app from '../src/app.js';

beforeAll( () => {
  app.start(3000);
});

afterAll( () => {
  app.stop();
});

describe('Express Web Server', () => {

  it('handles an invalid get request with a 404', () => {

    return superagent.get('http://localhost:3000/blah')
      .then()
      .catch(res => expect(res.status).toEqual(404));

  });
  it('handles an invalid get request with a 404', () => {

    return superagent.get('http://localhost:3000/api/v1/cats/blah')
      .then()
      .catch(res => expect(res.status).toEqual(404));

  });

  it('handles a valid get request', () => {

    return superagent.get('http://localhost:3000/api/v1/cats')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('should respond with bad request if no request body was provided or the body was invalid', () => {
    let obj = {};
    return superagent.post('http://localhost:3000/api/v1/cats')
      .send(obj)
      .then(response => {
        expect(response.statusCode).toEqual(500);
      })
      .catch(console.err);
  });

  it('should respond with the body content for a post request with a valid body', () => {
    let obj = {name:'Bob', age: '12'};
    return superagent.post('http://localhost:3000/api/v1/cats')
      .send(obj)
      .then(response => {
        expect(response.text).toContain('Bob');
      })
      .catch(console.err);
  });
  
});