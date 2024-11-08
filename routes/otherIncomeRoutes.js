const express = require('express');
const otherIncomeController = require('../controllers/otherIncomeController');
const { protect } = require('../middlewares/authMiddleware');  

const router = express.Router();

// Create a new Other Income record
router.post('/other-income', protect, otherIncomeController.createOtherIncome);

// Get all Other Income records for the authenticated society
router.get('/other-income', protect, otherIncomeController.getOtherIncomes);

// Get details of a specific Other Income record
router.get('/other-income/:id', protect, otherIncomeController.getOtherIncomeById);

// Edit an Other Income record
router.patch('/other-income/:id', protect, otherIncomeController.editOtherIncome);

// Delete expired Other Income records
router.delete('/other-income/expired', protect, otherIncomeController.deleteExpiredOtherIncome);

// Mark a resident as having paid the Other Income
router.patch('/other-income/:id/mark-paid', protect, otherIncomeController.markResidentPaid);

module.exports = router;