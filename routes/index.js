const express = require('express');
const router = express.Router();
const controllers = require('../constrollers');


/* GET home page. */
router.get('/',  controllers.indexPage);
router.post('/',  controllers.sendMsg);

router.get('/login',  controllers.loginPage);
module.exports = router;