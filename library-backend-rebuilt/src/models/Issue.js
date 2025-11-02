const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  issuedAt: { type: Date, default: Date.now },
  dueDate: { type: Date },
  returnedAt: { type: Date, default: null },
  status: { type: String, enum: ['issued', 'returned'], default: 'issued' }
});

module.exports = mongoose.model('Issue', IssueSchema);
