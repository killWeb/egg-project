'use strict';

const Service = require('egg').Service;

class FilesService extends Service {
    async getList (req) {
        const { name, type, page, size } = req.body;
        const { Files } = this.app.model;
        const { Op } = this.app.Sequelize;
        let resultList = []
        const limit = +size || 10;
        const offset = (+page || 0) * limit;
        const query = {};
        if (name) {
            query.name = {
                [Op.like]: `%${name}%`
            }
        }
        type && (query.type = type);
        resultList = await Files.findAll({
            where: query,
            attributes: ["name", "type", "path", "id"],
            order: [
                ['id', 'ASC']
            ],
            limit,
            offset
        });
        return resultList;
    }
    async add (req) {
        const { Files } = this.app.model;
        const { filesList } = req.body;
        const res = await Files.bulkCreate(JSON.parse(filesList));
        return res;
    }
    async update (req) {
        const { Files } = this.app.model;
        const query = req.body;
        const data = await Files.findByPk(+query.id);
        if(!data) {
            return null;
        }
        delete query.id;
        const res = await data.update(query, {
            fields: ['name']
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

module.exports = FilesService;
