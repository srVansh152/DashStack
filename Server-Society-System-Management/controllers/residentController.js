const nodemailer = require('nodemailer');
const Resident = require('../models/Resident');
const Society = require('../models/Society');

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use your email configuration
        pass: process.env.EMAIL_PASS,
    },
});

// Function to generate a random 6-digit password
const generateRandomPassword = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit random number
};

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

        // Generate a random password for the resident
        const randomPassword = generateRandomPassword();

        const residentData = {
            photo,
            aadhaarFront,
            aadhaarBack,
            addressProof,
            rentAgreement,
            ...req.body,
            society: societyId, // Associate resident with the admin's society
            createdBy: req.user._id, // Store the admin's ID who created this resident
            password: randomPassword, // Set the generated password
        };

        const resident = new Resident(residentData);
        await resident.save();

        // Update society by adding the new resident and incrementing the unit count
        await Society.findByIdAndUpdate(
            societyId,
            {
                $inc: { units: 1 },
                $push: { residents: resident._id }
            },
            { new: true }
        );

        // Send an email to the resident with their login credentials
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: resident.email,
            subject: 'Welcome to Our Society',
            text: `Dear ${resident.fullName},\n\nWelcome to our community! Your login credentials are as follows:\n\nEmail: ${resident.email}\nPassword: ${randomPassword}\n\nPlease log in and change your password at your earliest convenience.\n\nThank you,\nSociety Management Team`,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #4CAF50;">User Login Details</h2>
            <p>A user has submitted their login details:</p>
            <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <th style="text-align: left; padding: 8px; border: 1px solid #ddd; background-color: #f7f7f7;">Field</th>
                    <th style="text-align: left; padding: 8px; border: 1px solid #ddd; background-color: #f7f7f7;">Details</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Email</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${ resident.email}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Password</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${ randomPassword}</td>
                </tr>
            </table>
            <p style="margin-top: 20px;">Regards,<br>Your Team</p>
        </div>
    `
        };

        await transporter.sendMail(mailOptions);

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
