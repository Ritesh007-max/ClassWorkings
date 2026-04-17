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

// POST /api/notes (single)
exports.createNote = async (req, res) => {
    try {
        const { title, content, category, isPinned } = req.body;
        
        if (!title || !content) {
            return res.status(400).json({ success: false, message: 'Title and content are required', data: null });
        }

        const note = await Note.create({ title, content, category, isPinned });
        res.status(201).json({ success: true, message: 'Note created successfully', data: note });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: error.message, data: null });
        }
        res.status(500).json({ success: false, message: 'Server Error', data: null });
    }
};

// PUT /api/notes/:id (full replacement)
exports.replaceNote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Note ID', data: null });
        }

        const { title, content, category, isPinned } = req.body;
        if (!title || !content) {
            return res.status(400).json({ success: false, message: 'Title and content are required for full replacement', data: null });
        }

        const note = await Note.findOneAndReplace(
            { _id: id },
            { title, content, category, isPinned },
            { new: true, overwrite: true, runValidators: true }
        );

        if (!note) {
            return res.status(404).json({ success: false, message: 'Note not found', data: null });
        }

        res.status(200).json({ success: true, message: 'Note replaced successfully', data: note });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: error.message, data: null });
        }
        res.status(500).json({ success: false, message: 'Server Error', data: null });
    }
};

// POST /api/notes/bulk
exports.createBulkNotes = async (req, res) => {
    try {
        const notesData = req.body;
        if (!Array.isArray(notesData) || notesData.length === 0) {
            return res.status(400).json({ success: false, message: 'Request body must be an array of notes', data: null });
        }

        const notes = await Note.insertMany(notesData);
        res.status(201).json({ success: true, message: 'Bulk notes created successfully', data: notes });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: error.message, data: null });
        }
        res.status(500).json({ success: false, message: 'Server Error', data: null });
    }
};
