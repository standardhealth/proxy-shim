const { loggers } = require('@asymmetrik/node-fhir-server-core');
const jose = require('node-jose');
const axios = require('axios');
const { v4 } = require('uuid');
const queryString = require('query-string');
const keys = require('../keys/privateKey.json');

const logger = loggers.get('default');

/**
 * Get the token_endpoint from the .well-known/smart-configuration
 *
 * @param {string} url - the fhir base url
 * @returns token_endpoint
 */
async function getTokenEndpoint(url) {
  const response = await axios.get(`${url}/.well-known/smart-configuration`);
  return response.data.token_endpoint;
}

/**
 * Generate a signed JWT used for authenticating
 * @param {string} client_id The identifier of the client on the remote server
 * @param {string} aud The token url of the server the JWT is being created for
 */
async function generateJWT(client_id, aud) {
  // TODO: the spec allows for either RS384 or EC384 to be used
  const options = { alg: 'RS384', compact: true };
  const keystore = await jose.JWK.asKeyStore(keys);
  const key = keystore.get(keys.keys[0].kid);

  const input = JSON.stringify({
    sub: client_id,
    iss: client_id,
    aud: aud,
    exp: Math.floor(Date.now() / 1000) + 300,
    jti: v4()
  });

  return await jose.JWS.createSign(options, key)
    .update(input)
    .final();
}

/**
 * Generate and return access token for the specified server. If tokenEndpoint
 * is provided it will use that, otherwise it will query the smart configuration.
 *
 * @param {string} url  the fhir base url for the server to connect to
 * @returns access token.
 */
async function connectToServer(url, clientId) {
  // Generate the client_assertion jwt
  const tokenEndpoint = await getTokenEndpoint(url);
  const jwt = await generateJWT(clientId, tokenEndpoint);

  const props = {
    scope: 'system/*.read',
    grant_type: 'client_credentials',
    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    client_assertion: jwt
  };

  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      Accept: '*/*'
    }
  };

  // Get access token from auth server
  const data = await axios
    .post(tokenEndpoint, queryString.stringify(props), headers)
    .then(response => response.data)
    .catch(err => logger.error(err));
  return data;
}

/**
 * Function to get an access token for the authorization header of request
 *
 * @param {string} url - the base url of the server to connect to
 * @param {string} clientId - The identifier of the client on the remote server
 */
async function getAccessToken(url, clientId) {
  try {
    const token = await connectToServer(url, clientId);
    return token.access_token;
  } catch (e) {
    throw e;
  }
}

module.exports = { getAccessToken };