// @desc    Admin login (simple credential check)
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = (req, res) => {
  try {
    const { email, password } = req.body;

    // Check against environment variables
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: { email, name: 'Arambh Admin' }
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { loginAdmin };
