const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
let products = [];
router.get('/', productController.getAllProducts);
router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const product = { id: products.length + 1, ...req.body };
  products.push(product);
  res.status(201).json(product);
});

module.exports = router;


// name
// price
// description
// category
// stock
// saleDate {unitSold, revenue}

// base de datos
// - MongoDB

// frontend queda como esta
// backend queda separado del frontend
// - nodejs
// - express
// - mongodb
// - mongoose