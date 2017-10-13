var mongoose = require('mongoose');
var User = require('../models/user.model');

exports.create=(req,res,next)=>{
    var data = req.body;
    var user = new User(data);
    if(data.user===''||data.psw===''){
        res.redirect('/register');
    }else{
        user.save()
        .then(data=>{
            res.json(data);
        });
        res.redirect('/home');
    }
}

exports.find=(req,res,next)=>{
    var msg = {user: req.query.user,psw: req.query.psw};
    User.find(msg)
    .then(data=>{
        if(data.length>0){
            req.session.user = data[0].user;
            res.redirect('/home');
        }else{
            res.send('<script>window.location.href="/";alert("用户名或密码错误！请重输！");</script>');
        }
    });
}

exports.remove=(req,res,next)=>{
    var id = req.params.id;//req.param('id');

    User.findByIdAndRemove(id,(err,doc)=>{
        if(err){
            console.log(err);
        }else{
            res.json({msg:'数据删除成功',status:200});
        }
    })
}

exports.update=(req,res,next)=>{
    var id = req.params.id;//req.param('id');

    User.findByIdAndUpdate(id,{$set:req.body},{new:false})
    .then(data=>{
        res.json({msg:'数据修改成功',status:200});
    });
}

exports.remove=(req,res,next)=>{
    var id = req.params.id;//req.param('id');

    User.findByIdAndRemove(id,(err,doc)=>{
        if(err){
            console.log(err);
        }else{
            res.json({msg:'数据删除成功',status:200});
        }
    })
}

exports.list = (req,res,next)=>{
    var page = (req.body.page)?req.body.page:1;
    var limit = (req.body.limit)?req.body.limit:2;

    var queryCondition = {};
    if(req.body.name&&req.body.name.trim().length>0){
        name = req.body.name;
        queryCondition = {"name":new RegExp(name,'i')};
    }

    User.paginate({}, { page: page, limit: limit }, (err, result)=>{
      res.json(result);
    });
}
