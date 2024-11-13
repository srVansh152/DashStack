const express = require('express');
const {
  createEmergencyAlert,
  getEmergencyAlerts,
  getEmergencyAlert,
  updateEmergencyAlert,
  deleteEmergencyAlert,
} = require('../controllers/emergencyController');

const router = express.Router();

router.post('/', createEmergencyAlert);
router.get('/', getEmergencyAlerts);
router.get('/:id', getEmergencyAlert);
router.put('/:id', updateEmergencyAlert);
router.delete('/:id', deleteEmergencyAlert);

module.exports = router;