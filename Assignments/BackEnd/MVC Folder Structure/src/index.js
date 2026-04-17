require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB().then(() => {
    // Start Server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
