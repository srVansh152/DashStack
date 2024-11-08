const SecurityGuard = require('../models/SecurityGuard');
const cloudinary = require('cloudinary').v2;

// Add a new security guard
exports.addSecurityGuard = async (req, res) => {
  try {
    const { fullName, phoneNumber, shift, shiftDate, shiftTime, gender } = req.body;

    if (!req.user || !req.user.society || !req.user._id) {
      return res.status(400).json({ message: 'societyId and adminId are required fields.' });
    }

    // Upload profile photo and Aadhaar card image to Cloudinary
    const profilePhoto = req.files.profilePhoto ? (await cloudinary.uploader.upload(req.files.profilePhoto.path)).url : null;
    const aadhaarCardImage = req.files.aadhaarCardImage ? (await cloudinary.uploader.upload(req.files.aadhaarCardImage.path)).url : null;

    const newSecurityGuard = new SecurityGuard({
      fullName,
      profilePhoto,
      phoneNumber,
      shift,
      shiftDate,
      shiftTime,
      gender,
      aadhaarCardImage,
      societyId: req.user.society,
      adminId: req.user._id
    });

    await newSecurityGuard.save();
    res.status(201).json({ message: 'Security Guard added successfully', securityGuard: newSecurityGuard });
  } catch (error) {
    res.status(500).json({ message: 'Error adding security guard', error: error.message });
  }
};

// Update security guard details
exports.updateSecurityGuard = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, phoneNumber, shift, shiftDate, shiftTime, gender } = req.body;

    // Find and update the security guard details
    const updatedData = { fullName, phoneNumber, shift, shiftDate, shiftTime, gender };

    // Update profile photo and Aadhaar card image if provided
    if (req.files.profilePhoto) {
      updatedData.profilePhoto = (await cloudinary.uploader.upload(req.files.profilePhoto.path)).url;
    }
    if (req.files.aadhaarCardImage) {
      updatedData.aadhaarCardImage = (await cloudinary.uploader.upload(req.files.aadhaarCardImage.path)).url;
    }

    const updatedSecurityGuard = await SecurityGuard.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedSecurityGuard) {
      return res.status(404).json({ message: 'Security Guard not found' });
    }

    res.json({ message: 'Security Guard updated successfully', securityGuard: updatedSecurityGuard });
  } catch (error) {
    res.status(500).json({ message: 'Error updating security guard', error: error.message });
  }
};

// View a security guard's details
exports.viewSecurityGuard = async (req, res) => {
  try {
    const { id } = req.params;
    const securityGuard = await SecurityGuard.findById(id);

    if (!securityGuard) {
      return res.status(404).json({ message: 'Security Guard not found' });
    }

    res.json(securityGuard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching security guard', error: error.message });
  }
};

// Delete a security guard
exports.deleteSecurityGuard = async (req, res) => {
  try {
    const { id } = req.params;
    const securityGuard = await SecurityGuard.findByIdAndDelete(id);

    if (!securityGuard) {
      return res.status(404).json({ message: 'Security Guard not found' });
    }

    res.json({ message: 'Security Guard deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting security guard', error: error.message });
  }
};

// List all security guards for a society
exports.listSecurityGuards = async (req, res) => {
  try {
    const { society } = req.user;
    const securityGuards = await SecurityGuard.find({ societyId: society });

    res.json(securityGuards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching security guards', error: error.message });
  }
};
