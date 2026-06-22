const Volunteer = require('../models/Volunteer');
const Donation = require('../models/Donation');
const HelpRequest = require('../models/HelpRequest');

// @desc    Get dashboard statistics
// @route   GET /api/dashboard-stats
// @access  Public
const getDashboardStats = async (req, res) => {
  try {
    // Get total number of volunteers
    const totalVolunteers = await Volunteer.countDocuments();

    // Get total donations and sum of amounts
    const donations = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          amountSum: { $sum: '$amount' }
        }
      }
    ]);

    const totalDonations = donations.length > 0 ? donations[0].total : 0;
    const totalDonationAmount = donations.length > 0 ? donations[0].amountSum : 0;

    // Get total help requests and resolved ones
    const totalHelpRequests = await HelpRequest.countDocuments();
    const resolvedHelpRequests = await HelpRequest.countDocuments({ status: 'resolved' });

    res.status(200).json({
      success: true,
      data: {
        totalVolunteers,
        totalDonations,
        totalDonationAmount,
        totalHelpRequests,
        resolvedHelpRequests
      },
      message: 'Dashboard stats retrieved successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { getDashboardStats };
