const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  isbn: { type: String, trim: true },
  publisher: { type: String, trim: true },
  year: { type: Number },
  copies: { type: Number, default: 1, min: 0 },
  available: { type: Number, default: 1, min: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
