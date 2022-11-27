var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/server', function(req, res, next) {
  res.setHeader('Access-Controll-ALlow-Origin', '*');

  res.send('xxxxxxxxxxxxxxxxxxxxxxxxxx');
});

module.exports = router;
