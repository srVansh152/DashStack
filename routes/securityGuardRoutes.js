const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const securityGuardController = require('../controllers/SecurityGuardController');
const upload = require('../config/multer'); // Ensure multer is configured properly

const router = express.Router();

// Route for adding a new security guard
router.post(
  '/add',
  protect, // Ensure the user is authenticated
  upload.fields([ // Handle file uploads for profile photo and Aadhaar card
    { name: 'profilePhoto', maxCount: 1 },
    { name: 'aadhaarCardImage', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Call the controller function for adding a new security guard
      await securityGuardController.addSecurityGuard(req, res);
    } catch (error) {
      // Catch errors and send response
      res.status(400).json({ message: error.message });
    }
  }
);

// Route for updating an existing security guard
router.put(
  '/update/:id',
  protect, // Ensure the user is authenticated
  upload.fields([ // Handle file uploads for profile photo and Aadhaar card
    { name: 'profilePhoto', maxCount: 1 },
    { name: 'aadhaarCardImage', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Call the controller function for updating a security guard
      await securityGuardController.updateSecurityGuard(req, res);
    } catch (error) {
      // Catch errors and send response
      res.status(400).json({ message: error.message });
    }
  }
);

// Route for viewing a single security guard by ID
router.get('/view/:id', protect, securityGuardController.viewSecurityGuard);

// Route for deleting a security guard by ID
router.delete('/delete/:id', protect, securityGuardController.deleteSecurityGuard);

// Route for listing all security guards
router.get('/list', protect, securityGuardController.listSecurityGuards);

module.exports = router;
