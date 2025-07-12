const Note = require('../models/Notes');

// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user._id;

    // Create new note
    const note = await Note.create({
      title,
      content,
      user: userId,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get All Notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get Note By ID
const getNote = async (req, res) => {
  const id = req.param.id;
  try {
    const note = await Note.find({ _id: id });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update Note
const updateNote = async (req, res) => {
  const id = req.param.id;
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    // return new data
    const updatedNote = await Note.findById(id);
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete Note
const deleteNote = async (req, res) => {
  const id = req.param.id;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note || note.user.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ message: 'Note not found or unauthorized' });
    }
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};
