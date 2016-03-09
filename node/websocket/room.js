var express = require('express');
var path = require('path');
var app = express();
app.use(function(req,res,next){
    console.log(req.url);
    next();
});
app.use(express.static(__dirname));
// app.get("*",function(req,res){
//     res.sendFile(path.join(__dirname,'room.html'));
// });
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection',function(socket){
    var currentRoom ;
    socket.on('message',function(msg){
        if(currentRoom)
          io.socket.in(currentRoom).emit('message', 'nice game');
            // socket.broadcast.to(currentRoom).emit('message', 'nice game');
        else
          io.socket.emit('message', 'nice game');
            // socket.broadcast.emit('message', 'nice game');
    });

    socket.on('join',function(room){
        currentRoom = room;
        socket.join(room);//进入某个房间
    });

});
server.listen(80);
