var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var cmd = require('os'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var barhost = 'pong'

app.get('/', function (req, res) {
  var data = {foo: {},bar: {}}
  var options = {
    host: 'bar', // bar service host
    port: '80', // bar service port
    path: '/'
  };

  callback = function(response) {
    var barjson = '';


    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      barjson += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      barobj = JSON.parse( barjson);
      fooobj = {foo: {host: cmd.hostname()},bar: {host: barobj.hostname}}
      console.log("foo - " + cmd.hostname());
      res.json(fooobj);
    });
  }

  http.request(options, callback).end();

});

var server = app.listen(process.env.PORT || 3000, function(){ console.log("Foo app started on port ", server.address().port) });
