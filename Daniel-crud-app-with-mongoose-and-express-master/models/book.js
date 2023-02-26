const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 5
    },
    content: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const bookSchema = new Schema({
    title: {type: String, required: true },
    author: {
        type: Schema.Types.ObjectId, 
        required: true,
        ref: 'Author'
    },
    completed: Boolean,
    coverImage: {
        type: String, 
        default: 'https://res.cloudinary.com/dkixkgisd/image/upload/v1674694711/default_uyov7m.webp'
    },
    ratings: [ratingSchema],
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('Book', bookSchema);