
var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express lijian now' });
});
router.get('/abc', function(req, res) {
  res.send('hello world居然是写在这里');
});
router.get('/app', function(req, res) {
  res.send('app的写在这里');
});
peact = function(req,res){
	res.send("The time is" + new Date().toString());
}


router.get('/peact',peact)

module.exports = router;

