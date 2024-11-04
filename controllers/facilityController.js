const Facility = require('../models/Facility');
const moment = require('moment');

// Add new facility
exports.addFacility = async (req, res) => {
  try {
    const { facilityName, description, scheduleServiceDate, remindBeforeDays } = req.body;

    const newFacility = new Facility({
      facilityName,
      description,
      scheduleServiceDate,
      remindBeforeDays,
      society: req.user.society._id,
      admin: req.user._id
    });

    await newFacility.save();
    res.status(201).json({ message: 'Facility added successfully', facility: newFacility });
  } catch (error) {
    res.status(500).json({ message: 'Error adding facility', error: error.message });
  }
};

// Update facility
exports.updateFacility = async (req, res) => {
  try {
    const { id } = req.params;
    const { facilityName, description, scheduleServiceDate, remindBeforeDays } = req.body;

    const updatedFacility = await Facility.findOneAndUpdate(
      { _id: id, society: req.user.society._id, admin: req.user._id },
      { facilityName, description, scheduleServiceDate, remindBeforeDays },
      { new: true }
    );

    if (!updatedFacility) {
      return res.status(404).json({ message: 'Facility not found or not associated with the specified society/admin' });
    }

    res.json({ message: 'Facility updated successfully', facility: updatedFacility });
  } catch (error) {
    res.status(500).json({ message: 'Error updating facility', error: error.message });
  }
};

// View a facility
exports.viewFacility = async (req, res) => {
  try {
    const { id } = req.params;
    const facility = await Facility.findOne({ _id: id, society: req.user.society._id, admin: req.user._id });

    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }

    res.json(facility);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching facility', error: error.message });
  }
};

// Delete facility
exports.deleteFacility = async (req, res) => {
  try {
    const { id } = req.params;

    const facility = await Facility.findOneAndDelete({ _id: id, society: req.user.society._id, admin: req.user._id });

    if (!facility) {
      return res.status(404).json({ message: 'Facility not found or not associated with the specified society/admin' });
    }

    res.json({ message: 'Facility deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting facility', error: error.message });
  }
};

// Get all facilities for the authenticated user's society and admin
exports.getFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find({ society: req.user.society._id, admin: req.user._id });
    res.json(facilities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching facilities', error: error.message });
  }
};