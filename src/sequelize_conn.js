import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

// Colocar los datos correspondientes a su BD local.
const sequelize = new Sequelize({
	dialect: MySqlDialect,
	database: 'mydb',
	user: 'mysql',
	password: 'mysql',
	host: 'localhost',
	port: 3306,
});

export default sequelize;
