const mongoose = require('mongoose');

const financialSchema = new mongoose.Schema({
  society: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true },
  residents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resident' }],
  amount: { type: Number, required: true },  // Maintenance amount
  penaltyAmount: { type: Number, default: 0 },  // Penalty amount
  dueDate: { type: Date, required: true },  // Due date for maintenance payment
  lastPenaltyDate: { type: Date },  // Last date for applying penalties
  status: { type: String, enum: ['pending', 'complete'], default: 'pending' },  // Payment status
  paymentMethod: { type: String, enum: ['credit_card', 'debit_card', 'cash', 'online'], required: true },  // Payment method
  createdAt: { type: Date, default: Date.now },  // Creation date
});

module.exports = mongoose.model('Financial', financialSchema);
