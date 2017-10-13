var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var userSchema = new mongoose.Schema({
    user:String,
    psw:String
});
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User',userSchema,'user');