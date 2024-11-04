const mongoose = require('mongoose');

const otherIncomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },  // Date when income was created
  dueDate: { type: Date, required: true },  // Due date for payment
  description: { type: String, required: true },
  amount: { type: Number, required: true, min: 0 },  // Minimum amount is set to 0
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Admin who created this
  societyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true },  // Associated society
  paidByResidents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resident' }],  // Residents who have paid
});

module.exports = mongoose.model('OtherIncome', otherIncomeSchema);
