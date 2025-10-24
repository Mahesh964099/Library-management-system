const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    dateOfBirth: String
});

module.exports = mongoose.model('Author', authorSchema);
