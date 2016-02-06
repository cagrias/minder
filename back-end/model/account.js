var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
 
var AccountSchema   = new Schema({
    local            : {
        username        : String,
        password     : String,
        token        : String
    },
    
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    
    isActive: Boolean

});
 
module.exports = mongoose.model('Account', AccountSchema);