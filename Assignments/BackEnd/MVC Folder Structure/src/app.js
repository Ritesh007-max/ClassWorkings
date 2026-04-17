const express = require('express');
const noteRoutes = require('./routes/note.routes');

const app = express();

app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);

// 404 Handler for unmatched routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found',
        data: null
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        data: null
    });
});

module.exports = app;
