'use strict';

const Controller = require('egg').Controller;

class AutoController extends Controller {
    async ci() {
        const res = await this.service.auto.ci(this.ctx.request);
        this.ctx.body = res;
    }
    async cd() {
        const res = await this.service.auto.cd(this.ctx.request);
        this.ctx.body = res;
    }
}

module.exports = AutoController;
