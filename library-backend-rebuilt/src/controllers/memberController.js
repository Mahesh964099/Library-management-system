const Member = require('../models/Member');
const { validationResult } = require('express-validator');

exports.list = async (req, res, next) => {
  try {
    const members = await Member.find().sort({ joinedAt: -1 });
    res.json(members);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const m = new Member(req.body);
    await m.save();
    res.status(201).json(m);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: 'Email already exists' });
    next(err);
  }
};

exports.get = async (req, res, next) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member deleted' });
  } catch (err) {
    next(err);
  }
};
