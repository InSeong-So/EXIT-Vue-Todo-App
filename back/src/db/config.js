const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://39.115.14.230:27017";

let _db;

module.exports = {
    connectingServers : async function(callback){
        try {
            await MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {
                _db = client.db('test.db');
                return callback(err);
            });
        }
        catch (e) {
            throw e;
        }
    },

    getDb : function(){
        return _db;
    },

    disconnectDb : function(){
        return _db.close();
    }
};