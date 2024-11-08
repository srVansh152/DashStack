const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const { protect } = require('../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Add new expense
router.post('/add', protect, upload.single('billImage'), expenseController.addExpense);

// Update expense
router.put('/update/:id', protect, upload.single('billImage'), expenseController.updateExpense);

// View a single expense
router.get('/view/:id', protect, expenseController.viewExpense);

// Delete an expense
router.delete('/delete/:id', protect, expenseController.deleteExpense);

// List expenses for the authenticated user's society and admin
router.get('/list', protect, expenseController.listExpensesBySocietyAndAdmin);

module.exports = router;
