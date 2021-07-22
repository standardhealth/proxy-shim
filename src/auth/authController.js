const express = require('express');
const cors = require('cors');
const url = require('url');
const bodyParser = require('body-parser');
const request = require('request');
const mkFhir = require('fhir.js');
const config = require('config');

const { fhirClientConfig } = config;
const options = {
  baseUrl: fhirClientConfig.baseUrl,
};

/*
  Used to save the raw body of a response  as a variable on the response object
*/
const rawBodySaver = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

/* This funtion will pull the authorization uris out of a conformance statement and
   return them as a simple json structure
*/
const authUris = (response) => {
  const restSecurityEntries = response.data.rest
    .filter((r) => r.mode === 'server' && r.security && r.security.extension)
    .map((e) => e.security.extension)
    .flat();

  if (restSecurityEntries.length === 0) {
    console.log('no rest security entries found in conformance statement');
    return {};
  }

  const uris = {};

  restSecurityEntries
    .filter((e) => e.url === 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris')
    .map((ex) => ex.extension)
    .flat()
    .forEach((ex) => {
      uris[ex.url] = ex.valueUri;
    });

  return uris;
};

// Builds the express controller with auth mappings
const build = (server) => {
  const router = new express.Router();

  const defaultCorsOptions = { ...server.config.server.corsOptions };
  // this is the redirection for the
  router.use(bodyParser.json()); // for parsing application/json
  router.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true })); // for parsing application/x-www-form-urlencoded

  // adds the authroize method to the router
  // This will simply redirect to the configured baseurl of the fhirclient
  router.get('/authorize', cors(defaultCorsOptions), (req, res) => {
    console.log('AUTHORIZE CALLED');
    const fhirClient = mkFhir(options);
    fhirClient
      .conformance(fhirClientConfig)
      .then((response) => {
        const uris = authUris(response);
        const params = req.query;
        params.aud = fhirClientConfig.baseUrl;
        console.log('sending redirect back to client');
        res.redirect(
          301,
          url.format({
            pathname: uris.authorize,
            query: params,
          }),
        );
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  });

  /*
  Adds the token url to the router.
  This method acts as a proxy where in it takes the parameters passed in the request
  and uses those to generate a new request to the Smart on FHIR server for the
  fhirClient.  The response from the proxied call is then used as the response for
  the initial request
  */
  router.post('/token', cors(defaultCorsOptions), (req, res) => {
    const fhirClient = mkFhir({
      baseUrl: fhirClientConfig.baseUrl,
    });
    fhirClient.conformance(fhirClientConfig).then((response) => {
      const uris = authUris(response);
      request.post({ url: uris.token, form: req.body }, (err, httpResponse, body) => {
        if (err) {
          console.log(err);
        }
        res.status(httpResponse.statusCode).send(body);
      });
    });
  });
  return router;
};
module.exports = build;
