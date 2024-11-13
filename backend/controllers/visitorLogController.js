const VisitorLog = require('../models/VisitorLog');

// Create a new visitor log entry
exports.createVisitorLog = async (req, res) => {
  try {
    const { visitorName, phoneNumber, date, unit, wing, time } = req.body;

    const visitorLog = new VisitorLog({
      visitorName,
      phoneNumber,
      date,
      unit,
      wing,
      time,
      societyId: req.user.society._id,
      adminId: req.user._id
    });

    await visitorLog.save();
    res.status(201).json({ message: 'Visitor log created successfully', visitorLog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating visitor log', error });
  }
};

// Get all visitor logs for a specific society
exports.getVisitorLogs = async (req, res) => {
  try {
    const visitorLogs = await VisitorLog.find({ societyId: req.user.society._id })
      .populate('createdBy', 'name')
      .sort({ date: -1 }); // Sort by date, most recent first

    res.status(200).json({ visitorLogs });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching visitor logs', error });
  }
};

// View a single visitor log
exports.viewVisitorLog = async (req, res) => {
  try {
    const visitorLog = await VisitorLog.findById(req.params.id)
      .populate('createdBy', 'name');

    if (!visitorLog) return res.status(404).json({ message: 'Visitor log not found' });

    res.status(200).json({ visitorLog });
  } catch (error) {
    res.status(500).json({ message: 'Error viewing visitor log', error });
  }
};

// Delete a visitor log
exports.deleteVisitorLog = async (req, res) => {
  try {
    const visitorLog = await VisitorLog.findByIdAndDelete(req.params.id);

    if (!visitorLog) return res.status(404).json({ message: 'Visitor log not found' });

    res.status(200).json({ message: 'Visitor log deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting visitor log', error });
  }
};