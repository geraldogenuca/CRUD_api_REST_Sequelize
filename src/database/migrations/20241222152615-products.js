'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      id_category: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'id_category',
          references: {
            model: 'Categories',
            key: 'id_category'
          },
      },
      name_product: {
          type: Sequelize.STRING(150),
          allowNull: false,
      },
      price_product: {
          type: Sequelize.DOUBLE,
          allowNull: false,
      },
      description_products: {
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
    })    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products')
  }
}
