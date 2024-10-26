const Resident = require('../models/Resident');
const Society = require('../models/Society'); 

exports.createResident = async (req, res) => {
    try {
        const files = req.files || {};

        
        const societyId = req.user.society; 

        if (!societyId) {
            return res.status(400).json({ message: "Society ID not found in admin's data." });
        }

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
            society: societyId, // Set society ID from the admin's data
            createdBy: req.user._id, // Use the admin's ID from the token
            password: '123' // Default password for all residents
        };

        const resident = new Resident(residentData);
        await resident.save();

        await Society.findByIdAndUpdate(
            societyId,
            { 
                $inc: { units: 1 }, 
                $push: { residents: resident._id } 
            },
            { new: true } 
        );

        res.status(201).json(resident);
    } catch (error) {
        console.error('Error creating resident:', error);
        res.status(500).json({ message: "Failed to create resident", error: error.message });
    }
};


// Update resident details
exports.updateResident = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) return res.status(404).json({ message: "Resident not found" });

        if (resident.status === 'vacated') return res.status(400).json({ message: "Resident is vacated. Confirmation needed for deletion." });

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

// Delete a resident
exports.deleteResident = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) return res.status(404).json({ message: "Resident not found" });

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

// Get all residents for a specific society
exports.getResidents = async (req, res) => {
    try {
        const societyId = req.user.society; // Get society ID from admin's data

        if (!societyId) {
            return res.status(400).json({ message: "Society ID not found." });
        }

        const residents = await Resident.find({ society: societyId });
        res.status(200).json(residents);
    } catch (error) {
        console.error('Error fetching residents:', error);
        res.status(400).json({ message: error.message });
    }
};

// Get a specific resident's details
exports.getResidentDetails = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) return res.status(404).json({ message: "Resident not found" });

        res.status(200).json(resident);
    } catch (error) {
        console.error('Error fetching resident details:', error);
        res.status(400).json({ message: error.message });
    }
};
