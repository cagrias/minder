var express = require('express');
var expjwt = require('express-jwt');
var jwt		= require('jsonwebtoken');
var Account = require('../model/account.js');
var nodemailer = require('nodemailer');

var JWT_SECRET = "secret";

module.exports = function(passport) {
	
	var loginRouter = express.Router();
	
	// middleware to use for all requests
	loginRouter.get('/', function(req, res) {
        console.log('Entered LoginRouter Service with url: ' + req.url);
		res.json({
					data: "Sign-in or Sign-up!"
				});
	});

	loginRouter.post('/authenticate', function(req, res) {
		console.log("Auth post!");
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
						data: account
						// token: account.token
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
		console.log("Sign-up post with username:" + req.body.username + ", pass:" + req.body.password);
		Account.findOne({'username': req.body.username, 'password': req.body.password}, function(err, account) {
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
				} else if(!req.body.username || !req.body.username) {
                    res.json({
						type: false,
						data: "Void info!"
					});
                }
                else {                 
					var accModel = new Account();
					accModel.username = req.body.username;
					accModel.password = req.body.password;
                    accModel.name     = req.body.name;
                    accModel.gender   = req.body.gender;
                    accModel.userType = "local";
                    accModel.isActive = false;
                    accModel.token    = jwt.sign({"username": req.body.username, "password": req.body.password}, JWT_SECRET);
                    sendEmail(req.body.username, accModel.token);  
					accModel.save(function(err, account) {
						console.log(account.token);
						res.json({
                            type: true,
                            data: account
                            // token: account.token
                        });
					})
				}
			}
		});
	});
    
	loginRouter.post('/activate', function(req, res) {
		console.log("Activate post!");
		Account.findOne({'username': req.body.username, 'token': req.body.token}, function(err, account) {
			if (err) {
				res.json({
					type: false,
					data: "Error occured: " + err
				});
				console.log("Error");
			} else {
				if (account) {
					console.log("Activating user...");
                    account.isActive = true;
                    account.save();
					res.json({
						type: true,
						data: account
					}); 
					console.log("User is activated!");
				} else {
					res.json({
						type: false,
						data: "User does not exist!"
					});    
					console.log("User does not exist!");
				}
			}
		});
	});
   
	// FACEBOOK ROUTES
	// route for facebook authentication and login
	loginRouter.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
	// handle the callback after facebook has authenticated the user
	loginRouter.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: "/rs/login/me"})); 
    // 
    // { failureRedirect: '/rs/login' }),
    //     function(req, res) {         
    //         // Successful authentication, redirect home.
    //         // res.redirect('/rs/login/me');
    // });
    

	//expjwt({secret: JWT_SECRET}), 
	loginRouter.get('/me', function(req, res) {
        console.log("Me user: " + req.user.gender);
        res.json(req.user);
	});
    
	
	return loginRouter;
};

function sendEmail(username, token) {
    var transporter = nodemailer.createTransport('smtps://ultor.band%40gmail.com:ultortheband@smtp.gmail.com');
    var activateUrl = "http://192.168.3.71:8000/#/front/activate/"+ username+ "/" + token;
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Ultor™ <ultor.band@gmail.com>', // sender address
        to: username, // list of receivers
        subject: 'Activate your account ✔', // Subject line
        text: 'Activate URL: ' + activateUrl, // plaintext body
        html: '<b>Hello world 🐴. <a href="' + activateUrl + '" > Click here for activation </a></b>' // html body
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

