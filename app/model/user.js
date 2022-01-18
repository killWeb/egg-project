'use strict';
module.exports = app => {
    const { INTEGER, DATE, STRING } = app.Sequelize;
    const User = app.model.define('user', {
        id: { 
            // 类型
            type: INTEGER(20), 
            // 主键
            primaryKey: true, 
            // 自增
            autoIncrement: true 
        },
        userName: {
            type: STRING(30),
            comment: "用户中文名"
        },
        userCode: {
            type: STRING(30),
            comment: "用户名"
        },
        password: {
            type: STRING(30),
            comment: "密码"
        },
        created_at: {
            type: DATE,
            get() {
                const time = this.getDataValue('created_at');
                return new Date(time).getTime()
            }
        },
        updated_at: {
            type: DATE,
            get() {
                const time = this.getDataValue('updated_at');
                return new Date(time).getTime()
            }
        }
    });
    return User;
}