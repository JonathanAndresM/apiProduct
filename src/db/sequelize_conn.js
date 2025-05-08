import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import normalizePort from 'normalize-port';

process.loadEnvFile();

const enviroment = process.env

const PORT = normalizePort(enviroment.DB_PORT || 4000)

const sequelize = new Sequelize({
	dialect: MySqlDialect,
	database: enviroment.DB_NAME,
	user: enviroment.DB_USER,
	password: enviroment.DB_PASS,
	host: enviroment.DB_HOST,
	port: PORT,
});

export const connectDB = async () => {
	try {
		await sequelize.authenticate()
		console.log('Se conectó correctamente a la base de datos.')
	} catch (error) {
		console.error('No se pudo conectar a la base de datos, con error: \n', error.message)
		process.exit(1)
	}
}

export default sequelize;
