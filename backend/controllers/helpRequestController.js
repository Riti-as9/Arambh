const HelpRequest = require('../models/HelpRequest');

// @desc    Create new help request
// @route   POST /api/help-request
// @access  Public
const createHelpRequest = async (req, res) => {
  try {
    const { name, location, category, description } = req.body;

    if (!name || !location || !category || !description) {
      return res.status(400).json({
        success: false,
        message: 'Name, location, category, and description are required'
      });
    }

    const helpRequest = await HelpRequest.create({
      name,
      location,
      category,
      description
    });

    res.status(201).json({
      success: true,
      data: helpRequest,
      message: 'Help request submitted successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all help requests (newest first)
// @route   GET /api/help-request
// @access  Public
const getHelpRequests = async (req, res) => {
  try {
    const helpRequests = await HelpRequest.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: helpRequests,
      message: 'Help requests retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update help request status
// @route   PATCH /api/help-request/:id
// @access  Public (for demo purposes)
const updateHelpRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ['pending', 'in-progress', 'resolved'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be one of: pending, in-progress, resolved'
      });
    }

    const helpRequest = await HelpRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return updated document
    );

    if (!helpRequest) {
      return res.status(404).json({
        success: false,
        message: 'Help request not found'
      });
    }

    res.status(200).json({
      success: true,
      data: helpRequest,
      message: 'Help request status updated successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { createHelpRequest, getHelpRequests, updateHelpRequestStatus };
