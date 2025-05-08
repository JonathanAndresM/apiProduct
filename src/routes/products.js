import { Router } from 'express';
import productsController from '../controllers/products.controller.js'

const productsRouter = Router();

// Traer a todos los productos
productsRouter.get('/', productsController.getAllProducts);

// Traer producto por id
productsRouter.get('/:id', productsController.getProductById);

// Crear producto
productsRouter.post('/', productsController.createProduct);

// Actulizar un producto por medio de ID
productsRouter.put('/:id', productsController.updateProduct);

// Implementar soft delete
productsRouter.delete('/:id', productsController.deleteProduct);



let products = [];

productsRouter.get('/', (req, res) => {
  res.json(products);
});

productsRouter.post('/', (req, res) => {
  const product = { id: products.length + 1, ...req.body };
  products.push(product);
  res.status(201).json(product);
});

export default productsRouter;
