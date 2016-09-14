/**
 * Created by Administrator on 2016/9/4.
 */
var MongClient = require('mongodb').MongoClient;
MongClient.connect('mongodb://192.168.100.2:27017/bookface',function (err,db) {
    db.collection('user').insertOne({'name':'zhougy'},function (err,res) {
        db.close();
    });
})