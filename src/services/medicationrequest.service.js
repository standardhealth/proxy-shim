const PassThroughService = require('../utils/passthrough.service');

class MedicationRequestService extends PassThroughService {
  constructor() {
    super('MedicationRequest');
  }
}

module.exports = new MedicationRequestService();
