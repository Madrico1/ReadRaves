const express = require('express');
const sequelize = require('./db');

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a test route
app.get('/', (req, res) => {
    res.send('Welcome to the Review Service');
});

// Connect to the PostgreSQL database and start the server
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Start the server
startServer();
