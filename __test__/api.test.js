'use strict';

import superagent from 'superagent';
import app from '../src/app.js';

beforeAll( () => {
  app.start(3001);
});

afterAll( () => {
  app.stop();
});

describe('Express Web Server', () => {

  it('handles an invalid get request with a 404', () => {

    return superagent.get('http://localhost:3000/api/v1/cats/blah')
      .then(console.log('hi'))
      .catch(res => expect(res.status).toEqual(500));

  });
  
});