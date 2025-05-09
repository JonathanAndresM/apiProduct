import { Sequelize } from "sequelize";

process.loadEnvFile();

const { DB_PORT, DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT || 3306,
  dialect: "mysql",
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Se conectó correctamente a la base de datos.");
  } catch (error) {
    console.error(
      "❌ No se pudo conectar a la base de datos, con error: \n",
      error.message
    );
    process.exit(1);
  }
};

export const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Base de datos sincronizada correctamente");
  } catch (error) {
    console.error("❌ Error al sincronizar la base de datos:", error.message);
  }
};

export default sequelize;
