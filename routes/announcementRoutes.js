// routes/announcementRoutes.js
const express = require('express');
const {
  createAnnouncement,
  getAnnouncements,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} = require('../controllers/announcementController');

const router = express.Router();

router.post('/', createAnnouncement);
router.get('/', getAnnouncements);
router.get('/:id', getAnnouncement);
router.put('/:id', updateAnnouncement);
router.delete('/:id', deleteAnnouncement);

module.exports = router;
