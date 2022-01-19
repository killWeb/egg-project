module.exports = {
    // 获取token
    getAccessToken() {
        return this.cookies.get('nj_token', { signed: false });
    },
    // 设置token
    setToken(data = {}) {
        const { app } = this;
        let { id } = data;
        const token = app.jwt.sign(data, app.config.jwt.secret, { expiresIn: '12h' });
        const cookieConfig = { maxAge: 1000 * 3600 * 24 * 7, httpOnly: false, overwrite: true, signed: false };

        this.cookies.set('nj_token', token, cookieConfig);
        this.cookies.set('nj_userId', id, cookieConfig);
    },
    removeToken() {
        this.cookies.set('token', null);
        this.cookies.set('nj_userId', null);
    },
    // 校验token
    async verifyToken() {
        const { app } = this;
        const userId = this.cookies.get('nj_userId', { signed: false });
        const token = this.getAccessToken(this);
        const verifyResult = await new Promise(resolve => {
            if (!token) return resolve({ verify: false, message: "Token is empty"});
            app.jwt.verify(token, app.config.jwt.secret, (err, decoded) => {
                if (!err) return resolve({ verify: true, message: decoded });
                if (err.name !== 'TokenExpiredError' || !userId) return resolve({ verify: false, message: JSON.stringify(err.message) });
                this.setToken({ userId }); // 刷新token
                resolve({ verify: true, message: userId });
            });
        });
        if (!verifyResult.verify) return false;
        if (+userId !== +verifyResult.message.id) return false;

        this.request.body.userId = userId;
        return true;
    }
};
