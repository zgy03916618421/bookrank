/**
 * Created by Administrator on 2016/9/3.
 */
var koa = require('koa');
var mongo = require('./mongoTemplate');
var router = require('./router/router');
var bodyParse = require('koa-bodyparser');
var cors = require('koa-cors');
var logger = require('koa-logger')
var app = koa();
app.use(logger());
app.use(cors());
app.use(bodyParse());
/*app.use(function *() {
    var db = yield mongo.connect("mongodb://192.168.100.2:27017/bookface");
    var result = yield mongo.insert(db,'test',{"name":"zgy"});
    var fd = yield mongo.find(db,"test");
    console.log(fd);
})*/
require('./middleware/connectMongo');
app.use(router.routes()).use(router.allowedMethods());

app.listen(10000);