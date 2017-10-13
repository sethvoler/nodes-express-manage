var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/home', function(req, res, next) {
    //console.log(req.session.user);
  if(req.session.user==undefined){
    res.redirect('/');
  }else{
    res.render('home', {user:req.session.user});
  }
});

// register page
router.get('/register', function(req, res, next) {
  res.render('register', {});
});

//注销
router.get('/logout', function(req, res, next) {
  //req.session.user = undefined;
  req.session.destroy((err)=>{
    if(err){
        console.log(err);
    }else{
        res.redirect('/');
    }
  });
});

module.exports = router;
