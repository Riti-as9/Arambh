const Volunteer = require('../models/Volunteer');

// @desc    Create new volunteer
// @route   POST /api/volunteer
// @access  Public
const createVolunteer = async (req, res) => {
  try {
    // Destructure request body
    const { name, email, phone, skills, city } = req.body;

    // Check required fields
    if (!name || !email || !phone || !city) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and city are required'
      });
    }

    // Create volunteer
    const volunteer = await Volunteer.create({
      name,
      email,
      phone,
      skills,
      city
    });

    res.status(201).json({
      success: true,
      data: volunteer,
      message: 'Volunteer registered successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all volunteers (newest first)
// @route   GET /api/volunteer
// @access  Public
const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: volunteers,
      message: 'Volunteers retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { createVolunteer, getVolunteers };
