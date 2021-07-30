const PassThroughService = require('../utils/passthrough.service');

class EncounterService extends PassThroughService {
  constructor() {
    super('Encounter');
  }
}

module.exports = new EncounterService();
