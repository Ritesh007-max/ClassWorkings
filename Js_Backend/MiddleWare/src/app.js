const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');
const helmet  = require('helmet');

const userRoutes   = require('./routes/user.routes');
const logger       = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// 1. Security
app.use(helmet());

// 2. CORS
app.use(cors());

// 3. HTTP Logger
app.use(morgan('dev'));

// 4. Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Custom Logger
app.use(logger);

// 6. Routes
app.use('/api/users', userRoutes);

// 7. 404 — no route matched
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

// 8. Error Handler — must be last
app.use(errorHandler);

module.exports = app;