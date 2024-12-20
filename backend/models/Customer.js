const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    totalSpending: { type: Number, default: 0 },
    lastVisited: { type: Date },
    visitCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Customer', customerSchema);
