import express, { json } from 'express';
import productsRouter from './routes/products.js';
import { connectDB } from './db/sequelize_conn.js';

const app = express();

connectDB();

app.use(json());
app.use('/products', productsRouter);


export default app; // Para testing
