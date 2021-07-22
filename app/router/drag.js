'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/api/drag/list', controller.drag.getList);
    router.get('/api/drag/detail', controller.drag.getDetail);
    router.post('/api/drag/add', controller.drag.add);
    router.post('/api/drag/update', controller.drag.update);
    router.post('/api/drag/delete', controller.drag.delete);
};
