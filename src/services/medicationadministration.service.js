const PassThroughService = require('../utils/passthrough.service.js');

class MedicationAdministrationService extends PassThroughService {
    constructor(){
      super('MedicationAdministration');
    }
}

module.exports = new MedicationAdministrationService();
