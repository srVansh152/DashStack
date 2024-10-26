const Expense = require('../models/Expense');
const path = require('path');
const fs = require('fs');

// Add new expense
exports.addExpense = async (req, res) => {
  try {
    const { title, description, date, amount } = req.body;
    const billImage = req.file ? req.file.path : null;

    const newExpense = new Expense({ title, description, date, amount, billImage });
    await newExpense.save();

    res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense', error: error.message });
  }
};

// Update expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, amount } = req.body;
    const billImage = req.file ? req.file.path : null;

    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { title, description, date, amount, billImage },
      { new: true }
    );

    res.json({ message: 'Expense updated successfully', expense: updatedExpense });
  } catch (error) {
    res.status(500).json({ message: 'Error updating expense', error: error.message });
  }
};

// View expense
exports.viewExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expense', error: error.message });
  }
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByIdAndDelete(id);

    if (expense && expense.billImage) {
      fs.unlinkSync(path.join(__dirname, '..', expense.billImage)); // Delete image file
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting expense', error: error.message });
  }
};
