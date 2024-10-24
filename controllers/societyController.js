const Society = require('../models/Society');

// Create a new society
exports.createSociety = async (req, res) => {
  const { name, location } = req.body;
  const society = new Society({ name, location });
  await society.save();
  res.status(201).json(society);
};

// Read societies
exports.getSocieties = async (req, res) => {
  const societies = await Society.find();
  res.json(societies);
};

// Update society
exports.updateSociety = async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;

  const society = await Society.findByIdAndUpdate(id, { name, location }, { new: true });
  if (!society) return res.status(404).json({ message: 'Society not found' });

  res.json(society);
};

// Delete society
exports.deleteSociety = async (req, res) => {
  const { id } = req.params;
  const society = await Society.findByIdAndDelete(id);
  if (!society) return res.status(404).json({ message: 'Society not found' });

  res.json({ message: 'Society deleted' });
};