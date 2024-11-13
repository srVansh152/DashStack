const nodemailer = require('nodemailer');
const Resident = require('../models/Resident');
const Society = require('../models/Society');
const Payment = require('../models/Payment'); // Assuming you have a Payment model

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Function to generate a random 6-digit password
const generateRandomPassword = () => Math.floor(100000 + Math.random() * 900000).toString();

// Controller to create a new resident
exports.createResident = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.files);

        const files = req.files || {};
        const societyId = req.user.society._id;

        if (!societyId) {
            return res.status(400).json({ message: "Society ID not found in admin's data." });
        }

        // Check if required files are present
        if (!files.photo || !files.aadhaarFront || !files.aadhaarBack || !files.addressProof || !files.rentAgreement) {
            return res.status(400).json({ message: "Required document uploads are missing." });
        }

        const photo = files.photo[0].path;
        const aadhaarFront = files.aadhaarFront[0].path;
        const aadhaarBack = files.aadhaarBack[0].path;
        const addressProof = files.addressProof[0].path;
        const rentAgreement = files.rentAgreement[0].path;

        // Parse fields from JSON strings if they are strings
        const members = typeof req.body.members === 'string' ? JSON.parse(req.body.members) : req.body.members;
        const vehicles = typeof req.body.vehicles === 'string' ? JSON.parse(req.body.vehicles) : req.body.vehicles;
        const ownerDetails = typeof req.body.ownerDetails === 'string' ? JSON.parse(req.body.ownerDetails) : req.body.ownerDetails;

        // Ensure required fields in `ownerDetails` are present
        if (!ownerDetails || !ownerDetails.address || !ownerDetails.phoneNumber || !ownerDetails.fullName) {
            return res.status(400).json({ message: "Owner details are incomplete or missing." });
        }

        const randomPassword = generateRandomPassword();

        // Prepare resident data
        const residentData = {
            ...req.body,
            photo,
            aadhaarFront,
            aadhaarBack,
            addressProof,
            rentAgreement,
            members,
            vehicles,
            ownerDetails,
            society: societyId,
            createdBy: req.user._id,
            password: randomPassword,
        };

        const resident = new Resident(residentData);
        await resident.save();

        // Initialize payment entry for this resident
        // const initialPaymentEntry = new Payment({
        //     resident: resident._id,
        //     amount: 0,
        //     status: 'pending',
        //     dueDate: null,
        // });
        // await initialPaymentEntry.save();

        // Update society's resident list and unit count
        await Society.findByIdAndUpdate(
            societyId,
            {
                $inc: { units: 1 },
                $push: { residents: resident._id }
            },
            { new: true }
        );

        // Send email to resident
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: resident.email,
            subject: 'Welcome to Our Society',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #4CAF50;">User Login Details</h2>
                    <p>Welcome, ${resident.fullName}!</p>
                    <p>Your login credentials are:</p>
                    <table>
                        <tr><td>Email:</td><td>${resident.email}</td></tr>
                        <tr><td>Password:</td><td>${randomPassword}</td></tr>
                    </table>
                    <p>Regards,<br>Society Management Team</p>
                </div>
            `
        };
        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "Resident created successfully", resident });
    } catch (error) {
        console.error('Error creating resident:', error);
        res.status(500).json({ message: "Failed to create resident", error: error.message });
    }
};

// Controller to update resident details
exports.updateResident = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) return res.status(404).json({ message: "Resident not found" });

        // Check if resident has vacated before updating
        if (resident.status === 'vacated') return res.status(400).json({ message: "Resident has vacated. Update not allowed." });

        // Update fields with new values from request body
        Object.assign(resident, req.body);

        // Save updated resident details
        await resident.save();
        res.status(200).json({ message: 'Resident updated successfully', resident });
    } catch (error) {
        console.error('Error updating resident:', error);
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete a resident
exports.deleteResident = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId);

        if (!resident) return res.status(404).json({ message: "Resident not found" });

        if (resident.status === 'vacated') {
            await resident.remove();

            // Adjust society unit count and remove resident ID from society record
            await Society.findByIdAndUpdate(
                resident.society,
                {
                    $inc: { units: -1 },
                    $pull: { residents: resident._id }
                },
                { new: true }
            );

            return res.status(200).json({ message: "Resident deleted successfully" });
        } else {
            return res.status(400).json({ message: "Resident has not vacated. Deletion not allowed." });
        }
    } catch (error) {
        console.error('Error deleting resident:', error);
        res.status(400).json({ message: error.message });
    }
};

// Controller to fetch all residents in a society
exports.getResidents = async (req, res) => {
    try {
        const societyId = req.user.society;

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

// Controller to fetch details of a specific resident
exports.getResidentDetails = async (req, res) => {
    try {
        const residentId = req.params.id;
        const resident = await Resident.findById(residentId).populate('payments'); // Assuming you want payment details

        if (!resident) return res.status(404).json({ message: "Resident not found" });

        res.status(200).json(resident);
    } catch (error) {
        console.error('Error fetching resident details:', error);
        res.status(400).json({ message: error.message });
    }
};
