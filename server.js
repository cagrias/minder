var mongoose = require('mongoose'),
    passport = require('passport');

// connect to db
mongoose.connect('mongodb://minder:minder@192.168.3.25:27017/minder');//mongodb://zuzu:test@ds039211.mongolab.com:39211/zuzu_crew_test_db');

// Bootstrap passport config
require('./back-end/config/passport')(passport);

// Init the express application
var app = require('./back-end/minder-express')(passport);

