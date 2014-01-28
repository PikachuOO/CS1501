var express = require("express")
, path = require('path')

var app = express();

require('./routes')(app)


// Points Express to a folder where you keep static files. 
//e.g. css or client side js files
app.use(express.static(path.normalize(__dirname) + '/public'))

// Tell express to use its built in errorHandler
app.use(express.errorHandler());

app.configure(function() {
	app.use(express.logger('dev'))
	app.use(express.bodyParser())
})

// Tell express to use its logger which makes the info for our requests prettier

// These 3 lines tell express that we are going to be rendering html files
// held in the public directory which should be in the same directory as this
// file.
app.set('views', path.normalize(__dirname)+'/public')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

// Set the port for the server to listen for requests
var port = Number(process.env.PORT || 8000);

// Actually start listening on that port
app.listen(port);
console.log('Express app started on port ' + port);
