#websocket  

WebSocket浏览器自带的h5对象
http://school.zhufengpeixun.cn/course/explore

http://ju.outofmemory.cn/entry/34317



安装python2.0版本
  https://www.python.org/
framework4.0以上
  http://www.microsoft.com/zh-cn/download/details.aspx?id=30653


1. npm install ws
2. server.js
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

3. html中
  <script>
      var socket= new WebSocket('ws://localhost:8080/');
      socket.onopen =function(){
        socket.onsend('hello server')
      }
      socket.onmessage = function(){

      }
  </script>



#socket.io
  http://school.zhufengpeixun.cn/course/42/learn#lesson/400s

  它会自动根据浏览器从WebSocket、AJAX长轮询、Iframe流等等各种方式中选择最佳的方式来实现网络实时应用，非常方便和人性化，而且支持的浏览器最低达IE5.5。

  (80端口可省略)
1. npm install socket.io


只有配合express才能响应html


#########
  node  inspector   调试

  forver  pm2

  npm install supervisor  http://www.cnblogs.com/pigtail/archive/2013/01/08/2851056.html




  ArrayBuffer转数组
          socket.on('message',function(msg){
              console.log(toString(msg));
          });
          function toString(buf) {
              return String.fromCharCode.apply(null, new Uint8Array(buf));
          }







  hahah
