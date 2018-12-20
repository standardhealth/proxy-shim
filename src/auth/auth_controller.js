var express = require('express');
const cors = require('cors')
const url = require('url');
var bodyParser = require('body-parser');
const querystring = require('querystring');

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

let build = function(server) {
  let router = express.Router();

  let default_cors_options = Object.assign({}, server.config.server.corsOptions);
// this is the redirection for the
  router.use(bodyParser.json()); // for parsing application/json
  router.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true })); // for parsing application/x-www-form-urlencoded

  router.get('/authorize', cors(default_cors_options), function (req, res) {
    var fhirClient = mkFhir(options);
    console.log(options);
    console.log(fhirClient);

    fhirClient.conformance(fhirClientConfig).then((response) => {
      console.log(response.data.rest.security);
      let params = req.query;
      params['aud'] = fhirClientConfig.baseUrl;
      res.redirect(301, url.format({
           pathname: response.authorizeUrl,
           query: params
         }));
    });
  })


  router.post('/token', cors(default_cors_options), function (req, res) {
    console.log("POST TOKEN");
    let formEnc = (req.headers['content-type'] || '').indexOf('application/x-www-form-urlencoded') >= 0
    var fhirClient = mkFhir({
        baseUrl: fhirClientConfig.baseUrl
    });
    fhirClient.conformance().then((response) => {

      // need querystring and body payload to send
      let query = req.query;
      let body = req.body;

      let options = {
        headers: {}
      };
      if(formEnc){
        options.headers['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        options.payload = req.rawBody
      }else{
        options.headers['content-type'] = 'application/json';
        options.payload = body;
      }

      wreck.post(response.tokenUrl.href, options).then((result) => {

        console.log(result.payload);
        res.status(200).send(result.payload);
      }).catch((e) => console.log(e));
    });
  });
  return router;
}
module.exports = build;
