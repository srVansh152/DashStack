const express = require('express');
const { 
    register, 
    login, 
    forgotPassword, 
    resetPassword, 
    getProfile, 
    updateProfile, 
    updateProfilePhoto 
} = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload'); // Ensure this points to your upload configuration

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

// Profile photo update route with a distinct path to avoid conflict
router.post('/profile/photo', protect, upload.single('profilePhoto'), updateProfilePhoto);

module.exports = router;
 