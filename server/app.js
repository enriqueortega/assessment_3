var express = require('express');
var app = express();
var db = require('./modules/db.js');
var index = require('./modules/index.js');
var path = require('path');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 4242));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);

app.listen(app.get('port'), function(){
  console.log('Yo yo yo, we have transmission from port: ', app.get('port'));
});

module.exports = app;
