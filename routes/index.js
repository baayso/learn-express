const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/json', function (req, res, next) {

    res.cookie('rememberMe', '1', {expires: new Date(Date.now() + 900000), httpOnly: true});

    res.json({
        rememberMe: req.cookies.rememberMe,
        val: req.param('name'), // deprecated
        name: req.query.name,
        query: req.query,
        params: req.params,
        body: req.body,
        cookies: req.cookies
    });
});

router.get('/session', function (req, res, next) {
    console.log(req.session);

    if (req.session.sign) {
        res.send('Welcome <strong>' + req.session.sign.name + '</strong>');
    }
    else {
        req.session.sign = {
            id: 101,
            name: 'baayso',
            gender: 'male'
        };

        req.session.save();  //保存一下修改后的Session

        res.send('欢迎登录！');
    }
});

module.exports = router;
