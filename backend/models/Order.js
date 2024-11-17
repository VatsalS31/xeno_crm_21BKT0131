const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    orderAmount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
