const PassThroughService = require('../utils/passthrough.service.js');

class MedicationDispenseService extends PassThroughService {
  constructor() {
    super('MedicationDispense');
  }
}

module.exports = new MedicationDispenseService();
