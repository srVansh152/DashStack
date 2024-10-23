const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);  // Route to send OTP
router.post('/reset-password', resetPassword);    // Route to reset password

module.exports = router;
