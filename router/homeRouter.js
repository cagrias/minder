var express = require('express');
var expjwt = require('express-jwt');
var jwt		= require('jsonwebtoken');
var Account = require('../model/account.js');

var JWT_SECRET = "secret";

module.exports = (function() {
	
	var homeRouter = express.Router();
	
	// middleware to use for all requests
	homeRouter.use('/', function(req, res, next) {
		console.log('Welcome!');
		next();
	});
	
	return homeRouter;
})();

