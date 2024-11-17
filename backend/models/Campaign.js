const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: { type: String, required: true },
    audience: { type: [String], required: true }, // Array of customer IDs
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Campaign', campaignSchema);
