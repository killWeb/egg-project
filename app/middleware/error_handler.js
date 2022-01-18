module.exports = () => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (error) {
            ctx.app.emit('error', error, ctx);
            console.log("error", error.message);
            ctx.body = {
                code: error.status || 500,
                info: error.message || "Server is error"
            }
        }
    }
}