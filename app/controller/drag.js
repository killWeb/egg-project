'use strict';

const Controller = require('egg').Controller;

class DragController extends Controller {
    async getList() {
        const list = await this.service.drag.getList(this.ctx.request);
        this.ctx.body = list;
    }
    async getDetail() {
        const data = await this.service.drag.getDetail(this.ctx.request);
        this.ctx.body = data;
    }
    async add() {
        const data = await this.service.drag.add(this.ctx.request);
        this.ctx.body = data;
    }
    async update() {
        const data = await this.service.drag.update(this.ctx.request);
        this.ctx.body = data;
    }
    async delete() {
        const data = await this.service.drag.delete(this.ctx.request);
        this.ctx.body = data;
    }
}

module.exports = DragController;
