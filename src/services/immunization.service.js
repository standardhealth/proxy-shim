const PassThroughService = require('../utils/passthrough.service');

class ImmunizationService extends PassThroughService {
  constructor() {
    super('Immunization');
  }
}

module.exports = new ImmunizationService();
