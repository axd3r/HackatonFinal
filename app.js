const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');
const saleRoutes = require('./routes/sales');

const app = express();

// Middleware para manejar el body de las solicitudes
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/myAppDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Rutas de usuarios
app.use('/users', userRoutes);

// Rutas de categorías
app.use('/categories', categoryRoutes);

// Rutas de productos
app.use('/products', productRoutes);

// Rutas de ventas
app.use('/sales', saleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
