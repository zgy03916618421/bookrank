/**
 * Created by Administrator on 2016/9/14.
 */
var config = {
    mongo : {
        host: process.env.BS_MONGOHOST || '192.168.100.2',
        port: process.env.BS_MONGOPORT || '27017',
        db:    process.env.BS_MONGODBNAME || 'bookface',
        user : process.env.BS_MONGOUSER || 'bookface_reader',
        pass : process.env.BS_MONGOPASS || 'TG5v9n7E'
    }
}
module.exports = config;