/**
 * Created by Administrator on 2016/9/4.
 */
var router = require('koa-router')();
var C = require('../controller/controller')
router.get('/booklist',C.booklist);
router.post('/bookrank',C.bookrank);
router.put('/info',function *() {
    console.log(this.request.headers)
})
module.exports = router;