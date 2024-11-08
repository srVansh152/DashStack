const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware'); 
const { addFacility, updateFacility, viewFacility, deleteFacility, getFacilities } = require('../controllers/facilityController'); 

// Routes for facility management
router.post('/facility', protect, addFacility);
router.put('/facility/:id', protect, updateFacility);
router.get('/facility/:id', protect, viewFacility);
router.delete('/facility/:id', protect, deleteFacility);
router.get('/facilities', protect, getFacilities);

module.exports = router;

