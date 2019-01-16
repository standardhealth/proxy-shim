//const expect = require('chai').expect;
const nock = require('nock');
var request = require('request');
const mkFhir = require('fhir.js');
const config = require('config');
const fhirClientConfig = config.fhirClientConfig;
var PatientService = require('../../src/services/patient.service');

describe('loading express', function() {
  let server;
  beforeEach(() => {
    server = require('../../src/index');
    nock('http://localhost:4001')
      .get('/v/r2/Condition?patientId=1')
      .reply(200, {resourceType: 'Bundle', entry:[{resource: {resourceType: "Condition"}}]});

    nock('http://localhost:4001')
        .get('/v/r2/Observation?patientId=1')
        .reply(200, {resourceType: 'Bundle', entry:[{resource:{resourceType: "Observation"}}]});

    nock('http://localhost:4001')
        .get('/v/r2/Patient/1')
        .reply(200, {resourceType: "Patient"});
  });

  afterEach(function() {
    server.close();
  });

  // note that this is a call directly to the class that implements to function and
  // is not going through the entire infrastruture
  it('should handle patient $everything request', function testSlash(done) {
    let test =  PatientService.everything({id: 1, base_version:'1_0_2'}, {token: "asfasdfasdf"}, console.log)
      test.then((results) => {
        expect(results.length).toBe(3)
        // expect a PATIENT, a condition and an Observation
        expect(results.find((x) => x.constructor.name === 'Patient')).toBeTruthy()
        expect(results.find((x) => x.constructor.name === 'Observation')).toBeTruthy()
        expect(results.find((x) => x.constructor.name === 'Condition')).toBeTruthy()
        expect(results.find((x) => x.constructor.name === 'Device')).toBeFalsy()
        done()
    });
  });
});
