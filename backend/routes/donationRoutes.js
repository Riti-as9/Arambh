const express = require('express');
const { createDonation, getDonations } = require('../controllers/donationController');
const router = express.Router();

// Record a new donation
router.post('/', createDonation);

// Get all donations (newest first)
router.get('/', getDonations);

module.exports = router;
