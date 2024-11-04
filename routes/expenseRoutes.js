const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const upload = require('../middleware/upload'); // Assuming you have a middleware for file uploads

// Route to add a new expense
router.post('/add', upload.single('billImage'), expenseController.addExpense);

// Route to update an expense by ID
router.put('/update/:id', upload.single('billImage'), expenseController.updateExpense);

// Route to view an expense by ID
router.get('/view/:id', expenseController.viewExpense);

// Route to delete an expense by ID
router.delete('/delete/:id', expenseController.deleteExpense);

// Route to get all expenses by societyId and adminId
router.get('/list', expenseController.listExpensesBySocietyAndAdmin);

module.exports = router;
