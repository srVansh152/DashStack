const Announcement = require('../models/Announcement');

// Create a new announcement
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, description, date, time } = req.body;
    const announcement = new Announcement({ title, description, date, time });
    await announcement.save();
    res.status(201).json({ message: 'Announcement created successfully', announcement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all announcements
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single announcement
exports.getAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an announcement
exports.updateAnnouncement = async (req, res) => {
  try {
    const { title, description, date, time } = req.body;
    const announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      { title, description, date, time },
      { new: true }
    );
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });
    res.status(200).json({ message: 'Announcement updated successfully', announcement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an announcement
exports.deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });
    res.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
