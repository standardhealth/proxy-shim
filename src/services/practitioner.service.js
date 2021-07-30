const PassThroughService = require('../utils/passthrough.service');

class PractitionerService extends PassThroughService {
  constructor() {
    super('Practitioner');
  }
}

module.exports = new PractitionerService();
