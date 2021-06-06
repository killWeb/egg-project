'use strict';
module.exports = app => {
    const { INTEGER, DATE, STRING, ENUM } = app.Sequelize;
    const Files = app.model.define('files', {
        id: { 
            // 类型
            type: INTEGER(20), 
            // 主键
            primaryKey: true, 
            // 自增
            autoIncrement: true 
        },
        name: STRING(30),
        type: {
            type: ENUM,
            values: ['IMAGE','VIDEO','OTHER'],
            allowNull: false,
            comment: '文件类型'
        },
        path: {
            type: STRING(1024),
            comment: '文件路径'
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
    return Files;
}