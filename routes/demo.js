const express = require('express');
const router = express.Router();

const request = require('request');
const co = require('co');

const http = require('../utils/http');


router.get('/', function (req, res, next) {
    let url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';

    co(function*() {
        let value = yield http.get(url);

        console.log(value);

        res.send(value);
    });

    console.log("test");
});

module.exports = router;
