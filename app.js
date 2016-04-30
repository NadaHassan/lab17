// var http = require("http");
var songs = require('./module');
var express = require('express');
var app = express();

app.get('/module', function (req, res) {
  res.send(songs[Math.floor(Math.random()*songs.length)]);
});

app.listen(3000, function () {
  console.log('Hello World');
});
