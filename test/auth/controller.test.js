//const expect = require('chai').expect;
const nock = require('nock');
var request = require('supertest');
var metadata = require('../resources/conformance');
var token = require('../resources/token.good');

describe('loading express', function() {
  let server;
  beforeEach(() => {
    server = require('../../src/index');
    nock('http://localhost:4001')
      .get('/v/r2/metadata')
      .reply(200, metadata);

    nock('http://localhost:4001')
      .post('/v/r2/auth/token')
      .reply(200, token);
  });

  afterEach(function() {
    server.close();
  });

  it('responds to authorization url', function testSlash(done) {
    request(server)
      .get('/auth/authorize')
      .expect(301, done);
  });

  it('responds to token url', function testPath(done) {
    request(server)
      .post('/auth/token')
      .expect(200, done);
  });
});
