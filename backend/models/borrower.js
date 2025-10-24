const mongoose = require('mongoose');

const borrowerSchema = new mongoose.Schema({
    name: String,
    email: String,
    borrowedBooks: [String]
});

module.exports = mongoose.model('Borrower', borrowerSchema);
