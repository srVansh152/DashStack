const Announcement = require('../models/Announcement');

exports.createAnnouncement = async (req, res) => {
  try {
    const { title, description, date, time } = req.body;

    if (!req.user || !req.user._id || !req.user.society) {
      return res.status(400).json({ error: 'User or society information is missing' });
    }

    const announcement = new Announcement({
      title,
      description,
      date,
      time,
      adminId: req.user._id,
      societyId: req.user.society._id,
    });

    await announcement.save();
    res.status(201).json({ message: 'Announcement created successfully', announcement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all announcements for a specific society
exports.getAnnouncements = async (req, res) => {
  try {
    // Filter announcements by societyId
    const announcements = await Announcement.find({ societyId: req.user.society._id })
      .populate('adminId', 'name email') // Populate admin details (name and email)
      .populate('societyId', 'name address'); // Populate society details

    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single announcement
exports.getAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id)
      .populate('adminId', 'name email') // Populate admin details
      .populate('societyId', 'name address'); // Populate society details

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

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
      {
        title,
        description,
        date,
        time,
        adminId: req.user._id, // Update adminId
        societyId: req.user.society._id, // Update societyId
      },
      { new: true }
    )
      .populate('adminId', 'name email') // Populate updated admin details
      .populate('societyId', 'name address'); // Populate updated society details

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.status(200).json({
      message: 'Announcement updated successfully',
      announcement,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an announcement
exports.deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};