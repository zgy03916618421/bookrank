/**
 * Created by Administrator on 2016/9/3.
 */
var MongoClient = require('mongodb').MongoClient;
var c_opt = {server:{auto_reconnect:true}};
MongoClient.connect("mongodb://192.168.100.2:27017/bookface",c_opt,function (err,db) {
    global.mongodb = db;
    console.log('connect to mongo success!');
})
