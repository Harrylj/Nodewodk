
var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express lijian now' ,name:"marico",layout:'pcatlayout'});
});

router.get('/abc', function(req, res) {
  res.send('hello world居然是写在这里');
});
router.get('/app', function(req, res) {
  res.render('pcat', { title: 'Express lijian app' ,name:"app"});
});


peact = function(req,res){
	res.send("The time is" + new Date().toString());
}

router.get('/peact',peact)



exports.index = function(req, res){
  res.render('index',{title:"PCAT",name:"marico"});
};
exports.pcat=function(req,res){
	res.render('pcat',{title:'PCAT',name:"marico",_layoutFile: 'pcatlayout'})
}



module.exports = router;

