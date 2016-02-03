var express = require('express');
var expjwt = require('express-jwt');
var jwt		= require('jsonwebtoken');
var Account = require('../model/account.js');
var path = require('path');

var JWT_SECRET = "secret";

module.exports = (function() {
	
	var homeRouter = express.Router();
	
	// middleware to use for all requests
	homeRouter.use('/', function(req, res, next) {
		console.log('Welcome!');
		next();
	});


	homeRouter.get('/*', function(req, res, next) {
		res.sendFile('main.html', { root: path.join(__dirname, '../client') });
	});
	
	return homeRouter;
})();

