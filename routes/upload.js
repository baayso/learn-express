const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

const uploadService = require('../services/upload');


router.get('/', function (req, res, next) {
    res.render('upload');
});

router.post('/excel/upload', upload.single('excel'), function (req, res, next) {
    // req.file 是 `excel` 文件的信息
    // req.body 将具有文本域数据, 如果存在的话

    uploadService.read(req.file.buffer, req.body.fileName, function (result) {
        res.send(result);

        console.log("response end.");
    });

    console.log("\nhttp request method end.");
});


module.exports = router;
