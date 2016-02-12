module.exports = {

    'facebookAuth' : {
        'clientID'      : '1673491539606490',
        'clientSecret'  : 'd3e974ea38b87402eb6cfab5780b9c17',
        'callbackURL'   : 'http://localhost:8000/rs/login/auth/facebook/callback'
    },
    
    'mongoDB' : {
        'mongoUrl'      : 'mongodb://minder:minder@192.168.3.17:27017/minder' // mongodb://zuzu:test@ds039211.mongolab.com:39211/zuzu_crew_test_db'
        
    },
    
    'localAuth' : {
        'activateUrl'   : 'http://192.168.3.71:8000/#/front/activate/'
        
    }
};