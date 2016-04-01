var express = require('express');
var router = express.Router();
var path = require('path');
var Hero = require('../models/heroes.js');

router.get('/heroes', function(req, res){
  People.find({}, function(err,data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});


router.post('/heroes', function(req, res){
    var addedHero = new Hero({
      "alias" : req.body.alias,
      "first_name" : req.body.first_name,
      "last_name" : req.body.last_name,
      "power_name" : req.body.power_name
    });

    addedHero.save(function(err, data){
      if(err){
        console.log(err);
      }
      res.send(data);
    });
});

router.get('/*', function(req,res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '../public/', file));
});


//making it public
module.exports = router;
