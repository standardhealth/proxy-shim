const PassThroughService = require('../utils/passthrough.service.js');

class DeviceService extends PassThroughService {
    constructor(){
      super('Device');
    }
}

module.exports = new DeviceService();
