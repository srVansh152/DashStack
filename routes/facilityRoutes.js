const express = require('express');
const router = express.Router();
const facilityController = require('../controllers/facilityController');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware to add req.user

// Routes for facility management
router.post('/facility', authMiddleware, facilityController.addFacility);
router.put('/facility/:id', authMiddleware, facilityController.updateFacility);
router.get('/facility/:id', authMiddleware, facilityController.viewFacility);
router.delete('/facility/:id', authMiddleware, facilityController.deleteFacility);
router.get('/facilities', authMiddleware, facilityController.getFacilities);

module.exports = router;
