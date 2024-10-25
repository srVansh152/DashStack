const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  residents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resident'
    }
  ],
  occupiedUnits: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Society', societySchema);
