var express = require('express');

var tweets = [{ "message":"1"}, { "message":"2"}];

module.exports = (function() {
	
	var tweetRouter = express.Router();
	
	// middleware to use for all requests
	tweetRouter.use(function(req, res, next) {
		// do logging
		console.log('Entered TweetRouter Service with url: ' + req.url);
		next();
	});

	tweetRouter.get('/', function(req, res) {
		res.send('Welcome to Node Twitter');
		//res.json({ message: 'hooray! welcome to our api!' });	
	});

	tweetRouter.route('/send').post(function(req, res) {
		if (req.body && req.body.tweet) {
			tweets.push(req.body.tweet);
			res.send({status:"ok", message:"Tweet received"});
		} else {
			res.send({status:"nok", message:"No tweet received"})
		}
	});

	tweetRouter.get('/tweets', function(req,res) {
		res.send(tweets);
	});

	tweetRouter.get('/tweets/:id', function(req,res) {
		console.log('get request for id: ' + req.params.id);
		res.send(tweets[req.params.id]);
	});
	
	return tweetRouter;
})();

