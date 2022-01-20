import request from 'supertest';
import app from '../index';

describe('GET /', () => {
  it('Responds with Back-end Challenge 2021 🏅 - Space Flight News', (done) => {
    request(app)
      .get('/')
      .expect('Back-end Challenge 2021 🏅 - Space Flight News', done);
  });
});
