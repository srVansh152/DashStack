const express = require('express');
const router = express.Router();
const facilityController = require('../controllers/facilityController'); // Ensure this path is correct
const authMiddleware = require('../middlewares/authMiddleware'); // Ensure this path is correct

console.log(facilityController);

// Routes for facility management
router.post('/facility', authMiddleware, facilityController.addFacility);
router.put('/facility/:id', authMiddleware, facilityController.updateFacility);
router.get('/facility/:id', authMiddleware, facilityController.viewFacility);
router.delete('/facility/:id', authMiddleware, facilityController.deleteFacility);
router.get('/facilities', authMiddleware, facilityController.getFacilities);

module.exports = router;

