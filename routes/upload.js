var express = require('express');
var router = express.Router();
var multiparty = require('multiparty')
var path = require('path')
var fs = require('fs')

router.post('/img', function(req, res, next) {
    // 创建一个实例
    var form = new multiparty.Form()
    // form.parse方法的作用，把req中的图片数据存在服务器临时存储路径中去
    form.parse(req,function(err,fielsa,files){
        if(err){
            res.json({err:1,msg:'图片上传失败'})
        } else {
            // 图片上传成功
            console.log('files',files)
        }
    })
}); 

module.exports = router;