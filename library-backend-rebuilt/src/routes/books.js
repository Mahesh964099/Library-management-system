const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const bookCtrl = require('../controllers/bookController');

router.get('/', bookCtrl.list);
router.post('/', [body('title').notEmpty(), body('author').notEmpty()], bookCtrl.create);
router.get('/:id', bookCtrl.get);
router.put('/:id', bookCtrl.update);
router.delete('/:id', bookCtrl.remove);

module.exports = router;
