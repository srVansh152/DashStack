const SecurityGuard = require('../models/SecurityGuardModel');
const cloudinary = require('cloudinary').v2;

// Add a new security guard
exports.addSecurityGuard = async (req, res) => {
  try {
    const { fullName, phoneNumber, shift, shiftDate, shiftTime, gender } = req.body;

    if (!req.user || !req.user.society || !req.user._id) {
      return res.status(400).json({ message: 'societyId and adminId are required fields.' });
    }
    

    const files = req.files || {};
    
    // Handle profile photo
    // files.photo?.[0]?.path || req.body.
    let profilePhoto = files.profilePhoto?.[0]?.path || req.body.profilePhoto
    let aadhaarCardImage = files.aadhaarCardImage?.[0]?.path || req.body.aadhaarCardImage

    // Check required fields
    if (!profilePhoto || !aadhaarCardImage) {
      return res.status(400).json({ message: "Profile photo and Aadhaar card image are required." });
    }


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

    // Ensure the security guard exists before updating
    const securityGuard = await SecurityGuard.findById(id);
    if (!securityGuard) {
      return res.status(404).json({ message: 'Security Guard not found' });
    }

    // Prepare updated data
    const updatedData = { fullName, phoneNumber, shift, shiftDate, shiftTime, gender };

    // Check and update profile photo from req.files or req.body
    if (req.files?.profilePhoto?.[0]?.path) {
      updatedData.profilePhoto = (await cloudinary.uploader.upload(req.files.profilePhoto[0].path)).secure_url;
      console.log(updatedData.profilePhoto);
    } else if (req.body.profilePhoto) {
      updatedData.profilePhoto = req.body.profilePhoto; // Assuming URL is passed directly
    }

    // Check and update Aadhaar card image from req.files or req.body
    if (req.files?.aadhaarCardImage?.[0]?.path) {
      updatedData.aadhaarCardImage = (await cloudinary.uploader.upload(req.files.aadhaarCardImage[0].path)).secure_url;
    } else if (req.body.aadhaarCardImage) {
      updatedData.aadhaarCardImage = req.body.aadhaarCardImage; // Assuming URL is passed directly
    }

    // Update the security guard details
    const updatedSecurityGuard = await SecurityGuard.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    res.json({
      message: 'Security Guard updated successfully',
      securityGuard: updatedSecurityGuard,
    });
  } catch (error) {
    console.error('Error updating security guard:', error);
    res.status(500).json({
      message: 'Error updating security guard',
      error: error.message,
    });
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