'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        const data = await this.service.user.login(this.ctx.request);
        this.ctx.setToken({ id: data.id });
        this.ctx.body = data;
    }
    async logout() {
        this.ctx.removeToken();
        this.ctx.redirect("https://ixuexi.plus/");
    }
    async region() {
        const data = await this.service.user.region(this.ctx.request);
        this.ctx.body = data;
    }
}

module.exports = UserController;
