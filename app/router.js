'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const filesRouter = require('./router/files.js');
const usersRouter = require('./router/users.js');
module.exports = app => {
    filesRouter(app);
    usersRouter(app);
};
