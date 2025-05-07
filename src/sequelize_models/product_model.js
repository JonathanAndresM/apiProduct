import { sequelize } from '../sequelize_conn'
import { DataTypes } from 'sequelize';

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