/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_yibo_wei_19970112';

    // add your middleware config here
    config.middleware = [ 'errorHandler', 'log' ];

    // add your user config here
    const userConfig = {
    // myAppName: 'egg',
    };

    // 跨域配置
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
        // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
        credentials: true, 
    };
    // 安全配置
    config.security = {
        // 关闭csrf验证
        csrf: {
            enable: false,
        },
        // 白名单
        domainWhiteList: ['*']
    };
    // 数据库配置
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        dialectOptions: {
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci",
            supportBigNumbers: true,
            bigNumberStrings: true
        },
        database: 'egg_sql',
        host: '1.116.243.13',
        port: 3306,
        username: 'root',
        password: '432321webWEB',
        // 中国时区
        timezone: '+08:00',
        define: {
            // 取消数据表名复数
            freezeTableName: true,
            // 自动写入时间戳 created_at updated_at
            timestamp: false,
            // 字段生成软删除时间戳 deleted_at
            // paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            // deletedAt: 'deleted_at',
            // 所有驼峰命名格式化
            underscored: true
        }
    };

    config.cluster = {
        listen: {
            port: 9898
        }
    };

    return {
        ...config,
        ...userConfig,
    };
};
