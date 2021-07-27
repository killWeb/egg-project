'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/api/auto/ci', controller.auto.ci);
    router.get('/api/auto/cd', controller.auto.cd);
};