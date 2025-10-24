const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    ISBN: {
        type: String,
        unique: true,
        sparse: true
    },
    publishedDate: String,
    copiesAvailable: {
        type: Number,
        default: 1,
        min: 0
    },
    genre: {
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Romance', 'Biography', 'History', 'Science', 'Technology', 'Art', 'Other'],
        default: 'Other'
    },
    status: {
        type: String,
        enum: ['Available', 'Borrowed', 'Maintenance'],
        default: 'Available'
    },
    borrower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Borrower',
        default: null
    },
    borrowDate: {
        type: Date,
        default: null
    },
    returnDate: {
        type: Date,
        default: null
    },
    description: String,
    language: {
        type: String,
        default: 'English'
    },
    pages: Number,
    publisher: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
