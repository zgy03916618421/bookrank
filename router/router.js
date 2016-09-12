/**
 * Created by Administrator on 2016/9/4.
 */
var router = require('koa-router')();
var C = require('../controller/controller')
router.get('/booklist',C.booklist);
router.post('/bookrank',C.bookrank);
router.post('/userinfo',C.userinfo);
module.exports = router;