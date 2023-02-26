// this file is used to write the model portion of our project
// 0) require dependencies 
const mongoose = require('mongoose');

// 1) define a schema - tells you what info should be included when create a new 
const tweetSchema = new mongoose.Schema({ //Schema class 
    title: {
        type: String,
        required: true
    }, //required: cannot skip 
    body: String,
    author: String,
    likes: {
        type: Number,
        default: 0
    },
    sponsored: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}); //setting / config object 
//timestamps: true adds createdAt and updatedAt field

// 2) use the schema to create a model
module.exports = mongoose.model('Tweet', tweetSchema) //this returns an object with methods we can use to perform CRUD
//module.exports makes us to use this file somewhere else

/*
Model.create()
Model.findById()
Model.findByIdAndUpdated()
Model.findByIdAndDelete()
Model.findOne()
Model.findOneAndUpdate()
Model.findOneAndDelete()
*/

// 3) 