const uploadService = {};

const fs = require("fs");

const ejsExcel = require('ejsexcel');
const uuid = require('node-uuid');


uploadService.import = function (buffer, params, callback) {
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

uploadService.export = function (callback) {
    let exlBuf = fs.readFileSync(__dirname + '/../template/export.xlsx');

    //数据源
    let data = [
        [{"dpt_des": "开发部", "doc_dt": "2013-09-09", "doc": "a001"}],
        [
            {"pt": "pt1", "des": "des1", "due_dt": "2013-08-07", "des2": "2013-12-07"},
            {"pt": "pt1", "des": "des1", "due_dt": "2013-09-14", "des2": "des21"}
        ]
    ];

    //用数据源(对象)data渲染Excel模板
    ejsExcel.renderExcel(exlBuf, data).then(function (exportBuff) {
        let path = __dirname + '/' + uuid.v1() + '.xlsx';
        fs.writeFileSync(path, exportBuff);

        callback(path);
    }).catch(function (err) {
        console.error(err);
    });
};

module.exports = uploadService;
