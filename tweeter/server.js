// require dependencies
const express = require('express');
const { Db } = require('mongodb');
const mongoose = require('mongoose');
const { cannotHaveAUsernamePasswordPort } = require('whatwg-url');

// initialize the express application
const app = express();

// configure application settings
const PORT = 3000;
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.idxmscv.mongodb.net/tweeter-app?retryWrites=true&w=majority';

// establish connection to database
mongoose.set('strictQuery', true); //first: configure
mongoose.connect(DATABASE_URL);//then: connect

const db = mongoose.connection;

//want to know whenever it is connected
db.on('connected', () => {
    console.log('connected to mongoDB')
});

db.on('error', (error) => {
    console.log('an error occurred with mongoDB ' + error.message);
});

const Tweet = require('./models/tweet');

// mount middleware
//body parser middleware aka urlencoded
app.use(express.urlencoded({extended: false}));

// Create
app.post('/tweets', (req, res) => {
    Tweet.create(req.body, (error, createdTweet) => {
        res.send(createdTweet);
    }); // this is asynchronous, needs time to run
       //req.body contains the form data
});
// Read
app.get('/tweets', (req, res) => {
    Tweet.find({}, (error, foundTweets) => { // empty object: we have no specific criteria, we want everything
        res.send(foundTweets);
    }); 
});

// Update
app.post('/tweets/:id', (req, res) => {
    Tweet.findByIdAndUpdate(req.params.id, req.body, (error, tweet) => { //callback function also has the error first, error first signature
        res.send(tweet);
    }); //id to find tweet that needs to be updated, then body that is updated
}); 

// Delete
app.delete('/tweets/:id', (req, res) => {
    Tweet.findOneAndDelete(req.params.id, (error, deletedTweet) => {
        res.send(deletedTweet); //give us a copy that was just deleted
    });
})

// mount routes

// tell the app to listen
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`);
})