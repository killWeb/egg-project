'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  async echo() {
    console.log(333, this.app);
  }
}

module.exports = UsersService;
