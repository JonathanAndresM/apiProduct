import { Router } from 'express';
const router = Router();

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
