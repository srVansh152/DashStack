const express = require('express');
const router = express.Router();
const facilityController = require('../controllers/facilityController'); // Ensure this path is correct
const { protect }  = require('../middlewares/authMiddleware'); // Ensure this path is correct

console.log(facilityController);

// Routes for facility management
router.post('/add', protect, facilityController.addFacility);
router.put('/update/:id', protect, facilityController.updateFacility);
router.get('/facilities/:id', protect, facilityController.viewFacility);
router.delete('/facilities/:id', protect, facilityController.deleteFacility);
router.get('/facilitie', protect, facilityController.getFacilities);

module.exports = router;