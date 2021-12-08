const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

/* GET users listing. */
router.get('/:name', controller.getUserRepo);

module.exports = router;
