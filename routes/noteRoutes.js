const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Add a new note
router.post('/notes', noteController.addNote);

// Update an existing note
router.put('/notes/:id', noteController.updateNote);

// Get all notes
router.get('/notes', noteController.getNotes);

// Delete a note
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;