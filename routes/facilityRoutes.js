const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware'); // Ensure this path is correct
const { addFacility, updateFacility, viewFacility, deleteFacility, getFacilities } = require('../controllers/facilityController'); // Adjust as needed

// Routes for facility management
router.post('/facility', protect, addFacility);
router.put('/facility/:id', protect, updateFacility);
router.get('/facility/:id', protect, viewFacility);
router.delete('/facility/:id', protect, deleteFacility);
router.get('/facilities', protect, getFacilities);

module.exports = router;

