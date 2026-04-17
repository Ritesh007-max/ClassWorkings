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
