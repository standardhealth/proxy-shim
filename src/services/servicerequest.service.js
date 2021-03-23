const PassThroughService = require('../utils/passthrough.service.js');

class ServiceRequestService extends PassThroughService {
  constructor() {
    super('ServiceRequest');
  }
}

module.exports = new ServiceRequestService();
