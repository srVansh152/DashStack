const Society = require('../models/Society');

// Create a new society
exports.createSociety = async (req, res, next) => {
    const { societyname, societyaddress, country, state, city, zipcode, residents, units } = req.body; // Include residents and units if provided

    try {
        // Validate required fields
        if (!societyname || !societyaddress || !country || !state || !city || !zipcode) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Create society
        const society = await Society.create({
            societyname,
            societyaddress,
            country,
            state,
            city,
            zipcode, 
            residents: residents || [], 
            units: units || 0 
        });

        // Send response
        res.status(201).json({
            success: true,
            data: society
        });

    } catch (error) {
        // Handle any other errors
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

// Get all societies
exports.getSocieties = async (req, res, next) => {
    try {
        const societies = await Society.find();
        res.status(200).json({
            success: true,
            data: societies
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};