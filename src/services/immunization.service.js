const PassThroughService = require('../utils/passthrough.service.js');

class ImmunizationService extends PassThroughService {
    constructor(){
      super('Immunization');
    }
}

module.exports = new ImmunizationService();
