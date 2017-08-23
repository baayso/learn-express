const express = require('express');
const router = express.Router();

const layuiService = require('../services/layui');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('layui/admin', {
        one: {title: 'Layui - 后台布局'},
        two: {title: 'Layui - 后台布局 - TEST'}
    });
});

router.post('/table/user', function (req, res, next) {
    let params = {
        page: req.body.page,
        limit: req.body.limit
    };

    layuiService.find(params, function (result) {
        res.send(result);

        console.log("response end.");
    });

    console.log("\nhttp request method end.");
});


module.exports = router;
