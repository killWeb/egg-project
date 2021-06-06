module.exports = () => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (error) {
            ctx.app.emit('error', error, ctx);
            ctx.status = error.status;
            ctx.body = {
                code: error.status,
                info: error.message
            }
        }
    }
}