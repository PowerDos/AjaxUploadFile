var express = require('express');
var router = express.Router();
var multer = require('multer');

// 通过 storage 可以让你控制文件的存储.
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');  // 文件存储路径
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳.文件类型 ，比如 15026854834053.png
        console.log(file);
        var fileName = Date.now() + file.originalname.substring(file.originalname.lastIndexOf('.')-1);
        cb(null, fileName);
    }
});

var upload = multer({ storage: storage });

router.post('/', upload.array('file', 1), function (req, res, next) {
    res.render('upload');
});

module.exports = router;