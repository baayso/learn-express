const layuiService = {};

const co = require('co');

const http = require('../utils/http');

layuiService.find = function (params, callback) {
    let url = 'http://www.layui.com/demo/table/user?page={page}&limit={limit}';

    co(function* () {
        console.log('params: ' + params);

        url = url.replace('{page}', params.page);
        url = url.replace('{limit}', params.limit);

        let value = yield http.get(url);

        console.log("\nvalue: " + value);

        callback(value);
    });

};

module.exports = layuiService;
