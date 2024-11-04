const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
  facilityName: { type: String, required: true },
  description: { type: String, required: true },
  scheduleServiceDate: { type: Date, required: true },
  remindBeforeDays: { type: Number, required: true }, // Reminder in days before the service date
  notificationSent: { type: Boolean, default: false }, // Track if notification is sent
  society: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true }, // Society reference
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Admin reference
}, { timestamps: true });

module.exports = mongoose.model('Facility', facilitySchema);

