const PassThroughService = require('../utils/passthrough.service');

class AllergyIntoleranceService extends PassThroughService {
  constructor() {
    super('AllergyIntolerance');
  }
}

module.exports = new AllergyIntoleranceService();
