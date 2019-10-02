const express = require('express');
const router = express.Router();
const controllers = require('../constrollers');


/* GET home page. */
router.get('/',  controllers.indexPage);

module.exports = router;