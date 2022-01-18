module.exports = () => {
    return async function log(ctx, next) {
        await next();
        const url = ctx.request.url;
        const method = ctx.request.method;
        const status = ctx.response.status;
        console.log(`>>> ${method} ${status} ${url}`);
    }
}