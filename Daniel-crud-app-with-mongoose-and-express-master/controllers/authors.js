const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// INDUCES

// Index
router.get('/authors', (req, res) => {
    Author.find({}, (err, authors) => {
        res.render('authors/index.ejs', { authors });
    });
});

// New
router.get('/authors/new', (req, res) => {
    res.render('authors/new.ejs');
});

// Create
router.post('/authors', (req, res) => {
    Author.create(req.body, (err, author) => {
        res.redirect('/authors');
    });
});

module.exports = router;