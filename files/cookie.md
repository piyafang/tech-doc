#cookie  是web服务器向浏览器发送的一段ASCII文本，客户端收到cookie，浏览器保存在本地 key = value，
        之后每次客户端向服务器发送请求，都需要把之前发送给它的cookie发回给服务器。

        是普通的header

        存放在客户端，容易被篡改  documnet.cookie='isAdmin=1'  HttpOnly

var http = require('http');
var url = require('url');
http.createServer(function(request,response){
    var urlobj = url.parse(request.url,true);
    var pathname = urlobj.pathname;
    if('./favicon.ico' == pathname){
        return response.end('404');
    }else if(pathname == '/write'){ //写
        response.writeHead(200,{'Content-type':'text/html','Set-Cookie':['name=pyf','age=18']})
        response.setHeader('Set-Cookie','name=pyf');
        response.setHeader('Set-Cookie','age=18');
    }else{ //读
        var cookie = request.header.cookie;
    }
}).listen(8080);


HTTPonly   防止Js操作cookie

querystring.parse(cookie,';')   字符串转对象
querystring.parse(location.query,'&')   字符串转对象


乱码：
    设置请求头，编码与文件编码一致
        response.setHeader('Content-type','text/html;charset=utf-8')



#session
    辨明用户身份，数据一般存储在服务器端；会话需要一个sessionId,服务器端会根据sessionId来获取对应的session
    





















       sdssa
