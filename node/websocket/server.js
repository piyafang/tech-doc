var websocketServer  = require('ws').Server;
var wss = new websocketServer({port:8080});

<!-- 当连接到来时会调用回调函数 -->
wss.on('connection',function(ws){
  <!-- 当收到客户端消息的时候 -->
  ws.on('message',function(message){
    console.log('message');
    <!-- 向客户端发送消息 -->
    ws.send('confirm:'+message);
  })

})
