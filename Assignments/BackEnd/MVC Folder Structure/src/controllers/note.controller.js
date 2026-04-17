const Note = require('../models/note.model');
const mongoose = require('mongoose');

// GET /api/notes (all)
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({ success: true, message: 'Notes retrieved successfully', data: notes });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', data: null });
    }
};

// GET /api/notes/:id
exports.getNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Note ID', data: null });
        }

        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ success: false, message: 'Note not found', data: null });
        }

        res.status(200).json({ success: true, message: 'Note retrieved successfully', data: note });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', data: null });
    }
};
