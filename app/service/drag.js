'use strict';

const Service = require('egg').Service;

class DragService extends Service {
    async getList (req) {
        const { title, author, id, currentPage, pageSize } = req.query;
        const { Drag } = this.app.model;
        const { Op } = this.app.Sequelize;
        const limit = +pageSize || 10;
        const offset = (+currentPage || 1) * limit - limit;
        const query = {};
        if (title) {
            query.title = {
                [Op.like]: `%${title}%`
            }
        }
        author && (query.author = author);
        id && (query.id = id);
        const res = await Drag.findAndCountAll({
            where: query,
            attributes: ["title", "author", "description", "cover_image", "id", "created_at", "updated_at"],
            order: [
                ['updated_at', 'DESC']
            ],
            limit,
            offset
        });
        const resultList = {
            total: res.count,
            list: res.rows,
            currentPage,
            pageSize
        }
        return resultList;
    }
    async getDetail (req) {
        const { id } = req.query;
        const { Drag } = this.app.model;
        console.log('query', id)
        const data = await Drag.findByPk(+id);
        return data;
    }
    async add (req) {
        const { Drag } = this.app.model;
        const query = req.body;
        const res = await Drag.create(query);
        return res;
    }
    async update (req) {
        const { Drag } = this.app.model;
        const query = req.body;
        const data = await Drag.findByPk(+query.id);
        if(!data) {
            return null;
        }
        delete query.id;
        const res = await data.update(query, {
            fields: ['title', 'description', 'cover_image', 'json_data']
        });
        return res;
    }
    async delete (req) {
        const { Files } = this.app.model;
        const query = req.body;
        const data = await Files.findByPk(+query.id);
        if(!data) {
            return null;
        }
        const res = await data.destroy();
        return res;
    }
}

module.exports = DragService;
