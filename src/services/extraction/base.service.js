const { loggers } = require('@asymmetrik/node-fhir-server-core');

const logger = loggers.get('default');

/**
 * Base class for running extraction as a service
 * Implementation details of FHIR operations are to be implemented by subclasses
 */
class BaseExtractionService {
  constructor(resourceType) {
    this.resourceType = resourceType;
  }

  search() {
    logger.info(`${this.resourceType} >>> search`);
    throw new Error(`search not implemented for ${this.resourceType}`);
  }
}

module.exports = BaseExtractionService;
