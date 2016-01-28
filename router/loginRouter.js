var express = require('express');
var expjwt = require('express-jwt');
var jwt		= require('jsonwebtoken');
var Account = require('../model/account.js');

var JWT_SECRET = "secret";

module.exports = (function() {
	
	var loginRouter = express.Router();
	
	// middleware to use for all requests
	loginRouter.use('/', function(req, res, next) {
		console.log('Entered LoginRouter Service with url: ' + req.url);
		next();
	});

	loginRouter.get('/', function(req, res) {
        console.log('Bu da ikinci: ' + req.url);
		res.json({
					data: "Sign-in or Sign-up!"
				});
	});

	
	loginRouter.get('/authenticate', function(req, res) {
		console.log("Auth get!");
		res.json({
					data: "Auth get!"
				});
	});

	loginRouter.post('/authenticate', function(req, res) {
		console.log("Auth post!");
		console.log(req.body);
		Account.findOne({'username': req.body.username, 'password': req.body.password}, function(err, account) {
			if (err) {
				res.json({
					type: false,
					data: "Error occured: " + err
				});
				console.log("Error");
			} else {
				if (account) {
					console.log(account.token);
					res.json({
						type: true,
						data: account,
						token: account.token
					}); 
					console.log("OK!");
				} else {
					res.json({
						type: false,
						data: "Incorrect email/password"
					});    
					console.log("Incorrect");
				}
			}
		});
	});
	
	loginRouter.post('/signup', function(req, res) {
		console.log("Sign-up post!");
        console.log(req);
        console.log(req.body);
        console.log(req.body.username + " " + req.body.password);
		Account.findOne({username: req.body.username, password: req.body.password}, function(err, account) {
			if (err) {
				res.json({
					type: false,
					data: "Error occured: " + err
				});
			} else {
				if (account) {
					res.json({
						type: false,
						data: "User already exists!"
					});
				} else {
					var accModel = new Account();
					accModel.username = req.body.username;
					accModel.password = req.body.password;
					accModel.save(function(err, account) {
						account.token = jwt.sign(account, JWT_SECRET);
						console.log(account.token);
						account.save(function(err, account1) {
							res.json({
								type: true,
								data: account1,
								token: account1.token
							});
						});
					})
				}
			}
		});
	});
	
	
	loginRouter.get('/me', expjwt({secret: JWT_SECRET}), function(req, res) {
		console.log("Me get!");
		console.log("Me user: " + req.user.username+" "+req.user.password+" "+req.user.token+" "+req.token);
		Account.findOne({username: req.user.username, password: req.user.password}, function(err, account) {
			if (err) {
				res.json({
					type: false,
					data: "Error occured: " + err
				});
			} else {
				res.json({
					type: true,
					data: account
				});
			}
		});
	});
	
	return loginRouter;
})();

