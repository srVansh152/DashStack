const express = require('express');
const { createSociety, getSocieties, updateSociety, deleteSociety } = require('../controllers/societyController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', protect, createSociety);
router.get('/', protect, getSocieties);
router.put('/:id', protect, updateSociety);
router.delete('/:id', protect, deleteSociety);

module.exports = router;
