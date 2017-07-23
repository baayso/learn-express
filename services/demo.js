const demoService = {};

const co = require('co');

const http = require('../utils/http');

demoService.find = function (params, callback) {
    let url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';

    co(function*() {
        console.log('params: ' + params);

        let value = yield http.get(url);

        console.log("\nvalue: " + value);

        callback(value);
    });

};

module.exports = demoService;
