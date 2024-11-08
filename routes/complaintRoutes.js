const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const complaintController = require('../controllers/complaintController');

// Define routes for complaints
router.post('/create', protect, complaintController.createComplaint);
router.put('/edit/:id', protect, complaintController.updateComplaint);
router.get('/view/:id', protect, complaintController.viewComplaint);
router.delete('/delete/:id', protect, complaintController.deleteComplaint);
router.get('/', protect, complaintController.listComplaintsBySocietyAndAdmin);

module.exports = router;
