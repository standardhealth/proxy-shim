const PassThroughService = require('../utils/passthrough.service');

class MedicationOrderService extends PassThroughService {
  constructor() {
    super('MedicationOrder');
  }
}

module.exports = new MedicationOrderService();
