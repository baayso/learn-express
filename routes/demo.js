const express = require('express');
const router = express.Router();

const demoService = require('../services/demo');

router.get('/', function (req, res, next) {
    let params = {
        name: req.query.name,
        age: req.query.age
    };

    demoService.find(params, function (result) {
        res.send(result);

        console.log("response end.");
    });

    console.log("\nhttp request method end.");
});

module.exports = router;
