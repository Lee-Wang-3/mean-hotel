//Driver
var MongoClient = require('mongodb').MongoClient;
//Connection string
var dburl = 'mongodb://localhost:27017/meanhotel';

var __connection = null;

// set _connection
var open = function() {
    MongoClient.connect(dburl, function(err, db){
        if (err) {
            console.log("DB connection failed")
        }
        _connection = db.db("meanhotel");
        console.log("DB connection open", db);
    });
};

var get = function() {
    return _connection;
}

module.exports = {
    open: open,
    get: get
};