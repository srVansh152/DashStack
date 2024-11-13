const Expense = require('../models/Expense');
const Society = require('../models/Society');
const path = require('path');
const fs = require('fs');

// Add new expense
// Add new expense
exports.addExpense = async (req, res) => {
    try {
      const { title, description, date, amount } = req.body;
      const billImage = req.file ? req.file.path : null;
  
      // Log the user and society IDs for verification
      console.log("User ID: " + req.user._id);
      console.log("Society ID: " + req.user.society._id);
  
      const newExpense = new Expense({
        title,
        description,
        date,
        amount,
        billImage,
        societyId: req.user.society._id, // Using the society ID from the middleware
        adminId: req.user._id // Using the admin (user) ID from the middleware
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
    const { title, description, date, amount} = req.body;
    const billImage = req.file ? req.file.path : null;

    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: id, societyId: req.user.society._id, adminId: req.user._id },
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
    const expense = await Expense.findById(id).populate('societyId').populate('adminId');

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
  
      // Ensure only the admin from the same society can delete the expense
      const expense = await Expense.findOneAndDelete({ 
        _id: id, 
        societyId: req.user.society._id, 
        adminId: req.user._id 
      });
  
      if (!expense) {
        return res.status(404).json({ message: 'Expense not found or not associated with the specified society/admin' });
      }
  
      // If an image is associated, delete it from the file system
      if (expense.billImage) {
        const imagePath = path.join(__dirname, '..', expense.billImage);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
  
      res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting expense', error: error.message });
    }
  };
  

// List expenses by societyId and adminId
exports.listExpensesBySocietyAndAdmin = async (req, res) => {
  try {
    const societyId = req.user.society._id;
    const adminId = req.user._id;

    if (!societyId || !adminId) {
      return res.status(400).json({ message: 'societyId and adminId are required' });
    }

    const expenses = await Expense.find({ societyId: societyId, adminId: adminId })
      .populate('societyId')
      .populate('adminId');

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error: error.message });
  }
};

