const express = require('express');
const router = express.Router();
const { createCampaign } = require('../controllers/campaignController');

router.post('/', createCampaign);
// Add more routes as needed

module.exports = router;
