const express = require('express');
const financialIncomeController = require('../controllers/financialController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new Financial Income record
router.post('/financial-income', protect, financialIncomeController.createFinancialIncome);

// Get all Financial Income records with resident payment status
router.get('/financial-income', protect, financialIncomeController.getFinancialIncomes);

// Get payment status for each resident in a specific Financial Income record
router.get('/financial-income/:id', protect, financialIncomeController.getFinancialIncomeById);

// Mark a resident as paid for a specific Financial Income
router.patch('/financial-income/:id/mark-paid', protect, financialIncomeController.markResidentPaid);

module.exports = router;

// Update financial record status to complete
// router.patch('/maintenance/:id/pay', protect, financialController.payFinancialRecord);

// module.exports = router;
