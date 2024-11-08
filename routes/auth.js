const express = require('express');
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  verifyOtp, // New OTP verification function
  getProfile,
  updateMe
} = require('../controllers/authController');
const { protect, restrictTo } = require('../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/register', upload.single('photo'), register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/verify-otp', verifyOtp); // Verify OTP before reset
router.post('/reset-password', resetPassword);

// Routes for individual user profile management
router.get("/profile", protect, getProfile);
router.put('/profile', protect, upload.single('photo'), updateMe);

// Protect route and restrict access to admin only
router.get('/admin', protect, restrictTo('admin'), (req, res) => {
  res.send('This is admin-only content');
});

module.exports = router;