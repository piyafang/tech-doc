var http = require('http');  //超文本传输协议
var url = require('url');

var server = http.createServer(function(req,res){
    // res.end('haha');
    // var urlstr = req.url;
    // console.log(urlstr);
    var urlobj = url.parse(req.url,true);  //true  表示把字符串转化为对象
    // console.log(urlobj);
    // console.log(req.method);
    // console.log(req.headers);
    req.on('data',function(chunk){
        console.log(chunk);
    })
    res.writeHead(200,{name:'pyf'});
    res.write('world');
    res.end();
});
server.listen(8080);
