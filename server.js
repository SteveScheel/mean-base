var express    = require('express');
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var port       = process.env.PORT || 8080; // use 8080 for localhost testing

// setup static files folder
app.use(express.static(__dirname + '/public'));

// route to angular app
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// start server
app.listen(port);
