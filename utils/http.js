const http = {};

const request = require('request');

http.get = function*(url) {
    let rep = yield new Promise(function (resolve, reject) {
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

    return rep;
};


module.exports = http;
