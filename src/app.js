import express, { json } from 'express';
import productsRouter from './routes/products.js';

const app = express();

app.use(json());
app.use('/products', productsRouter);


export default app; // Para testing
