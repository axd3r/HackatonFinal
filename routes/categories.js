// routes/categories.js
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Obtener todas las categorías
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Crear nueva categoría
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    let category = new Category({ name, description });
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Más rutas para actualizar y eliminar categorías de manera similar
// ...

module.exports = router;
