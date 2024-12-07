const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const securityGuardSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    profilePhoto: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    shift: { type: String, enum: ['day', 'night', 'evening'], required: true },
    shiftDate: { type: Date, required: true },
    shiftTime: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    aadhaarCardImage: { type: String, required: true },
    societyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, default: 'security' },
  },
  { timestamps: true }
);

// Hash password before saving
securityGuardSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if password is not modified
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
securityGuardSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('SecurityGuard', securityGuardSchema);