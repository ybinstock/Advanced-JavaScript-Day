var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on("connection", function(socket){
  console.log("Connected to Socket!");
  console.log(socket);
});

io.on("disconnect", function(socket){
  console.log("Disconnected");
});

http.listen(3000);