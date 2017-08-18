const express = require('express');
const router = express.Router();

const fs = require("fs");

const multer = require('multer');
const upload = multer();

const uploadService = require('../services/upload');


router.get('/', function (req, res, next) {
    res.render('upload');
});

router.post('/excel/upload', upload.single('excel'), function (req, res, next) {
    // req.file 是 `excel` 文件的信息
    // req.body 将具有文本域数据, 如果存在的话

    uploadService.import(req.file.buffer, req.body.fileName, function (result) {
        res.send(result);

        console.log("response end.");
    });

    console.log("\nhttp request method end.");
});

router.get('/excel/download', function (req, res, next) {

    uploadService.export(function (result) {
        res.download(result, '测试导出Excel.xlsx', function (err) {
            if (err) {
                // Handle error, but keep in mind the response may be partially-sent
                // so check res.headersSent
            }
            else {
                // decrement a download credit, etc.
            }

            fs.unlink(result);
        });

        console.log("response end.");
    });

    console.log("\nhttp request method end.");
});


module.exports = router;
