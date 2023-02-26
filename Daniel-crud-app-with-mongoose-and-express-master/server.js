// dependencies
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const booksRouter = require('./controllers/books');
const usersRouter = require('./controllers/users');
const authorsRouter = require('./controllers/authors');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
// initialize the application
const app = express();

// configure settings
require('dotenv').config(); // looks for a .env file and makes it's vars available to process.env
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
});

// establish connection to mongodb
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('An error occurred with MongoDB: ' + err.message);
});

// mount middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(fileUpload({ createParentPath: true }));

// custom middleware to inspect session store - for development purpose
// app.use((req, res, next) => {
//     console.log(req.session)
//     next();
// });

app.use((req, res, next) => {
    if(req.session.userId) {
        // res.locals.user is from inside the template, use req.session.userId outside of this
        res.locals.user = req.session.userId
    } else {
        res.locals.user = null
    }
    next();
});

// authentication middleware
function isAuthenticated(req, res, next) {
    if(!req.session.userId){
        return res.redirect('/login');
    }
    next();
}


// mount routes
// Homepage Route
app.get('/', (req, res) => res.render('home.ejs'));

app.use(usersRouter);
app.use(isAuthenticated, booksRouter);
app.use(isAuthenticated, authorsRouter);


// tell the application to listen
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});