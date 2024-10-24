const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');
const { protect, restrictTo } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

// Protect route and restrict access to admin only
router.get('/admin', protect, restrictTo('admin'), (req, res) => {
  res.send('This is admin only content');
});

module.exports = router;
