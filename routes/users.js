const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

/* GET users listing. */
router.get('/:name', controller.getUserRepo);
router.get('/:name/:project', controller.getReadme);


module.exports = router;
