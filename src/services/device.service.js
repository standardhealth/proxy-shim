const PassThroughService = require('../utils/passthrough.service');

class DeviceService extends PassThroughService {
  constructor() {
    super('Device');
  }
}

module.exports = new DeviceService();
