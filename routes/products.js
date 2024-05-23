// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Crear nuevo producto
router.post('/', async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    let product = new Product({ name, description, price, category });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Más rutas para actualizar y eliminar productos de manera similar
// ...

module.exports = router;
