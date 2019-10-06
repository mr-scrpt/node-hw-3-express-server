const express = require('express');
const router = express.Router();
const controllers = require('../constrollers');


/* GET home page. */
router.get('/',  controllers.indexPage);
router.post('/',  controllers.sendMsg);

router.get('/login',  controllers.loginPage);
router.get('/admin',  controllers.adminPage);
router.post('/admin/skills',  controllers.skillsEdited);
router.post('/admin/upload',  controllers.uploadWorks);
module.exports = router;