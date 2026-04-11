const express = require('express');
const router  = express.Router();

const {
  createUser,
  createMultipleUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.post('/',    createUser);
router.post('/',    createMultipleUser);
router.get('/',     getAllUsers);
router.get('/:id',  getUserById);
router.put('/:id',  updateUser);
router.delete('/:id', deleteUser);

module.exports = router;