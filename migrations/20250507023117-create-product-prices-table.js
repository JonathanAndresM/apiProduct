'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Product_prices', {
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Products', // Nombre de la tabla referenciada (en plural)
        key: 'product_id' // Columna referenciada
      },
      onUpdate: 'CASCADE', // Opciones para la actualización
      onDelete: 'CASCADE' // Opciones para la eliminación (puede ser SET NULL o RESTRICT también)
    },
    product_price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Product_prices');
}
