import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import 'dotenv/config'; 

// Colocar los datos correspondientes a su BD local.
const sequelize = new Sequelize({
	dialect: MySqlDialect,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT, 10),
});

export default sequelize;
