'use strict';

import superagent from 'superagent';

describe('Express Web Server', () => {

  it('handles an invalid get request with a 404', () => {

    return superagent.get('http://localhost:3000/api/v1/cats/blah')
      .then(true)
      .catch(response => expect(response.status).toEqual(404));

  });
  
});