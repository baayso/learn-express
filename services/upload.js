const uploadService = {};

const co = require('co');

const ejsExcel = require('ejsexcel');


uploadService.read = function (buffer, params, callback) {
    let exBuf = buffer;

    console.log("params: " + params);

    ejsExcel.getExcelArr(exBuf).then(workBook => {
        console.log("************  read success:getExcelArr");

        let workSheets = workBook[0];

        let result = [];

        workSheets.forEach((item, index) => {
            result.push((index + 1) + '    ' + item.join('    '));
            console.log((index + 1) + '    ' + item.join('    '));
        });

        callback(result);

    }).catch(error => {
        console.log("************** had error!");
        console.log(error);
    });
};

module.exports = uploadService;
