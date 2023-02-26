const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt'); //encrypt password

// Sign up Users

// provide signup form
router.get('/signup', (req, res) => {
    res.render('signup.ejs', { error: null });
});

// handle form submission
router.post('/signup', (req, res) => {
    let error = null;
    
    if(req.body.password !== req.body.passwordConf) {
        error = 'password and password confirmation do not match';
        return res.render('signup.ejs', { error });
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    
    req.body.password = hashedPassword;
    
    User.create(req.body, (err, newUser) => {
        req.session.userId = newUser._id;//new user will be logged in when signed up
        res.redirect('/books');
    });
});


// Login Users

// provide login form
router.get('/login', (req, res) => {
    res.render('login.ejs', { error: null });
});

// handle form submission
router.post('/login', (req, res) => {
    // 1) look up the user using the email
    const error = 'bad credentials';
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if(!foundUser) {
            //  1.1) if the user does NOT exist, we redirect to login page
            return res.render('login.ejs', { error });
        }
            //  1.2) if the user exists, we compare password to determine a match
        const isMatched = bcrypt.compareSync(req.body.password, foundUser.password);
        
                // 2) User exist, use bcrypt to compare provided plain text
                    // 2.1) if the password does NOT match, we redirect login page
                    if(!isMatched) {
                    return res.render('login.ejs', { error });
                     }
        // create a new session for the authenticated user - a piece of memory that they are now logged in
        req.session.userId = foundUser._id;
        // 2.2) if the password matches we redirect to the books index page
        res.redirect('/books');  
    });
});


// Logout Users
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/login'); 
    });
});



module.exports = router;