var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
//  res.sendFile ('./public/home.html');
  res.send('respond with a route');
});



module.exports = router;
