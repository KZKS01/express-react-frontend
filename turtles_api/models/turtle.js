//imports the mongoose library
const mongoose = require('mongoose');

//creates a new const "Schema", a property of mongoose object
const Schema = mongoose.Schema;

//creates a new Schema object, an instance of "Schema" class
const turtleSchema = new Schema({
    //defines the properties of the turtle object
    name: String,
    role: String
});

//creates a model object for the "Turtle" collection based on the "turtleSchema" schema definition.
module.exports = mongoose.model('Turtle', turtleSchema)