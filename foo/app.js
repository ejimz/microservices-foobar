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
    host: 'localhost',
    port: '3000',
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
      barobj = JSON.parse( pongjson);
      fooobj = {ping: {host: cmd.hostname()},bar: {host: pongobj.hostname}}
      res.json(fooobj);
    });
  }

  http.request(options, callback).end();

});

var server = app.listen(process.env.PORT || 3000, function(){ console.log("servidor inicializado en el puerto ", server.address().port) });
