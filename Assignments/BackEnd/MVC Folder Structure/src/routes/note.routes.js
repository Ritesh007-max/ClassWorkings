const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

router.get('/', noteController.getAllNotes);

router.post('/bulk', noteController.createBulkNotes);
router.delete('/bulk', noteController.deleteBulkNotes);
router.get('/:id', noteController.getNoteById);
router.post('/', noteController.createNote);
router.put('/:id', noteController.replaceNote);
router.patch('/:id', noteController.updateNotePartial);

module.exports = router;
