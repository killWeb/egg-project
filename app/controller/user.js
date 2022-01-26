'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getList() {
        const list = await this.service.user.getList(this.ctx.request);
        this.ctx.body = list;
    }
    async login() {
        const data = await this.service.user.login(this.ctx.request);
        this.ctx.body = data;
    }
    async logout() {
        this.ctx.removeToken();
        this.ctx.body = {
            code: 200
        }
    }
    async region() {
        const data = await this.service.user.region(this.ctx.request);
        this.ctx.body = data;
    }
    async info() {
        const data = await this.service.user.info(this.ctx.request);
        this.ctx.body = data;
    }
    async onlineTime() {
        const data = await this.service.user.onlineTime(this.ctx.request);
        this.ctx.body = data;
    }
}

module.exports = UserController;
