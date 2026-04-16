const express    = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/students', studentRoutes);

app.use((req, res) => {
  res.status(404).json({ msg: 'Route not found.' });
});

module.exports = app;