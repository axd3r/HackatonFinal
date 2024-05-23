// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Crear usuario
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = new User({ name, email, password });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    await user.remove();
    res.json({ msg: 'User removed' });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
