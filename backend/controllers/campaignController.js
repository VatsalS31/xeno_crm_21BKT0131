const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
    const { name, audience, message } = req.body;
    try {
        const newCampaign = new Campaign({ name, audience, message });
        await newCampaign.save();
        res.status(201).json(newCampaign);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add more functions for retrieving campaign history...
