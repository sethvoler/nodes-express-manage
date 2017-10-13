var express = require('express');
var router = express.Router();
var dataCtrl = require('../controllers/user.controller');

router.post('/registerAction',dataCtrl.create);
router.get('/loginAction',dataCtrl.find);
router.post('/data/:id',dataCtrl.update);
router.delete('/data/:id',dataCtrl.remove);
router.post('/list',dataCtrl.list);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.all('/loginAction', function(req, res, next) {
//   var selectData = (db,callback)=>{
//     var conn = db.collection('newtest');
//     var data = {user: req.query.user,psw: req.query.psw};
//     conn.find(data).toArray((err,results)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }else{
//                 callback(results);
//             }
//         });
//   };

//   MongoClient.connect(DB_CONN_STR,(err,db)=>{
//     if(err){
//         console.log(err);
//     }else{
//         selectData(db,(results)=>{
//             console.log(results);
//             if(results.length>0){
//                 req.session.user = results[0].user;
//                 res.redirect('/home');
//             }else{
//                 res.send('<script>window.location.href="/";alert("用户名或密码错误！请重输！");</script>');
//             }
//         });
//     };
//   });
// });

//router.post('/registerAction', )
// router.post('/registerAction', function(req, res, next) {
//     var insertData = (db,callback)=>{
//         var conn = db.collection('newtest');
//         var data = {user: req.body.user,psw: req.body.psw};
//         if(data.user===''||data.psw===''){
//             res.redirect('/register');
//         }else{
//             conn.insert(data,(err,results)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }else{
//                     callback(results);
//                 }
//             });
//         }
//     };
//   MongoClient.connect(DB_CONN_STR,(err,db)=>{
//     if(err){
//         console.log(err);
//     }else{
//         insertData(db,(results)=>{
//             res.redirect('/home');
//         });
//     }
//   });
// });

module.exports = router;
