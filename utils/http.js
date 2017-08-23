const http = {};

const request = require('request');

http.get = function* (url) {
    let resp = yield new Promise(function (resolve, reject) {
        return request.get(url, function (error, response, body) {
            if (error) {
                console.log('error:', error);

                reject(error);
            }
            else {
                // console.log('statusCode:', response && response.statusCode);
                // console.log('body:', body);

                resolve(body);
            }
        });
    });

    return resp;
};

http.post = function* (url, params) {
    let resp = yield new Promise(function (resolve, reject) {
        // request.post(url).form(params)
        return request.post(url, {form: params}, function (error, response, body) {
            if (error) {
                console.log('error:', error);

                reject(error);
            }
            else {
                // console.log('statusCode:', response && response.statusCode);
                // console.log('body:', body);

                resolve(body);
            }
        });
    });

    return resp;
};


module.exports = http;
