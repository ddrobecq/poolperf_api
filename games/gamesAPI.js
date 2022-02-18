const gamesdb = require ('./gamesdb.js');
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

/* PROCEED POST for saving data after a game */
router.post("/", jsonParser, function(req, res) {
  console.log ("insert game posted : ", req.body);
 
  gamesdb.create (JSON.parse (req.body.player1), JSON.parse(req.body.player2)).then (function (result) {
    console.log (result);
    res.send (result);
  }).catch (function (err){
    res.status(500).json({err});
    console.log (err);
  });  
});


module.exports = router;
