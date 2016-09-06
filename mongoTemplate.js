/**
 * Created by Administrator on 2016/9/3.
 */
var MongoClient = require('mongodb').MongoClient;
exports.connect = function (url) {
    return new Promise(function (resolve,reject) {
        MongoClient.connect(url,function (err,db) {
            if (err) reject(err);
            else {
                resolve(db);
            }
        })
    })
}
exports.insert = function (db,coll,doc) {
    return new Promise(function (resolve,reject) {
        db.collection(coll).insertOne(doc,function (err,result) {
            if (err) reject(err);
            else resolve(result);
        })
    })
}
exports.find = function (db,coll,filter) {
    return new Promise(function (resolve,reject) {
        var cursor = db.collection(coll).find(filter);
        var data = []
        cursor.each(function (err,doc) {
            if (err) reject(err);
            if (doc!=null){
                data.push(doc);
            }else {
                resolve(data);
            }
        })
    })
}
exports.findOne = function (db,coll,filter) {
    return new Promise(function (resolve,reject) {
        var cursor = db.collection(coll).find(filter);
        cursor.each(function (err,doc) {
            if (err) reject(err);
            else resolve(doc);
        })
    })
}
exports.update = function (db,coll,query,doc) {
    return new Promise(function (resolve,reject) {
        db.collection(coll).updateOne(
            query,
            {
                $set : doc
            },function (err,result) {
                if (err) reject(err);
                else resolve(result);
            }
        )
    })
}