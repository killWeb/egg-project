'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/api/user/logout', controller.user.logout);
    router.post('/api/user/login', controller.user.login);
    router.post('/api/user/region', controller.user.region);
    router.get('/api/user/info', controller.user.info);
};
