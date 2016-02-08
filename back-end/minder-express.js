// configure body parser
var express = require('express'),
	path = require('path'),
    bodyParser = require('body-parser'),	// pull information from HTML POST (express4)
    session = require("express-session");


module.exports = function(passport) {

    var app = express();

    //app.use(express.static(__dirname + '/client' ));	// set the static files location /public/img will be /img for users
    app.use(express.static(path.join(__dirname, "..", "client")));
    console.log(path.join(__dirname, "..", "client"));

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    // parse application/json (req.body.username etc. diyebilelim diye)
    app.use(bodyParser.json());
    //app.use(morgan("dev"));
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*'); //allowing requests to come from different domains in order to develop a client-independent system and prevent CORS (Cross Origin Request Sharing) in the web browser.
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Access-Control-Allow-Origin');
        next();
    });
    // set default engine to jade for rendering (?) app.set('view engine', 'jade');
        
	// use passport session, express-session enables to access fb serialized-user through entire app 
    app.use(session({ secret: "ultor_minder" , resave: true, saveUninitialized: true}));
	app.use(passport.initialize());
	app.use(passport.session());
    
    var loginRouter = require('./router/loginRouter.js')(passport);
    var homeRouter = require('./router/homeRouter.js');
    app.use('/rs/login', loginRouter);
    app.use('/rs/home', homeRouter);

    app.listen(8000,function(){
        console.log("Server listening on port 8000");
    });

    /*process.on('uncaughtException', function(err) {
        console.log(err);
    });*/

    // express.static'de gösterdiğimiz yerden index.html'yi zaten otomatik olarak alıyor
    /*app.get('*', function(req, res) {
        res.sendFile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });*/
};