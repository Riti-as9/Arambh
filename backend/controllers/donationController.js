const Donation = require('../models/Donation');

// @desc    Create new donation
// @route   POST /api/donation
// @access  Public
const createDonation = async (req, res) => {
  try {
    const { name, email, amount } = req.body;

    if (!name || !email || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and amount are required'
      });
    }

    const donation = await Donation.create({
      name,
      email,
      amount
    });

    res.status(201).json({
      success: true,
      data: donation,
      message: 'Donation recorded successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all donations (newest first)
// @route   GET /api/donation
// @access  Public
const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: donations,
      message: 'Donations retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { createDonation, getDonations };
