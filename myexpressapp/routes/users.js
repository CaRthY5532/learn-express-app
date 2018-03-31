var express = require('express');
var router = express.Router();
//var json = express.json();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res) {
  res.send(req.body.username + ' is added successfully');
});

module.exports = router;
