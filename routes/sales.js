const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

// Obtener todas las ventas
router.get('/', saleController.getAllSales);

// Obtener detalles de una venta específica
router.get('/:id', saleController.getSaleById);

// Crear una nueva venta
router.post('/', saleController.createSale);

// Actualizar una venta existente
router.put('/:id', saleController.updateSale);

// Eliminar una venta
router.delete('/:id', saleController.deleteSale);

module.exports = router;
