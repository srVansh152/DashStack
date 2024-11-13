const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const securityGuardController = require('../controllers/SecurityGuardController');
const upload = require('../middleware/upload'); 

const router = express.Router();

router.post('/add', protect, upload.fields([{ name: 'profilePhoto' }, { name: 'aadhaarCardImage' }]), securityGuardController.addSecurityGuard);
router.put('/update/:id', protect, upload.fields([{ name: 'profilePhoto' }, { name: 'aadhaarCardImage' }]), securityGuardController.updateSecurityGuard);
router.get('/view/:id', protect, securityGuardController.viewSecurityGuard);
router.delete('/delete/:id', protect, securityGuardController.deleteSecurityGuard);
router.get('/list', protect, securityGuardController.listSecurityGuards);

module.exports = router;