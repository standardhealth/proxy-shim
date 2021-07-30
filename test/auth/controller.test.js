// const expect = require('chai').expect;
const nock = require('nock');
const request = require('supertest');
const metadata = require('../resources/conformance');
const token = require('../resources/token.good');

describe('loading express', () => {
  let server;
  beforeEach(() => {
    /* eslint-disable-next-line global-require */
    server = require('../../src/authServer');
    nock('http://localhost:4001').get('/v/r2/metadata').reply(200, metadata);

    nock('http://localhost:4001')
      .post(
        '/v/r2/auth/token',
        (body) =>
          body.grant_type === 'authorization_code' &&
          body.code === 'code' &&
          body.redirect_uri === 'http://localhost:4000' &&
          body.client_id === 'CLIENT_ID',
      )
      .reply(200, token);

    nock('http://localhost:4001')
      .post(
        '/v/r2/auth/token',
        (body) =>
          body.grant_type !== 'authorization_code' ||
          body.code !== 'code' ||
          body.redirect_uri !== 'http://localhost:4000' ||
          body.client_id !== 'CLIENT_ID',
      )
      .reply(403, {});
  });

  afterEach(() => {
    server.close();
  });

  it('responds to authorization url', (done) => {
    request(server).get('/auth/authorize').expect(301, done);
  });

  it('responds to token url', (done) => {
    request(server)
      .post('/auth/token')
      .send({
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:4000',
        code: 'code',
        client_id: 'CLIENT_ID',
      })
      .expect(200, done);
  });

  it('responds to bad token url call', (done) => {
    request(server)
      .post('/auth/token')
      .send({
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost',
        code: 'code',
        client_id: 'CLIENT_ID',
      })
      .expect(403, done);
  });
});
