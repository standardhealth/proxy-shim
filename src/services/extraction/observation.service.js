const BaseExtractionService = require('./base.service');

class ObservationService extends BaseExtractionService {
  constructor() {
    super('Observation');
  }
}

module.exports = new ObservationService();
