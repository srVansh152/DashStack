const express = require('express');
const { createSociety, getSocieties } = require('../controllers/societyController');
const router = express.Router();

router.post('/create', createSociety);
router.get('/getall', getSocieties);

module.exports = router;