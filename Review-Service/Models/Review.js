const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Review = sequelize.define('Review', {
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reviewContent: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
});

module.exports = Review;