import { Router } from 'express';
import productsController from '../controllers/products.controller.js'

const router = Router();

// Traer a todos los productos
router.get('/', productsController.getAllProducts);

// Traer producto por id
router.get('/:id', productsController.getProductById);

// Crear producto
router.post('/', productsController.createProduct);

// Actulizar un producto por medio de ID
router.put('/:id', productsController.updateProduct);

// Implementar soft delete
router.delete('/:id', productsController.deleteProduct);






let products = [];

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const product = { id: products.length + 1, ...req.body };
  products.push(product);
  res.status(201).json(product);
});

export default router;
