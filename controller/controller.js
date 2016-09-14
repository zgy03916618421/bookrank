/**
 * Created by Administrator on 2016/9/4.
 */
var mongo = require('../mongoTemplate');
exports.booklist = function *() {
    var limit = parseInt(this.query.limit);
    console.log(limit);
    var data = yield mongo.find(mongodb,"bookinfo");
    shuffle(data);
    //console.log(data.length)
    var list = data.slice(0,limit);
    //console.log(list.length)
    this.body = list;
}
exports.bookrank = function *() {
    var bodyParse = this.request.body;
    //var data = [];
    for (var key in bodyParse){
        var title = bodyParse[key].bookname;
        var rank = bodyParse[key].rank;
        var filter = {'title':title};
        var doc = yield mongo.findOne(mongodb,'bookrank',filter);
        var count = doc.count +1;
        var rank = doc.rank + parseInt(rank);
        var document = {
            'count' : count,
            'rank' : rank
        }
        yield mongo.update(mongodb,'bookrank',filter,document);
        /*var result = {
            'title' : title,
            'average' : (rank / count).toFixed(1),
            'count' : count,
            'image' : doc.image,
            'rating' : doc.rating
        };
        data.push(result);*/
    }
    var data = yield mongo.find(mongodb,"bookrank");
    this.body = data;
  /*  var filter = {"title":name};
    var doc = yield mongo.findOne(mongodb,"bookrank",filter);
    if(doc == null){
        mongo.insert(mongodb,'bookrank',{'title':name,'count':1,'rank':parseInt(rank)})
        this.body = {'title':name,'average':rank,'count':1};
    }else {
        var document = {
        'count' : doc.count + 1,
        'rank' : doc.rank + parseInt(rank)
    }
        yield mongo.update(mongodb,'bookrank',filter,document);
        this.body = {'title':doc.title,'average':doc.rank  / doc.count,'count':doc.count}
    }*/
}
exports.userinfo = function *() {
    var bodyParse = this.request.body;
    yield mongo.insert(mongodb,'userinfo',bodyParse);
    this.body = {'code':200,'status':'success'}
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}