/**
 * 判断是否登录
 * @param {object} options - 中间件的配置项
 * @param {Egg.Application} app - 当前应用的实例
 * @author yibo.wei
 * @return {null} null
 */
module.exports = (options, app) => {
    return async function auth (ctx, next) {
        const ignorePaths = [ '/api/drag/list', '/api/user/region', '/api/user/login', '/api/user/logout' ];
        if (ignorePaths.includes(ctx.path)) return await next();
        const valid = await ctx.verifyToken();
        if (valid) return await next();
        ctx.body = {
            code: 403,
            info: "Token is expires or error"
        }
    };
};