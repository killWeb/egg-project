'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/files/list', controller.files.getList);
    router.post('/files/add', controller.files.add);
    router.post('/files/update', controller.files.update);
    router.post('/files/delete', controller.files.delete);
};
