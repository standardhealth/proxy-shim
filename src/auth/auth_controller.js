var express = require('express');
const cors = require('cors')
const url = require('url');
var bodyParser = require('body-parser');
const querystring = require('querystring');
const request = require('request')
var mkFhir = require('fhir.js');

const {fhirClientConfig} = require('../client.config');
const options = {
    baseUrl: fhirClientConfig.baseUrl
};

const wreck = require('wreck');


var rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}

var authUris = function(response){
  for( var x in response.data.rest){
    var entry = response.data.rest[x];
    if(entry.mode === "server"){
      for( let i in entry.security.extension){
        let ex = entry.security.extension[i];
        if(ex.url == "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris"){
          var uris = {};
          for(let j in ex.extension){
            let uri = ex.extension[j];
            uris[uri.url]=uri.valueUri;
          }
          return uris;
        }
      }
    }
  }
}

let build = function(server) {
  let router = express.Router();

  let default_cors_options = Object.assign({}, server.config.server.corsOptions);
// this is the redirection for the
  router.use(bodyParser.json()); // for parsing application/json
  router.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true })); // for parsing application/x-www-form-urlencoded

  router.get('/authorize', cors(default_cors_options), function (req, res) {
    var fhirClient = mkFhir(options);

    fhirClient.conformance(fhirClientConfig).then((response) => {
      let uris = authUris(response);
      let params = req.query;
      params['aud'] = fhirClientConfig.baseUrl;
      console.log("sending redirect back to client");
      res.redirect(301, url.format({
           pathname: uris.authorize,
           query: params
         }));
    });
  })


  router.post('/token', cors(default_cors_options), function (req, res) {
    let formEnc = (req.headers['content-type'] || '').indexOf('application/x-www-form-urlencoded') >= 0
    var fhirClient = mkFhir({
        baseUrl: fhirClientConfig.baseUrl
    });
    fhirClient.conformance(fhirClientConfig).then((response) => {
      let uris = authUris(response);
      // need querystring and body payload to send
      let query = req.query;
      let body = formEnc ? req.rawBody : {form: req.body};
      let options = {
        url: uris.token,
        headers: {}
      };
      if(formEnc){
        options.headers['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
      }else{
        options.headers['content-type'] = 'application/json';
      }

      request.post({url: uris.token, form: req.body}, (err,httpResponse,body) => {
        if(err){
          console.log(err);
        }
        res.status(httpResponse.statusCode).send(body);
      });
    });
  });
  return router;
}
module.exports = build;
