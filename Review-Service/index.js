const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const reviewRoutes = require('./routes/review');

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', reviewRoutes);

// Connect to the PostgreSQL database and start the server
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        await sequelize.sync(); // Synchronize all models with the database
        console.log('Database synchronized successfully.');

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
