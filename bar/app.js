var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var prot = require('http');
var cmd = require('os'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  console.log("bar - " + cmd.hostname());
  res.json({ hostname : cmd.hostname(), host: 'bar'});
})

var server = app.listen(process.env.PORT || 3000, function(){ console.log("servidor inicializado en el puerto ", server.address().port) });
