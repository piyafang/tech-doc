/**
  *创建一个服务器
*/
var http = require ('http');
var url = require ('url');
/**
  *@param request 请求对象
  *@param response 响应对象
*/

var menus = [{name:'豆豉烤鱼',unit:'条'},{name:'东坡肘子',unit:'只'},{name:'水煮牛肉',unit:'盘'},{name:'米饭',unit:'碗'},{name:'汇源果汁',unit:'瓶'}];
var makeMenu = function(){
    var str = '<ul>';
    menus.forEach(function(menu){
        str+=('<li><a href="/'+menu.name+'?unit='+menu.unit+'">'+menu.name+'</a></li>');
    })
    str+= '</ul>';
    return str;
}
//Can't set headers after they are sent.
//如果header已经发给客户端，那么就不能再设置
var person = function(request,response){
    var urlObj = url.parse(decodeURIComponent(request.url),true);//true表示把查询字符串转成对象
    console.log(urlObj);
    response.setHeader('Content-Type','text/html;charset=utf-8');
    if(urlObj.pathname == '/'){
        response.end(makeMenu());
    }else{
        response.end('客官，一'+urlObj.query.unit+urlObj.pathname.slice(1));
    }
}

var server = http.createServer(person);
server.listen(8080,'localhost',function(){
  console.log('start');
});
