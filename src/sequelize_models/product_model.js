import { sequelize } from '../db/sequelize_conn'
import { DataTypes } from 'sequelize';
import Product_price from './product_price';

const Product = sequelize.define(
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