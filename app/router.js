'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const dragRouter = require('./router/drag.js');
const userRouter = require('./router/user.js');

module.exports = app => {
    dragRouter(app);
    userRouter(app);
};
