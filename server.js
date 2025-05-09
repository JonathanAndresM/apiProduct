import express, { json } from "express";
import { connectDB, syncDB } from "./src/db/sequelize_conn.js";
import router from "./src/routes/v1/index.js";

process.loadEnvFile();

const app = express();

await connectDB();
await syncDB();

app.use(express.urlencoded({ extended: true })); // Middleware para parsear el cuerpo de las peticiones

app.use(json());
app.use("/api/v1", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
