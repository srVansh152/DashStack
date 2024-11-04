const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  billImage: { type: String }, // Store image file path
  society: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Society', // Reference to the Society model
    required: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the admin
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);



