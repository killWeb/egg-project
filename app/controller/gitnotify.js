'use strict';

const Controller = require('egg').Controller;

class GitnotifyController extends Controller {
    async handlerNotify() {
        const res = await this.service.gitnotify.handlerNotify(this.ctx.request);
        this.ctx.body = res;
    }
}

module.exports = GitnotifyController;
