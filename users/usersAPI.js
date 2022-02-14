const usersdb = require ('./usersdb.js');
var express = require('express');
var router = express.Router();

// create application/json parser
var bodyParser = require('body-parser');
const { useColors } = require('debug/src/browser');
var jsonParser = bodyParser.json();

/* GET users LISTING */
router.get('/', function(req, res, next) {
  usersdb.getall ().then (function (result) {
    console.log (result);
    res.send (result);
  }).catch (function (err){
    res.status(500).json({err});
    console.log (err);
  });
});

/* GET user info */
router.get('/:id', function(req, res, next) {
  usersdb.getone (req.params.id).then (function (result) {
    console.log (result);
    res.send (result);
  }).catch (function (err){
    res.status(500).json({err});
    console.log (err);
  });
});

/* POST user info TO CREATE A NEW user */
router.post("/", jsonParser, function(req, res) {
  console.log ("insert user posted : ", req.body);

  usersdb.create (req.body).then (function (result) {
    console.log (result);
    res.send (result);
  }).catch (function (err){
    res.status(500).json({err});
    console.log (err);
  });  
});

/* PUT user info TO UPDATE A user */
router.put("/", jsonParser, function(req, res) {
  console.log ("update user posted : ", req.body);

  usersdb.update (req.body).then (function (result) {
    console.log (result);
    res.send (result);
  }).catch (function (err){
    res.status(500).json({err});
    console.log (err);
  });  
});

module.exports = router;
