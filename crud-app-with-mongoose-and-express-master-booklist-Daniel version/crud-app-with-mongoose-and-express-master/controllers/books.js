const express = require('express');
const router = express.Router();
const data = require('../data');
const Book = require('../models/book');
const cloudinary = require('cloudinary').v2;

/*
    1) .get()
    2) .post()
    3) .put()
    4) .delete()

*/

// Seed Route - for development purposes only

router.get('/books/seed', (req, res) => {
    
    // this option will reset database and recreate books
    Book.deleteMany({}, (err, results) => {
        Book.create(data, (err, books) => {
            res.redirect('/books');
        });
    });
    
    // Uncomment this option to keep creating duplicated
    /*  
        Book.create(data, (err, books) => {
            res.redirect('/books');
        });
    */
});

// INDUCES

// Index
router.get('/books', (req, res) => {
    Book.find({}, (err, allBooks) => {
        res.render('index.ejs', {
            books: allBooks
        });
    });
});

// New
router.get('/books/new', (req, res) => {
    res.render('new.ejs');
});

// rule of thumb, we redirect when data changes
/*
1) create
2) update
3) delete
*/

// Delete
router.delete('/books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, deletedBook) => {
        res.redirect('/books');
    });
});

// Update
router.put('/books/:id', (req, res) => {
    if(req.body.completed === 'on') {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    Book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        res.redirect('/books');
    });
});

// Create

router.post('/books', (req, res) => {
    if(req.body.completed === "on") {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    console.log(req.files);
    const coverImage = req.files.coverImage;//use req.files object(contains all uploaded files) to retrieve a file from a multipart/form-data request. 
    //The property coverImage is used to retrieve the file with the key "coverImage" from the req.files object. The retrieved file will be stored in the coverImage variable.
    coverImage.mv(`./uploads/${coverImage.name}`);//mv is a fn to move the file elsewhere on the server

    cloudinary.uploader.upload(`./uploads/${coverImage.name}`, (err, result) => {
        //console.log(err, result);
        req.body.coverImage = result.secure_url;
        Book.create(req.body, (err, createdBook) => {
            res.redirect('/books'); // redirect to the books index page
        });
    });
});

// Edit
router.get('/books/:id/edit', (req, res) => {
    // 1) look up the document that needs to be edited
    Book.findById(req.params.id, (err, foundBook) => {
        // 2) render the edit page
        res.render('edit.ejs', {
            book: foundBook
        });
    });
});

// Show
router.get('/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, foundBook) => {
        res.render('show.ejs', {
            book: foundBook
        });
    });
});

//Nested Resource Routes - Books & Ratings

//Create New Rating
router.post('/books/:id/ratings', (req, res)=>{
    //step 1) locate the parent doc
    Book.findById(req.params.id, (err, book)=> {
        //step 2) push req.body (the new rating) into the ratings array of the located book doc
        book.ratings.push(req.body);        
        //step 3) call the .save() method on the book doc to save the changes to the database
        book.save((err)=>{
        //step 4) send a response to the client to redirect to the show page 
            res.redirect('/books/'+ book._id);
        })
    })
});


module.exports = router;