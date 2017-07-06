var express = require('express');
var router = express.Router();

var userService = require('../services/user');


router.get('/', function (req, res, next) {
    res.send("中文最牛逼！");
});

/* GET user listing. */
router.get('/list', function (req, res, next) {
    var users = userService.list();

    res.render('user', users);
});

module.exports = router;
