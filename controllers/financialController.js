const FinancialIncome = require('../models/Financial');
const Payment = require('../models/Payment');
const Society = require('../models/Society');

// Create a new Financial Income record

exports.createFinancialIncome = async (req, res) => {
  const { title, dueDate, description, amount } = req.body;

  try {
    const society = await Society.findById(req.user.society._id).populate('residents');
    const financialIncome = new FinancialIncome({
      title,
      amount,
      dueDate,
      description,
      adminId: req.user._id,
      societyId: req.user.society._id
    });

    await financialIncome.save();

    const paymentPromises = society.residents.map(resident => {
      return Payment.create({
        residentId: resident._id,
        financialIncomeId: financialIncome._id,
        societyId: req.user.society._id,
        adminId: req.user._id
      });
    });

    await Promise.all(paymentPromises);
    res.status(201).json(financialIncome);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get all Financial Income records with payment status for each resident
exports.getFinancialIncomes = async (req, res) => {
  try {
    const financialIncomes = await FinancialIncome.find({ societyId: req.user.society._id });
    const paymentData = await Payment.find({
      financialIncomeId: { $in: financialIncomes.map(f => f._id) }
    }).populate('residentId');

    const financialData = financialIncomes.map(financialIncome => {
      const payments = paymentData.filter(payment => 
        payment.financialIncomeId.toString() === financialIncome._id.toString()
      );
      return {
        financialIncome,
        payments
      };
    });

    res.json(financialData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// View payment status for each resident in a specific Financial Income record
exports.getFinancialIncomeById = async (req, res) => {
  try {
    const financialIncome = await FinancialIncome.findById(req.params.id)
      .populate('residentStatus.residentId');

    if (!financialIncome) {
      return res.status(404).json({ message: 'Financial Income record not found' });
    }

    res.json(financialIncome);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark a resident as paid for a specific Financial Income
exports.markResidentPaid = async (req, res) => {
  try {
    const { residentId, amount } = req.body;
    const financialIncome = await FinancialIncome.findById(req.params.id);

    if (!financialIncome) {
      return res.status(404).json({ message: 'Financial Income record not found' });
    }

    const payment = new Payment({
      residentId,
      amount,
      paymentType: 'FinancialIncome',  // Specify the type as FinancialIncome
      incomeId: financialIncome._id,    // Link to the FinancialIncome document
      societyId: financialIncome.societyId,
      adminId: req.user._id
    });

    await payment.save();
    financialIncome.paidByResidents.push(payment._id);  // Track the payment in FinancialIncome
    await financialIncome.save();

    res.json({ message: 'Payment recorded successfully', payment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
