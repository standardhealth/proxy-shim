const PassThroughService = require('../utils/passthrough.service');

class MedicationStatementService extends PassThroughService {
  constructor() {
    super('MedicationStatement');
  }
}

module.exports = new MedicationStatementService();
