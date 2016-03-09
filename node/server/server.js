
/**
  *创建一个服务器
*/
var http = require ('http');
var url = require ('url');
/**
  *@param request 请求对象
  *@param response 响应对象
*/

var menus = ['哈哈哈','呵呵呵','嘻嘻嘻'];
var makeMenu =function(){
  var str = '<ul>';
  menus.forEach(function(menu){
    str+=('<li>'+menu+'</li>');
  })
  str+= '</ul>'
  return  str;
}


var person = function(request,response) {
  response.setHeader('Content-Type', 'text/html;charset=utf-8');
  if (url == '/') {
    response.end(makeMenu);
  }
  // console.log(request.method);
  // console.log(request.url);
  // console.log(request.headers);
  //
  // response.statusCode = 404;
  // response.setHeader('name','piyafang');
  // response.write('nihao');
  // response.write('hello'); //向客户端发送数据
  // response.write('world');
  // response.end();
}

var server = http.createServer(person);
server.listen(8080,'localhost',function(){
  console.log('start');
});
