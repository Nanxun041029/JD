
/**
 * Created by Administrator on 2017/9/26 0026.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = {
	username:String,
	password:String
};
var user = mongoose.model('user',new Schema(user));

module.exports = user;













// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// var user = {
// 	username:String,
// 	password:String
// }
// var user = mongoose.model('user',new Schema(user));

// module.exports = user;