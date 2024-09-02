import express from 'express';
import products from '../data/products.js';
import stockPrice from '../data/stock-price.js';

const router = express.Router();

// Endpoint for getting all products
router.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint for getting all stock and prices for all SKUs
router.get('/stock-price/:sku', (req, res) => {
  const sku = req.params.sku;
  if (stockPrice[sku]) {
    res.json(stockPrice[sku]);
  } else {
    res.status(404).json({ error: 'SKU not found' });
  }
});

export default router;
