'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const dragRouter = require('./router/drag.js');
const filesRouter = require('./router/files.js');
const usersRouter = require('./router/users.js');

module.exports = app => {
    // //启动之前创建数据表
    // app.beforeStart(async () => {
    //     // 应用会等待这个函数执行完成才启动
    //     console.log("==app beforeStart==");
    //     await app.model.sync({
    //         //为true时删除原表创建新表
    //         //为false时不删除原有表，只创建不存在的
    //         force: false,
    //         alter: true
    //     });
    // });
    dragRouter(app);
    filesRouter(app);
    usersRouter(app);
};
