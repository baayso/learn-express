const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('form', {title: '表单 - 在线演示 - layui'});
});

module.exports = router;
