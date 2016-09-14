/**
 * Created by Administrator on 2016/9/3.
 */
var config = require('../config/config');
var MongoClient = require('mongodb').MongoClient;
var c_opt = {server:{auto_reconnect:true}};
if(process.env.BS_ENV == 'dev'){
    var _auth = '';
}else{
    var _auth = config.mongo.user+':'+config.mongo.pass+'@';
}
var host = config.mongo.host + ':27017';
MongoClient.connect('mongodb://' + _auth + host +'/' + config.mongo.db,c_opt,function (err,db) {
    global.mongodb = db;
    console.log('connect to mongo success!');
})
