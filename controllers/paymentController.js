const Payment = require('../models/Payment');
const FinancialIncome = require('../models/Financial'); 
const Society = require('../models/Society');

// Create payment records for each resident in a payment record
exports.createPayments = async (req, res) => {
  const { paymentId } = req.body;

  try {
    // Validate `paymentId`
    if (!paymentId) {
      return res.status(400).json({ message: 'Payment ID is required' });
    }

    // Find the payment record
    const payment = await Payment.findById(paymentId).populate('societyId');
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    // Find the associated society and its residents
    const society = await Society.findById(payment.societyId).populate('residents');
    if (!society || !society.residents || society.residents.length === 0) {
      return res.status(404).json({ message: 'No residents found for this society' });
    }

    // Create payment records for all residents
    const paymentPromises = society.residents.map((resident) => {
      return Payment.create({
        residentId: resident._id,
        paymentId,
        societyId: payment.societyId,
        adminId: payment.adminId,
        amount: payment.amount || 0, // Set an amount if applicable
        penaltyAmount: 0, // Default penalty amount
      });
    });

    await Promise.all(paymentPromises);

    res.status(201).json({ message: 'Payments created for all residents' });
  } catch (error) {
    console.error('Error creating payments:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get payment status for all residents in a specific payment record
exports.getPaymentsByPayment = async (req, res) => {
  try {
    const { paymentId } = req.params;

    // Validate `paymentId`
    if (!paymentId) {
      return res.status(400).json({ message: 'Payment ID is required' });
    }

    // Find payments related to the payment record
    const payments = await Payment.find({ paymentId })
      .populate('residentId', 'name email') // Populate resident's name and email
      .populate('paymentId', 'title amount'); // Populate payment details

    if (payments.length === 0) {
      return res.status(404).json({ message: 'No payments found for this payment record' });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Mark a resident's payment as complete
exports.markResidentPaid = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const { residentId } = req.body;

    // Validate input
    if (!paymentId || !residentId) {
      return res.status(400).json({ message: 'Payment ID and Resident ID are required' });
    }

    // Find the payment record
    const payment = await Payment.findOne({
      paymentId,
      residentId,
    });

    if (!payment) {
      return res.status(404).json({ message: 'Payment record not found' });
    }

    // Update payment details
    payment.hasPaid = true;
    payment.penaltyAmount = 0;
    payment.paymentDate = new Date();

    await payment.save();

    res.status(200).json({ message: 'Payment marked as complete', payment });
  } catch (error) {
    console.error('Error marking payment as paid:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
