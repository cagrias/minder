var mongoose = require('mongoose'),
    passport = require('passport'),
	config = require('./back-end/config/config');

// connect to db
mongoose.connect(config.mongoDB.mongoUrl);

// Bootstrap passport config
passport = require('./back-end/config/passport')(passport);

// Init the express application
var app = require('./back-end/minder-express')(passport);

