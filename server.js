var http = require('http');
var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var express = require('express');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var port = {number: 8080};
var server = express();
var reload = require('reload');


var url = "mongodb://localhost:27017/memoryGym";
var resp = [];

var findFaces = function(db, callback) {
   var cursor = db.collection('namesAndFaces').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         //console.dir(doc);
         resp.push(doc);
      } else {
         callback();
      }
   });
};

mongoClient.connect(url, function(err,db) {
    assert.equal(null, err);
    console.log("Connected to mongo db");
    findFaces(db, function() {
        db.close();
    });
});

server.use('/vendor_client', express.static(__dirname + '/bower_components'));
server.use('/vendor_server', express.static(__dirname + '/node_modules'));
server.use('/public', express.static(__dirname + '/public'));

server.use(function(req, res, next){
    console.log('Time:' + Date.now());
    next();
});

server.get('/faces', function(req, res, next){
    console.log('Request from ' + req.url);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(resp, null, 4));
});

server.get('/', function(req, res, next){
    console.log('Request from ' + req.url);
    //res.setHeader('Content-Type', 'text/html');
    res.end(index);
});

httpServer = http.createServer(server);

reload(httpServer, server);

httpServer.listen(8080, function(){
    console.log('I am listening on port ' + port.number);
});

