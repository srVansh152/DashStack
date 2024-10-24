const Resident = require('../models/Resident');

// Create a new resident
exports.createResident = async (req, res) => {
    try {
        const files = req.files || {};
        
        // Optional: Log the files to check the structure
        console.log('Uploaded Files:', files);

        const photo = files.photo ? files.photo[0].path : null;
        const aadhaarFront = files.aadhaarFront ? files.aadhaarFront[0].path : null;
        const aadhaarBack = files.aadhaarBack ? files.aadhaarBack[0].path : null;
        const addressProof = files.addressProof ? files.addressProof[0].path : null;
        const rentAgreement = files.rentAgreement ? files.rentAgreement[0].path : null;

        const residentData = {
            photo,
            aadhaarFront,
            aadhaarBack,
            addressProof,
            rentAgreement,
            ...req.body,
            password: '123', // Set password to '123' for all residents
        };

        const resident = new Resident(residentData);
        await resident.save();
        res.status(201).json(resident);
    } catch (error) {
        console.error('Error creating resident:', error);
        res.status(400).json({ message: error.message });
    }
};

// Update a resident
exports.updateResident = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) {
            return res.status(404).json({ message: "Resident not found" });
        }

        if (resident.status === 'vacated') {
            return res.status(400).json({ message: "Resident is vacated. Confirmation needed for deletion." });
        }

        // Only update unit number and wing if necessary
        const updates = req.body;
        if (updates.unitNumber) resident.unitNumber = updates.unitNumber;
        if (updates.wing) resident.wing = updates.wing;

        await resident.save();
        res.status(200).json({ message: 'Resident updated successfully', resident });
    } catch (error) {
        console.error('Error updating resident:', error);
        res.status(400).json({ message: error.message });
    }
};

// Delete a resident (after confirmation if vacated)
exports.deleteResident = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) {
            return res.status(404).json({ message: "Resident not found" });
        }

        // Check for confirmation to delete
        if (resident.status === 'vacated') {
            await resident.remove();
            return res.status(200).json({ message: "Resident deleted successfully" });
        } else {
            return res.status(400).json({ message: "Resident is not vacated. Deletion not allowed." });
        }
    } catch (error) {
        console.error('Error deleting resident:', error);
        res.status(400).json({ message: error.message });
    }
};

// Get all residents
exports.getResidents = async (req, res) => {
    try {
        const residents = await Resident.find();
        res.status(200).json(residents);
    } catch (error) {
        console.error('Error fetching residents:', error);
        res.status(400).json({ message: error.message });
    }
};

// Get resident details by ID
exports.getResidentDetails = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) {
            return res.status(404).json({ message: "Resident not found" });
        }

        res.status(200).json(resident);
    } catch (error) {
        console.error('Error fetching resident details:', error);
        res.status(400).json({ message: error.message });
    }
};