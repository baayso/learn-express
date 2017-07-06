var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function (req, res, next) {
    res.render('user', {
        title: '基本例子',
        isAdmin: true,
        list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
    });
});

module.exports = router;
