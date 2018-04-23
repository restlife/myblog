var express = require('express');
var router = express.Router();
var User = require('./../models/user');

var mongoose = require('mongoose');
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/myblog');

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/checklogin", function (req,res,next) {
  if(req.cookies.userName){
    res.json({
      status:'0',
      msg:'',
      result:req.cookies.userName || ''
    });
  }else{
    res.json({
      status:'1',
      msg:'未登录',
      result:''
    });
  }
});
router.post("/logout",function(req,res,next){
  res.cookie("userName", "", {
    path: '/',
    maxAge: -1
  });
  res.json({
    status:"0",
    msg:'',
    result:''
  })
})
router.post("/login", function (req,res,next) {
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function (err,doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      if (doc) {

        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        //req.session.user = doc;
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.userName
          }
        });
      }
    }
  });
});
module.exports = router;
