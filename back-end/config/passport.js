'use strict';

var LocalStrategy    = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
	Account = require('../model/account'),
	path = require('path'),
	configAuth = require('./config');

module.exports = function(passport) {
	// Serialize sessions
	passport.serializeUser(function(acc, done) {
		done(null, acc.id);
	});

	// Deserialize sessions
    passport.deserializeUser(function(id, done) {
        Account.findById(id, function(err, acc) {
            done(err, acc);
        });
    });
    
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : ['id', 'emails', 'gender', 'displayName', 'birthday', 'first_name', 'last_name']

    },
    
    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            for(var propertyName in profile) {
                 console.log(propertyName + " " + profile[propertyName]);
            }
            for(var propertyName in profile.name) {
                 console.log(propertyName + " " + profile.name[propertyName]);
            }

            // find the user in the database based on their facebook id
            Account.findOne({ 'facebook_id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser            = new Account();

                    // set all of the facebook information in our user model
                    newUser.facebook_id    = profile.id; // set the users facebook id                   
                    newUser.token          = token; // we will save the token that facebook provides to the user                    
                    newUser.name           = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    newUser.username       = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                    newUser.isActive       = true;
                    newUser.userType       = 'fb';
                    newUser.gender         = profile.gender;

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });

    }));
    
    return passport;
};