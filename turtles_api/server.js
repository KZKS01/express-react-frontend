//RESTFUL ROUTING: INDUCES

//Index - GET
// /turtles
//Delete - DELETE
// /turtles/:id
//Update - PUT
// /turtles/:id
//Create - POST
// /turtles
//Show - GET
// /turtles/:id


/////////////////////////
// DEPENDENCIES
/////////////////////////
//for the controller to access the model
const Turtle = require('./models/turtle');
const express = require("express");
const mongoose = require('mongoose');


/////////////////////////
// The Data
/////////////////////////
//comment out after uploaded to mongo
// const turtles = [
//     { name: "Leonardo", role: "ninja" },
//     { name: "Michaelangelo", role: "ninja" },
//     { name: "Donatello", role: "ninja" },
//     { name: "Raphael", role: "ninja" },
//   ]


/////////////////////////
// The Application Object
/////////////////////////
//initialize the app
const app = express();

//configure settings
require("dotenv").config();//connect to my MongoDB Database
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//establish connection to mongodb
mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL);
//database connection err/success
const db = mongoose.connection;
db.on("error", (err)=>console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));

/////////////////////////
// MIDDLEWARE
/////////////////////////
app.use(express.urlencoded({extended: false}));
app.use(express.json())

/////////////////////////
// Routes
/////////////////////////

// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
  //res.json let's us send a response as JSON data
  res.json({
    response: "Hello World",
  })
})

//seed data route
app.get('/turtles/seed', (req, res)=> {
    Turtle.deleteMany({}, (err, results)=>{//empty object will delete everything, unless fill it out with specific criteria
        //result shows how many objects are deleted
        Turtle.create(turtles, (err, results)=>{
            res.json(turtles);
        })
    })
})

// Turtles Index Route (Send All Turtles)
app.get('/turtles', (req, res)=>{
    // send the turtles array as JSON
    res.json(turtles)
})


// Turtles Show Route (Send One Turtle)
app.get("/turtles/:index", (req, res) => {
    // send turtle as json
    res.json(turtles[req.params.index])
  })

  
// Turtles Index Route (Send All Turtles)
app.post("/turtles", (req, res) => {
    // push the request body into the array
    turtles.push(req.body)
    // send the turtles array as JSON
    res.json({
        status: 200,
        "message": "Turtle Created",
        turtles: turtles})
  })

// Turtles Update Route
app.put("/turtles/:index", (req, res) => {
    // req.body is an object containing the updated data for the turtle object
    // replace the turtle at the specified index with the new data sent in the req.body object
    turtles[req.params.index] = req.body
    // send the turtles array as JSON
    res.json(turtles)
  })

  
// Turtles delete Route
app.delete("/turtles/:index", (req, res) => {
    // remove the turtle at the specifed index
    turtles.splice(req.params.index, 1)//req.params.index is the startIndex and 1 is the deleteCount.
    // send the turtles array as JSON
    res.json(turtles)
  })

/////////////////////////
// Listener
/////////////////////////
// We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
// Why? cause it's the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
app.listen(1337, () => console.log("Listening on port 1337"))