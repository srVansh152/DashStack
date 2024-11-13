const express = require('express');
const paymentController = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create payment records for all residents in a financial income
router.post('/', protect, paymentController.createPayments);

// Get payment status for each resident in a specific financial income
router.get('/:financialIncomeId', protect, paymentController.getPaymentsByFinancialIncome);

// Mark a resident as paid in a specific financial income
router.patch('/:financialIncomeId/mark-paid', protect, paymentController.markResidentPaid);

module.exports = router;
