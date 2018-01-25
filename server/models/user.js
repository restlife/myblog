/**
 * Created by Administrator on 2018/1/15.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "uid":Number,
  "userName":String,
  "userPwd":String,
});

module.exports = mongoose.model("Users",userSchema);
