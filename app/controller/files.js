'use strict';

const Controller = require('egg').Controller;

class FilesController extends Controller {
    async getList() {
        const list = await this.service.files.getList(this.ctx.request);
        this.ctx.body = list;
    }
    async add() {
        const list = await this.service.files.add(this.ctx.request);
        this.ctx.body = list;
    }
    async update() {
        const data = await this.service.files.update(this.ctx.request);
        this.ctx.body = data;
    }
    async delete() {
        const data = await this.service.files.delete(this.ctx.request);
        this.ctx.body = data;
    }
}

module.exports = FilesController;
