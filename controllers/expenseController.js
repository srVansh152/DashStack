const Expense = require('../models/Expense');
const Society = require('../models/Society');
const path = require('path');
const fs = require('fs');

// Add new expense
exports.addExpense = async (req, res) => {
  try {
    const { title, description, date, amount, societyId, adminId } = req.body;
    const billImage = req.file ? req.file.path : null;

    const newExpense = new Expense({
      title,
      description,
      date,
      amount,
      billImage,
      society: societyId,
      admin: adminId
    });

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
    const { title, description, date, amount, societyId, adminId } = req.body;
    const billImage = req.file ? req.file.path : null;

    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: id, society: societyId, admin: adminId },
      { title, description, date, amount, billImage },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found or not associated with the specified society/admin' });
    }

    res.json({ message: 'Expense updated successfully', expense: updatedExpense });
  } catch (error) {
    res.status(500).json({ message: 'Error updating expense', error: error.message });
  }
};

// View expense
exports.viewExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findById(id).populate('society').populate('admin');

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
    const { societyId, adminId } = req.body;

    const expense = await Expense.findOneAndDelete({ _id: id, society: societyId, admin: adminId });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found or not associated with the specified society/admin' });
    }

    if (expense.billImage) {
      fs.unlinkSync(path.join(__dirname, '..', expense.billImage)); // Delete image file
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting expense', error: error.message });
  }
};

// List expenses by societyId and adminId
exports.listExpensesBySocietyAndAdmin = async (req, res) => {
  try {
    const { societyId, adminId } = req.query;

    if (!societyId || !adminId) {
      return res.status(400).json({ message: 'societyId and adminId are required' });
    }

    const expenses = await Expense.find({ society: societyId, admin: adminId }).populate('society').populate('admin');

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error: error.message });
  }
};

// Create a new society
exports.createSociety = async (req, res) => {
  try {
    const { name, location } = req.body;
    const society = new Society({ name, location });
    await society.save();
    res.status(201).json(society);
  } catch (error) {
    res.status(500).json({ message: 'Error creating society', error: error.message });
  }
};

// Read societies
exports.getSocieties = async (req, res) => {
  try {
    const societies = await Society.find();
    res.json(societies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching societies', error: error.message });
  }
};

// Update society
exports.updateSociety = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    const society = await Society.findByIdAndUpdate(id, { name, location }, { new: true });
    if (!society) return res.status(404).json({ message: 'Society not found' });

    res.json(society);
  } catch (error) {
    res.status(500).json({ message: 'Error updating society', error: error.message });
  }
};

// Delete society
exports.deleteSociety = async (req, res) => {
  try {
    const { id } = req.params;
    const society = await Society.findByIdAndDelete(id);
    if (!society) return res.status(404).json({ message: 'Society not found' });

    res.json({ message: 'Society deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting society', error: error.message });
  }
};
