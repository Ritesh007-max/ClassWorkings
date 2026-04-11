const express = require('express');
const router  = express.Router();
const auth    = require('../middlewares/auth');

router.get('/', (req, res) => {
  res.json({
    success: true,
    users: ['Rahul', 'Ayesha', 'Priya'],
  });
});

router.get('/:id', auth, (req, res, next) => {
  const id = parseInt(req.params.id);

  if (id !== 1) {
    const err = new Error('User not found.');
    err.status = 404;
    return next(err);
  }

  res.json({ success: true, user: { id: 1, name: 'Rahul' } });
});

module.exports = router;