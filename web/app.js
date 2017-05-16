var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var prot = require('http');
var cmd = require('os'); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {

  var webobj = {}
  var options = {
    host: 'foo', // foo service host
    port: '80', // foo service port
    path: '/'
  };
  callback = function(response) {
    var foojson = '';

    response.on('data', function (chunk) {
      foojson += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      webobj = JSON.parse(foojson);
      webobj.web = { host : cmd.hostname()}
      console.log(webobj);
      res.render('index', webobj);
    });
  }

  http.request(options, callback).end();  
})

var server = app.listen(process.env.PORT || 3000, function(){ console.log("Web app started on port ", server.address().port) });
