const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  billImage: { type: String }, // Store image file path
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);