const OtherIncome = require('../models/OtherIncome');
const Payment = require('../models/Payment');


// Create a new Other Income record
exports.createOtherIncome = async (req, res) => {
  const { title, dueDate, description, amount } = req.body;

  try {
    if (!title || !dueDate || !description || !amount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const otherIncome = new OtherIncome({
      title,
      date: new Date(),
      dueDate,
      description,
      amount,
      adminId: req.user._id,
      societyId: req.user.society._id,
    });

    await otherIncome.save();
    res.status(201).json(otherIncome);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// View all Other Income records for the authenticated society
exports.getOtherIncomes = async (req, res) => {
  try {
    const otherIncomes = await OtherIncome.find({ societyId: req.user.society._id })
      .populate('paidByResidents'); 

    res.json(otherIncomes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// View details of a specific Other Income record
exports.getOtherIncomeById = async (req, res) => {
  try {
    const otherIncome = await OtherIncome.findById(req.params.id)
      .populate('paidByResidents', 'firstname lastname');

    if (!otherIncome) {
      return res.status(404).json({ message: 'Other Income record not found' });
    }

    res.json(otherIncome);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Edit an Other Income record
exports.editOtherIncome = async (req, res) => {
  const { dueDate, description, amount } = req.body;

  try {
    const otherIncome = await OtherIncome.findById(req.params.id);
    if (!otherIncome) {
      return res.status(404).json({ message: 'Other Income record not found' });
    }

    if (dueDate) otherIncome.dueDate = dueDate;
    if (description) otherIncome.description = description;
    if (amount) otherIncome.amount = amount;

    await otherIncome.save();
    res.json(otherIncome);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an expired Other Income record
exports.deleteExpiredOtherIncome = async (req, res) => {
  try {
    const result = await OtherIncome.deleteMany({ dueDate: { $lt: new Date() } });
    res.json({ message: 'Expired records deleted', deletedCount: result.deletedCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark resident as paid for a specific Other Income
exports.markResidentPaid = async (req, res) => {
  try {
    const { residentId, amount } = req.body;
    const otherIncome = await OtherIncome.findById(req.params.id);

    if (!otherIncome) {
      return res.status(404).json({ message: 'Other Income record not found' });
    }

    // Check if the resident has already paid for this Other Income record
    const existingPayment = await Payment.findOne({
      residentId,
      incomeId: otherIncome._id,
      paymentType: 'OtherIncome'
    });

    if (existingPayment) {
      return res.status(400).json({ message: 'Resident has already paid for this income record.' });
    }

    // Create a new payment record
    const payment = new Payment({
      residentId,
      amount,
      paymentType: 'OtherIncome',
      incomeId: otherIncome._id,
      societyId: otherIncome.societyId,
      adminId: req.user._id,
      hasPaid: true,
      paymentDate: new Date()
    });

    await payment.save();

    // Add payment reference to the OtherIncome record
    otherIncome.paidByResidents.push(payment._id);
    await otherIncome.save();

    res.json({ message: 'Payment recorded successfully', payment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
