const FinancialIncome = require('../models/FinancialIncome');
const Society = require('../models/Society');

// Create a new Financial Income record
exports.createFinancialIncome = async (req, res) => {
  const { title, dueDate, description, amount } = req.body;

  try {
    // Get all residents of the society
    const society = await Society.findById(req.user.society._id).populate('residents');

    const residentStatus = society.residents.map((resident) => ({
      residentId: resident._id,
      hasPaid: false,
      penaltyAmount: 0,
    }));

    const financialIncome = new FinancialIncome({
      title,
      amount,
      dueDate,
      description,
      adminId: req.user._id,  // Admin ID from middleware
      societyId: req.user.society._id,  // Society ID from middleware
      residentStatus,
    });

    await financialIncome.save();
    res.status(201).json(financialIncome);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Financial Income records with payment status for each resident
exports.getFinancialIncomes = async (req, res) => {
  try {
    const financialIncomes = await FinancialIncome.find({ societyId: req.user.society._id })
      .populate('residentStatus.residentId');

    res.json(financialIncomes);
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
    const { residentId } = req.body;
    const financialIncome = await FinancialIncome.findById(req.params.id);

    if (!financialIncome) {
      return res.status(404).json({ message: 'Financial Income record not found' });
    }

    const residentStatus = financialIncome.residentStatus.find(
      (status) => status.residentId.toString() === residentId
    );

    if (residentStatus) {
      residentStatus.hasPaid = true;
      residentStatus.penaltyAmount = 0;  // Clear penalty if paid
      await financialIncome.save();
    } else {
      return res.status(404).json({ message: 'Resident not found in this income record' });
    }

    res.json(financialIncome);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update financial record status to complete
// exports.payFinancialRecord = async (req, res) => {
//     try {
//         const financial = await Financial.findById(req.params.id);
//         if (!financial) {
//             return res.status(404).json({ message: 'Financial record not found' });
//         }

//         financial.status = 'complete'; // Mark as complete
//         financial.lastPenaltyDate = new Date(); // Update last penalty date to now
//         await financial.save();

//         res.json(financial);
//     } catch (error) {
//         res.status(400).json({ message: 'Error updating financial record', error });
//     }
// };