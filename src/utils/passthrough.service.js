const { resolveSchema, loggers } = require('@asymmetrik/node-fhir-server-core');
const mkFhir = require('fhir.js');
const config = require('config');

const logger = loggers.get('default');
const { fhirClientConfig } = config;

const getToken = (context) => context.req.user.context.token;

module.exports = class PassThroughService {
  constructor(resourceType, mappingService) {
    this.mappingService = mappingService;
    this.resourceType = resourceType;
    /* eslint-disable-next-line import/no-dynamic-require, global-require */
    const getResource = (baseVersion) => require(resolveSchema(baseVersion, resourceType));
    this.getResource = getResource;
  }

  /* If the instance of this class has a mappingService configured this method
     will call the mapping service to map the passed in resource to return to the
     calling client
  */
  mapResource(resource) {
    if (this.mappingService && this.mappingService.execute) {
      return this.mappingService.execute(resource);
    }
    return resource;
  }

  /* Implements the generic search operation for the configured resourceType
   */
  search(args, context) {
    return new Promise((resolve, reject) => {
      logger.info(`${this.resourceType} >>> search`);
      delete args.baseVersion;
      const options = {
        baseUrl: fhirClientConfig.baseUrl,
        auth: {
          bearer: getToken(context),
        },
      };
      const fhirClient = mkFhir(options);
      fhirClient
        .search({
          type: this.resourceType,
          query: args,
        })
        .then((response) => resolve(this.mapResource(response.data)))
        .catch(reject);
    });
  }

  /* Implements the  search by id operation for the configured resourceType
   */
  searchById(args, context) {
    return new Promise((resolve, reject) => {
      logger.info(`${this.resourceType} >>> searchById`);
      const { id } = args;
      const options = {
        baseUrl: fhirClientConfig.baseUrl,
        auth: {
          bearer: getToken(context),
        },
      };
      const fhirClient = mkFhir(options);
      fhirClient
        .read({
          type: this.resourceType,
          id,
        })
        .then((response) => {
          const { data } = response;
          if (!data.meta) {
            data.meta = {};
          }
          resolve(this.mapResource(data));
        })
        .catch(reject);
    });
  }

  // Methods below are not currently implemented
  searchByVersionId(_args, _context) {
    return new Promise((resolve, _reject) => {
      logger.info(`${this.resourceType} >>> searchByVersionId`);
      resolve();
    });
  }

  create(_args, _context) {
    return new Promise((resolve, _reject) => {
      logger.info(`${this.resourceType} >>> create`);
      resolve();
    });
  }

  update(_args, _context) {
    return new Promise((resolve, _reject) => {
      logger.info(`${this.resourceType} >>> update`);
      resolve();
    });
  }

  remove(_args, _context) {
    return new Promise((resolve, _reject) => {
      logger.info(`${this.resourceType} >>> delete`);
      resolve();
    });
  }

  history(_args, _context) {
    return new Promise((resolve, _reject) => {
      logger.info(`${this.resourceType} >>> history`);
      resolve();
    });
  }

  historyById(_args, _context) {
    return new Promise((resolve, _reject) => {
      logger.info(`${this.resourceType} >>> historyById`);
      resolve();
    });
  }
};
