var express = require('express');
var app = express();
var bodyParser = require('body-parser');	// pull information from HTML POST (express4)
var fs = require('fs');
var mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://zuzu:test@ds039211.mongolab.com:39211/zuzu_crew_test_db');

//app.use(express.static(__dirname + '/public'));	// set the static files location /public/img will be /img for users
app.use(express.static(__dirname));

// configure body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json (req.body.username etc. diyebilelim diye)
app.use(bodyParser.json());
//app.use(morgan("dev"));
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*'); //allowing requests to come from different domains in order to develop a client-independent system and prevent CORS (Cross Origin Request Sharing) in the web browser.
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});
// set default engine to jade for rendering (?)
//app.set('view engine', 'jade');
	
var tweetRouter = require('./router/tweetRouter.js');
var loginRouter = require('./router/loginRouter.js');
app.use('/rs/twitter', tweetRouter);
app.use('/rs/login', loginRouter);

app.listen(8000);

process.on('uncaughtException', function(err) {
	console.log(err);
});

// express.static'de gösterdiğimiz yerden index.html'yi zaten otomatik olarak alıyor
/*app.get('*', function(req, res) {
	res.sendFile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});*/

