const mongoose = require('mongoose');

const visitorLogSchema = new mongoose.Schema({
  visitorName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Default to current date
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  wing: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true, // Format: 'HH:MM' or 'HH:MM AM/PM'
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' // Assuming the user model is named 'User'
  },
  societyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true },
  securityId: { type: mongoose.Schema.Types.ObjectId, ref: 'security', required: true }
});

module.exports = mongoose.model('VisitorLog', visitorLogSchema);