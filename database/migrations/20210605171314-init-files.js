'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, ENUM } = Sequelize;
    await queryInterface.createTable('files', {
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
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('files');
  }
};
