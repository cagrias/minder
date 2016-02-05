var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
 
var AccountSchema   = new Schema({
    username: String,
    password: String,
    token: String,
    isActive: Boolean
});
 
module.exports = mongoose.model('Account', AccountSchema);