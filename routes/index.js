var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 查询数据库
  res.render('index', { title: '2002' });
});

module.exports = router;
