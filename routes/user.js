const express = require('express');
const router = express.Router();

const userService = require('../services/user');


router.get('/', function (req, res, next) {
    res.send("汉语最美丽，中文最牛逼！");
});

/* GET user listing. */
router.get('/list', function (req, res, next) {
    let users = userService.list();

    res.render('user', users);
});

module.exports = router;
