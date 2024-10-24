const express = require('express');
const { createSociety, getSocieties, updateSociety, deleteSociety } = require('../controllers/societyController');
const router = express.Router();

router.post('/create', createSociety);
router.get('/', getSocieties);
router.put('/:id', updateSociety);
router.delete('/:id', deleteSociety);

module.exports = router;
