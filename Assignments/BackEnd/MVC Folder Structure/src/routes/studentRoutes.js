const express = require('express');
const router  = express.Router();

const {
    getAllStudents,
    getStudentById
} = require('../controllers/studentController');

router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);

module.exports = router;