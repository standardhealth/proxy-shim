const PassThroughService = require('../utils/passthrough.service');

class AccountService extends PassThroughService {
  constructor() {
    super('Account');
  }
}

module.exports = new AccountService();
