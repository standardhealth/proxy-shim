var express = require('express');
const cors = require('cors');
const url = require('url');
var bodyParser = require('body-parser');
const request = require('request');
var mkFhir = require('fhir.js');

const {fhirClientConfig} = require('../client.config');
const options = {
    baseUrl: fhirClientConfig.baseUrl
};

var rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

var authUris = function(response){
  for ( var x in response.data.rest){
    var entry = response.data.rest[x];
    if (entry.mode === 'server'){
      for ( let i in entry.security.extension){
        let ex = entry.security.extension[i];
        if (ex.url === 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris'){
          var uris = {};
          for (let j in ex.extension){
            let uri = ex.extension[j];
            uris[uri.url] = uri.valueUri;
          }
          return uris;
        }
      }
    }
  }
};

let build = function(server) {
  let router = new express.Router();

  let default_cors_options = Object.assign({}, server.config.server.corsOptions);
// this is the redirection for the
  router.use(bodyParser.json()); // for parsing application/json
  router.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true })); // for parsing application/x-www-form-urlencoded

  router.get('/authorize', cors(default_cors_options), function (req, res) {
    console.log('AUTHORIZE CALLED');
    var fhirClient = mkFhir(options);
    fhirClient.conformance(fhirClientConfig).then((response) => {
      let uris = authUris(response);
      let params = req.query;
      params.aud = fhirClientConfig.baseUrl;
      console.log('sending redirect back to client');
      res.redirect(301, url.format({
           pathname: uris.authorize,
           query: params
         }));
    }).catch((error) => {throw error;});
  });


  router.post('/token', cors(default_cors_options), function (req, res) {
    var fhirClient = mkFhir({
        baseUrl: fhirClientConfig.baseUrl
    });
    fhirClient.conformance(fhirClientConfig).then((response) => {
      let uris = authUris(response);
      // need querystring and body payload to send
      request.post({url: uris.token, form: req.body}, (err, httpResponse, body) => {
        if (err){
          console.log(err);
        }
        res.status(httpResponse.statusCode).send(body);
      });
    });
  });
  return router;
};
module.exports = build;
