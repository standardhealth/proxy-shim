const PassThroughService = require('../utils/passthrough.service');

class ObservationService extends PassThroughService {
  constructor() {
    super('Observation');
  }
}

module.exports = new ObservationService();
