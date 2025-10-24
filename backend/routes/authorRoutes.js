const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/', async (req, res) => {
    const authors = await Author.find();
    res.json(authors);
});

router.post('/', async (req, res) => {
    const author = new Author(req.body);
    await author.save();
    res.json(author);
});

router.put('/:id', async (req, res) => {
    const updated = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    await Author.findByIdAndDelete(req.params.id);
    res.json({ message: 'Author deleted' });
});

module.exports = router;
