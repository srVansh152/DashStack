const express = require('express');
const financialController = require('../controllers/financialController');
const { protect } = require('../middlewares/authMiddleware'); // Adjust the path as needed

const router = express.Router();

// Create a new financial record
router.post('/maintenance', protect, financialController.createFinancialRecord);

// View all financial records for the authenticated resident
router.get('/maintenance', protect, financialController.getFinancialRecords);

// View detailed financial record for a specific resident by ID
router.get('/maintenance/:id', protect, financialController.getFinancialRecordById);

// Update financial record status to complete
// router.patch('/maintenance/:id/pay', protect, financialController.payFinancialRecord);

module.exports = router;
