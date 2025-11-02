const Issue = require('../models/Issue');
const Book = require('../models/Book');
const Member = require('../models/Member');
const { validationResult } = require('express-validator');

exports.list = async (req, res, next) => {
  try {
    const issues = await Issue.find().populate('book member').sort({ issuedAt: -1 });
    res.json(issues);
  } catch (err) {
    next(err);
  }
};

exports.issueBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { bookId, memberId, days } = req.body;
  try {
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.available < 1) return res.status(400).json({ message: 'No copies available' });

    const member = await Member.findById(memberId);
    if (!member) return res.status(404).json({ message: 'Member not found' });

    // create issue
    const dueDate = days ? new Date(Date.now() + days * 24 * 60 * 60 * 1000) : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

    const issue = new Issue({ book: book._id, member: member._id, dueDate });
    await issue.save();

    // decrement available
    book.available = Math.max(0, book.available - 1);
    await book.save();

    res.status(201).json(issue);
  } catch (err) {
    next(err);
  }
};

exports.returnBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { issueId } = req.body;
  try {
    const issue = await Issue.findById(issueId);
    if (!issue) return res.status(404).json({ message: 'Issue record not found' });
    if (issue.status === 'returned') return res.status(400).json({ message: 'Already returned' });

    issue.returnedAt = new Date();
    issue.status = 'returned';
    await issue.save();

    // increment available
    const book = await Book.findById(issue.book);
    if (book) {
      book.available = (book.available || 0) + 1;
      // ensure available not exceed copies
      if (book.copies && book.available > book.copies) book.available = book.copies;
      await book.save();
    }

    res.json(issue);
  } catch (err) {
    next(err);
  }
};
