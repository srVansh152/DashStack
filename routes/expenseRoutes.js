const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware to add req.user

// Middleware to handle file uploads
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // or configure storage as per your requirements

// Add new expense
router.post('/add', authMiddleware, upload.single('billImage'), expenseController.addExpense);

// Update expense
router.put('/update/:id', authMiddleware, upload.single('billImage'), expenseController.updateExpense);

// View a single expense
router.get('/view/:id', authMiddleware, expenseController.viewExpense);

// Delete an expense
router.delete('/delete/:id', authMiddleware, expenseController.deleteExpense);

// List expenses for the authenticated user's society and admin
router.get('/list', authMiddleware, expenseController.listExpensesBySocietyAndAdmin);

module.exports = router;
