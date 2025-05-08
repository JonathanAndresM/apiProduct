import express, { json } from 'express';
import productsRouter from './routes/products.js';
import { connectDB } from './db/sequelize_conn.js';
import setupAssociations from './sequelize_models/associations.js'; // Importar la función de asociaciones

const app = express();

connectDB();
setupAssociations(); // Configurar las asociaciones entre los modelos
app.use(express.urlencoded({ extended: true })); // Middleware para parsear el cuerpo de las peticiones

app.use(json());
app.use('/products', productsRouter);


export default app; // Para testing
