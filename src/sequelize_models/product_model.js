import sequelize from '../db/sequelize_conn.js'; // Importar la conexión a la base de datos
import { DataTypes } from '@sequelize/core';
import Product_price from './product_price';

export const Product = sequelize.define(
	'Product',
	{
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		product_description: {
			type: DataTypes.STRING,
		},
		product_stock: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}
);

Product.hasMany(Product_price, { foreignKey: 'product_id' });

export default Product;