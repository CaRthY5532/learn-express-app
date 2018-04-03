var express = require('express');
var router = express.Router();
var user = require('../controllers/usercontroller');
//var json = express.json();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add-user', user.addUser);

//router.post('/add-users', user.addUsers);

router.get('/list-users', user.getUserList);

module.exports = router;
