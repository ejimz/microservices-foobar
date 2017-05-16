var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var prot = require('http');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var ping-host = 'ping'

app.get('/', function (req, res) {
  
  res.render('index');
})

var server = app.listen(process.env.PORT || 3000, function(){ console.log("Web app started on port ", server.address().port) });
