const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Create a new review
router.post('/reviews', async (req, res) => {
    try {
        const { bookTitle, reviewContent, rating, userId } = req.body;
        const review = await Review.create({ bookTitle, reviewContent, rating, userId });
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all reviews
router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read a single review by ID
router.get('/reviews/:id', async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (review) {
            res.status(200).json(review);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a review by ID
router.put('/reviews/:id', async (req, res) => {
    try {
        const { bookTitle, reviewContent, rating, userId } = req.body;
        const review = await Review.findByPk(req.params.id);
        if (review) {
            review.bookTitle = bookTitle;
            review.reviewContent = reviewContent;
            review.rating = rating;
            review.userId = userId;
            
            await review.save();
            res.status(200).json(review);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a review by ID
router.delete('/reviews/:id', async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (review) {
            await review.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;