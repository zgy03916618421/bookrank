/**
 * Created by Administrator on 2016/9/14.
 */
var config = {
    mongo : {
        host: process.env.BS_MONGOHOST || '192.168.100.2',
        port: process.env.BS_MONGOPORT || '27017',
        db:    process.env.BS_MONGODBNAME || 'bookface',
        user : process.env.BS_MONGOUSER || 'bookcover',
        pass : process.env.BS_MONGOPASS || '5pmKRaVA'
    }
}
module.exports = config;