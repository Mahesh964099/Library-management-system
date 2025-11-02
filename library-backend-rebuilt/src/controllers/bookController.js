const Book = require('../models/Book');
const { validationResult } = require('express-validator');

exports.list = async (req, res, next) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const data = req.body;
    const book = new Book({
      title: data.title,
      author: data.author,
      isbn: data.isbn,
      publisher: data.publisher,
      year: data.year,
      copies: data.copies || 1,
      available: data.copies || 1
    });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    // if copies changed, adjust available if necessary
    res.json(book);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    next(err);
  }
};
