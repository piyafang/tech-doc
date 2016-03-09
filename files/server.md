#tcp   传输控制协议，是一个可靠的面向连接传输层协议 (udp)
    数据从一台计算机传到另一台计算机，内置机制保证了丢包率不高，可控制速度，对字符编码完全无知
    三次握手建立连接发射数据，四次退出
    会话过程中，双方都提供一个套接字 socket，实现客户端和服务器端的链接

     var net = require('net');
     var server = net.createServer(function(socket){
         console,log(socket.address());
         socket.setEncoding('utf-8');
         socket.on('data',function(chunk){
             console.log(chunk);
             socket.write(chunk);
         })
         socket.on('end',function(){
             console.log(end);
         })
         socket.on('close',function(){
             console.log(close);
             socket.destroy();
         })
    })

    server.listen(8080,'0.0.0.0',function(){
        console.log('started');
    })

    cmd ===> telnet  或xshell

#httpserver
    统一资源定位器（url）location              统一定位标识符（uri） identify

    1.创建请求响应
        var http = require('http');  //超文本传输协议

        var server = http.createServer(function(require,response){
            // res.end('haha');
            // var urlstr = req.url;
            // console.log(urlstr);
            var urlobj = url.parse(req.url,true);  //true  表示把字符串转化为对象
            console.log(urlobj);
            console.log(req.method);   GET/POST
            req.headers   请求头

            请求体
            req.on('data',function(chunk){

            })

            res.setHeader()
            res.setHeader('Content-Type','text/html"charset=utf-8')

            res.writehead(200,{name:'pyaf',age:'18','Content-Type':'text/html"charset=utf-8'})
            res.statusCode = 404  状态码
            res.write('hello')
        });
        server.listen(8080);



        GET请求没有请求体



        url.parse()  字符串转对象
        url.format() 对象转字符串




#formidable   npm install   
    var formidable = require('formidable');
    var form  = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){

    })
