// models/Sale.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Sale', SaleSchema);
