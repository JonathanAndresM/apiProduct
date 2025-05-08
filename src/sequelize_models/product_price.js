import { sequelize } from '../db/sequelize_conn'
import { DataTypes } from 'sequelize';
import Product from './product_model';

const Product_price = sequelize.define(
	'Product_price',
	{
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		product_price: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0.0,
		}
	}
);

Product_price.belongsTo(Product, { foreignKey: 'product_id' });

export default Product_price;