var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
 
var AccountSchema   = new Schema({
    username     : String,  // email
    password     : String,
    token        : String,
    facebook_id  : String,
    name         : String,
    isActive     : Boolean,
    gender       : String,
    userType     : String    // facebook or local

});
 
module.exports = mongoose.model('Account', AccountSchema);