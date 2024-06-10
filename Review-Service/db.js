const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize with your PostgreSQL database details
const sequelize = new Sequelize('book_review', 'postgres', 'skatelovedeath', {
    host: 'localhost',
    dialect: 'postgres'
});

// Export the sequelize instance for use in other parts of the application
module.exports = sequelize;
