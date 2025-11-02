const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const memberCtrl = require('../controllers/memberController');

router.get('/', memberCtrl.list);
router.post('/', [body('name').notEmpty(), body('email').isEmail()], memberCtrl.create);
router.get('/:id', memberCtrl.get);
router.put('/:id', memberCtrl.update);
router.delete('/:id', memberCtrl.remove);

module.exports = router;
