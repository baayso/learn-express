const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('layui/admin', {
        one: {title: 'Layui - 后台布局'},
        two: {title: 'Layui - 后台布局 - TEST'}
    });
});

module.exports = router;
