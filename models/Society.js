const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
  societyname: { type: String, required: true },
  societyaddress: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: Number, required: true }, // Consider changing to String if you need leading zeros
  residents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resident' }], 
  units: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

// Export the model
module.exports = mongoose.model('Society', societySchema);