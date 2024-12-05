const mongoose = require('mongoose');

const securityGuardSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,  // Ensure email is unique
    lowercase: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  profilePhoto: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  shift: { type: String, enum: ['day', 'night', 'evening'], required: true },
  shiftDate: { type: Date, required: true },
  shiftTime: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  aadhaarCardImage: { type: String, required: true },
  societyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, default: 'security' }
}, { timestamps: true });

module.exports = mongoose.model('SecurityGuard', securityGuardSchema);
