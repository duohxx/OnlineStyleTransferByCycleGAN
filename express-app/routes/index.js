var express = require('express');
var router = express.Router();
var gen = require('../uploadImg/vg')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('xxxxxxxxxxxxxxxxxxxxxxxxxx information from index');
});

router.get('/upload', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const {pathImg, name, style} = req.query;
  console.log('path name: ', pathImg)
  if ( typeof(pathImg)=='string' && pathImg  != ''){
    cmd = 'python ./vg/test.py --img_path ' + pathImg + ' --name ' + name + style + '.jpg --style=' + style
    console.log(cmd)
    gen(cmd)
  }
  res.send( name + ' generate finished!');
});


module.exports = router;
