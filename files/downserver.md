var net = require('net');
var fs = require('fs');

    net.createServer(function(socket){
        socket.setEncoding('utf-8');
        socket.on('data',function(chunk){
            fs.createReadStream(chunk).pipe(socket);
        })
    }).listen(8080)
