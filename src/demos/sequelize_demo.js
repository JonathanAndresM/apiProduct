import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

// Colocar los datos correspondientes a su BD local.
// node sequelize_demo.js para probar.

const sequelize = new Sequelize({
	dialect: MySqlDialect,
	database: 'mydb',
	user: 'mysql',
	password: 'mysql',
	host: 'localhost',
	port: 3306,
});

try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}