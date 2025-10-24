const express = require('express');
const router = express.Router();
const Borrower = require('../models/borrower');

router.get('/', async (req, res) => {
    const borrowers = await Borrower.find();
    res.json(borrowers);
});

router.post('/', async (req, res) => {
    const borrower = new Borrower(req.body);
    await borrower.save();
    res.json(borrower);
});

router.put('/:id', async (req, res) => {
    const updated = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    await Borrower.findByIdAndDelete(req.params.id);
    res.json({ message: 'Borrower deleted' });
});

module.exports = router;
