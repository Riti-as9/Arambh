const express = require('express');
const { createVolunteer, getVolunteers } = require('../controllers/volunteerController');
const router = express.Router();

// Register a new volunteer
router.post('/', createVolunteer);

// Get all volunteers (newest first)
router.get('/', getVolunteers);

module.exports = router;
