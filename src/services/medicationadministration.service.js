const PassThroughService = require('../utils/passthrough.service');

class MedicationAdministrationService extends PassThroughService {
  constructor() {
    super('MedicationAdministration');
  }
}

module.exports = new MedicationAdministrationService();
