const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  // Donor's full name
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  // Donor's email
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  },
  // Donation amount (minimum 1 unit)
  amount: {
    type: Number,
    required: [true, 'Donation amount is required'],
    min: [1, 'Donation amount must be at least 1']
  },
  // Date of donation (defaults to current date/time)
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Donation', donationSchema);
