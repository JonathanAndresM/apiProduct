import { sequelize } from '../sequelize_conn'
import { DataTypes } from 'sequelize';

const Product_price = sequelize.define(
	'Product_price',
	{
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,

		},
		product_price: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0.0,
		}
	}
);