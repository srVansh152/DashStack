const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  facility: { type: mongoose.Schema.Types.ObjectId, ref: 'Facility', required: true },
  message: { type: String, required: true },
  viewed: { type: Boolean, default: false },
  society: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true }, // Reference to the associated society
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to the associated admin
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);


