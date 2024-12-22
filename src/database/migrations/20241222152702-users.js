'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name_user: {
          type: Sequelize.STRING(150),
          allowNull: true,
      },
      cpf_user: {
          type: Sequelize.STRING(11),
          allowNull: true,
      },
      email_user: {
          type: Sequelize.STRING(100),
          allowNull: false,
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    }
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
