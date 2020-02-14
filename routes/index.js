var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WOOOOOW' });
});
router.get('/wow/', function(req, res, next){
	res.send(`wow wow wow ${req.query.name}`);
});

function coolRouter(req, res, next){
	res.send(`You're so cool!!!!`);
	};
router.get('/cool/', coolRouter);

router.get('/users/cool/', function(req, res, next){
	res.send(`You're so cool`);
});
module.exports = router;
