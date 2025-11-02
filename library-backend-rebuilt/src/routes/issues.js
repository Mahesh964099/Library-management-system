const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const issueCtrl = require('../controllers/issueController');

router.get('/', issueCtrl.list);

// issue a book
router.post('/issue', [body('bookId').notEmpty(), body('memberId').notEmpty()], issueCtrl.issueBook);
// return a book
router.post('/return', [body('issueId').notEmpty()], issueCtrl.returnBook);

module.exports = router;
