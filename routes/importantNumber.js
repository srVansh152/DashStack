const express = require('express');
const {
  createImportantNumber,
  getImportantNumbers,
  updateImportantNumber,
  deleteImportantNumber,
} = require('../controllers/importantNumberController');
const { protect, restrictTo } = require('../middlewares/authMiddleware');

const router = express.Router();

// All routes are protected, meaning the user must be logged in
router.use(protect);

router
  .route('/')
  .post(createImportantNumber)  
  .get(getImportantNumbers);    

router
  .route('/:id')
  .put(updateImportantNumber)   
  .delete(deleteImportantNumber); 

module.exports = router;