'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login (req) {
        const { User } = this.app.model;
        const { userName, password, userCode } = req.body;
        if(!password || !userCode) return {
            code: 400,
            info: "用户名或密码为空"
        }
        const findRes = await User.findOne({
            attributes: ["userName", "userCode", "password", "id"],
            where: {
                userCode
            }
        });
        if(findRes === null) return {
            code: 401,
            info: "用户不存在"
        };
        if(findRes.password !== password) return {
            code: 401,
            info: "密码错误"
        }
        this.ctx.setToken({ id: findRes.id });
        return {
            id: findRes.id,
            userCode: findRes.userCode,
            userName: findRes.userName
        };
    }
    async region (req) {
        const { User } = this.app.model;
        const { userName, password, userCode } = req.body;
        if(!userName || !password || !userCode) return {
            code: 400,
            info: "用户名或密码为空"
        }
        const findRes = await User.findOne({
            attributes: ["userName", "userCode"],
            where: {
                userCode
            }
        });
        if(findRes !== null) return {
            code: 401,
            info: "用户已存在"
        };
        const createRes = await User.create({
            userName,
            password,
            userCode
        });
        return createRes;
    }
    async info (req) {
        const { User } = this.app.model;
        const id = this.ctx.cookies.get("nj_userId");
        const findRes = await User.findOne({
            attributes: ["userName", "userCode", "id"],
            where: {
                id
            }
        });
        if(findRes === null) return {
            code: 401,
            info: "用户不存在"
        };
        return findRes;
    }
}

module.exports = UserService;
