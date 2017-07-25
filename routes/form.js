const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('form/form', {
        one: {title: '表单 - 在线演示 - layui'},
        two: {title: '表单 - 在线演示 - layui - TEST'}
    });
});

module.exports = router;
