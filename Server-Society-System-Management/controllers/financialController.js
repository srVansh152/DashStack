const Financial = require('../models/Financial');

// Create a new financial record
exports.createFinancialRecord = async (req, res) => {
    const {
        amount,
        penaltyAmount = 0,
        dueDate,
        paymentMethod,
        lastPenaltyDate,
        status = 'pending'
    } = req.body;

    try {
        // Check if the required fields are present
        if (!amount || !dueDate || !paymentMethod) {
            return res.status(400).json({ message: 'Amount, due date, and payment method are required.' });
        }

        // Validate that user has a society and residents are available
        if (!req.user.society || !req.residents.length) {
            return res.status(400).json({ message: 'Society and resident data are required.' });
        }

        // Collect all resident IDs in an array
        const residentIds = req.residents.map(resident => resident._id);

        // Create a new financial record
        const financialRecord = new Financial({
            society: req.user.society._id, // Retrieved from user’s populated society
            residents: residentIds,        // Array of resident IDs
            amount,
            penaltyAmount,
            dueDate,
            lastPenaltyDate,
            status,
            paymentMethod,
        });

        await financialRecord.save();

        res.status(201).json(financialRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// View all financial records for the authenticated resident
exports.getFinancialRecords = async (req, res) => {
    try {
        const financialRecords = await Financial.find({ user: req.user._id }) // Automatically use resident ID from the authenticated user
            .populate('society')
            .populate('resident');
        res.json(financialRecords);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching financial records', error });
    }
};

// Get detailed financial record by ID
exports.getFinancialRecordById = async (req, res) => {
    try {
        const financial = await Financial.findById(req.params.id)
            .populate('society')
            .populate('resident');

        if (!financial) {
            return res.status(404).json({ message: 'Financial record not found' });
        }

        res.json(financial);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching financial record', error });
    }
};

// Update financial record status to complete
exports.payFinancialRecord = async (req, res) => {
    try {
        const financial = await Financial.findById(req.params.id);
        if (!financial) {
            return res.status(404).json({ message: 'Financial record not found' });
        }

        financial.status = 'complete'; // Mark as complete
        financial.lastPenaltyDate = new Date(); // Update last penalty date to now
        await financial.save();

        res.json(financial);
    } catch (error) {
        res.status(400).json({ message: 'Error updating financial record', error });
    }
};
