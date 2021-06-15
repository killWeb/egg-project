'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/api/files/list', controller.files.getList);
    router.post('/api/files/add', controller.files.add);
    router.post('/api/files/update', controller.files.update);
    router.post('/api/files/delete', controller.files.delete);
};
