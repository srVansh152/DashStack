const EmergencyAlert = require('../models/EmergencyAlert');

// Create a new emergency alert
exports.createEmergencyAlert = async (req, res) => {
  try {
    const { alertType, description } = req.body;

    // Get societyId from req.user
    const societyId = req.user.society;

    if (!alertType || !description) {
      return res.status(400).json({ message: 'Both alert type and description are required.' });
    }

    const emergencyAlert = new EmergencyAlert({
      alertType,
      description,
      societyId,
    });

    await emergencyAlert.save();
    res.status(201).json({ message: 'Emergency alert created successfully', alert: emergencyAlert });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all emergency alerts for the society
exports.getEmergencyAlerts = async (req, res) => {
  try {
    const alerts = await EmergencyAlert.find({ societyId: req.user.society });
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single emergency alert
exports.getEmergencyAlert = async (req, res) => {
  try {
    const alert = await EmergencyAlert.findById(req.params.id);
    if (!alert) return res.status(404).json({ message: 'Alert not found' });
    res.status(200).json(alert);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an emergency alert
exports.updateEmergencyAlert = async (req, res) => {
  try {
    const { alertType, description } = req.body;
    const alert = await EmergencyAlert.findByIdAndUpdate(
      req.params.id,
      { alertType, description },
      { new: true }
    );
    if (!alert) return res.status(404).json({ message: 'Alert not found' });
    res.status(200).json({ message: 'Alert updated successfully', alert });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an emergency alert
exports.deleteEmergencyAlert = async (req, res) => {
  try {
    const alert = await EmergencyAlert.findByIdAndDelete(req.params.id);
    if (!alert) return res.status(404).json({ message: 'Alert not found' });
    res.status(200).json({ message: 'Alert deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
