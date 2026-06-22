const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  // Volunteer's full name (required)
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  // Volunteer's email (must be valid format)
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  },
  // Volunteer's phone number
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  // Skills the volunteer can contribute (array of strings)
  skills: {
    type: [String],
    default: []
  },
  // Volunteer's city of residence
  city: {
    type: String,
    required: [true, 'City is required']
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
