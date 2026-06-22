const express = require('express');
const { getDashboardStats } = require('../controllers/statsController');
const router = express.Router();

// Get dashboard statistics
router.get('/', getDashboardStats);

module.exports = router;
