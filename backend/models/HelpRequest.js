const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
  // Name of the person/organization requesting help
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  // Location of the help request
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  // Category of help needed (limited to predefined values)
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Education', 'Women Empowerment', 'Healthcare', 'Other'],
      message: 'Category must be one of: Education, Women Empowerment, Healthcare, Other'
    }
  },
  // Detailed description of the help needed
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  // Status of the help request
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'resolved'],
      message: 'Status must be one of: pending, in-progress, resolved'
    },
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('HelpRequest', helpRequestSchema);
