'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('images', { 
      id_image: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'id_product',
        references: {
          model: 'Products',
          key: 'id_product',
        },
      },
      path_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('images')
  }
};

