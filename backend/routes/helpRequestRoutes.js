const express = require('express');
const { createHelpRequest, getHelpRequests, updateHelpRequestStatus } = require('../controllers/helpRequestController');
const router = express.Router();

// Submit a new help request
router.post('/', createHelpRequest);

// Get all help requests (newest first)
router.get('/', getHelpRequests);

// Update help request status
router.patch('/:id', updateHelpRequestStatus);

module.exports = router;
