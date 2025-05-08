import sequelize from '../db/sequelize_conn.js'; // Importar la conexión a la base de datos
import { DataTypes } from '@sequelize/core';

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

export default Product_price;