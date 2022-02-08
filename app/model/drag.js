'use strict';
module.exports = app => {
    const { INTEGER, DATE, STRING } = app.Sequelize;
    const Drag = app.model.define('drag', {
        id: { 
            // 类型
            type: INTEGER(20), 
            // 主键
            primaryKey: true, 
            // 自增
            autoIncrement: true 
        },
        title: {
            type: STRING(30),
            comment: "活动标题"
        },
        description: {
            type: STRING(200),
            comment: "活动描述"
        },
        coverImage: {
            type: STRING(500),
            comment: "活动封面图"
        },
        author: {
            type: STRING(10),
            comment: "作者"
        },
        authorId: {
            type: STRING(10),
            comment: "作者ID"
        },
        jsonData: {
            type: STRING(10000),
            comment: "json数据"
        },
        designWidth: {
            type: INTEGER(10),
            comment: "设计稿宽度"
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
    return Drag;
}