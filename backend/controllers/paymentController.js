const Payment = require('../models/Payment');
const FinancialIncome = require('../models/FinancialIncome');
const Society = require('../models/Society');

// Create payment records for each resident in a financial income record
exports.createPayments = async (req, res) => {
  const { financialIncomeId } = req.body;

  try {
    const financialIncome = await FinancialIncome.findById(financialIncomeId).populate('societyId');
    if (!financialIncome) return res.status(404).json({ message: 'Financial Income not found' });

    const society = await Society.findById(financialIncome.societyId).populate('residents');
    const paymentPromises = society.residents.map(resident => {
      return Payment.create({
        residentId: resident._id,
        financialIncomeId,
        societyId: financialIncome.societyId,
        adminId: financialIncome.adminId,
        penaltyAmount: 0
      });
    });

    await Promise.all(paymentPromises);
    res.status(201).json({ message: 'Payments created for all residents' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get payment status for all residents in a specific financial income record
exports.getPaymentsByFinancialIncome = async (req, res) => {
  try {
    const payments = await Payment.find({ financialIncomeId: req.params.financialIncomeId })
      .populate('residentId')
      .populate('financialIncomeId');

    res.json(payments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark a resident's payment as complete
exports.markResidentPaid = async (req, res) => {
  try {
    const { residentId } = req.body;
    const payment = await Payment.findOne({
      financialIncomeId: req.params.financialIncomeId,
      residentId
    });

    if (!payment) return res.status(404).json({ message: 'Payment record not found' });

    payment.hasPaid = true;
    payment.penaltyAmount = 0;
    payment.paymentDate = new Date();
    await payment.save();

    res.json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
