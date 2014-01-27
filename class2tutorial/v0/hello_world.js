var express = require("express")
, path = require('path')
, haiku = require('./haiku').haiku;

var app = express();
var port = 8000;
app.listen(port);
console.log('Express app started on port ' + port);

app.get('/', function(req, res) {
	res.send(haiku);
})
