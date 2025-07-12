const express = require('express');
const {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new note
router.post('/', authMiddleware, createNote);

// Get all notes
router.get('/', authMiddleware, getNotes);

// Get a note by ID
router.get('/:id', authMiddleware, getNote);

// Update a note
router.put('/:id', authMiddleware, updateNote);

// Delete a note
router.delete('/:id', authMiddleware, deleteNote);

module.exports = router;
