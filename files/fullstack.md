#全栈
  npmjs.org  nodejs.org

#服务器
  IP 地址
  端口号  http 80
          tcp 8080
          ftp 21
#客户端
  发起请求  (浏览器 命令行 app....)

#协议

#chrome://net-internals/#dns 查看chrome缓存
  修改本地Host文件，可更改访问配置

  netstat  查看活动连接,ip端口
  ping  www.baidu.com  查看网址对应iP
#请求
  ##curl -H "name:pyf" -H "age:18" -v http://localhost:8080
    Connected to localhost (127.0.0.1) port 8080 (#0)
      请求
      > GET / HTTP/1.1
      > Host: localhost:8080
      > User-Agent: curl/7.44.0
      > Accept: */*
      > name:pyf
      > age:18

      响应
      < HTTP/1.1 200 OK
      < Date: Sat, 21 Nov 2015 08:01:52 GMT
      < Connection: keep-alive
      < Transfer-Encoding: chunked 分块显示

#响应码
  1XX  请求正在处理中 101
  2XX  成功
  3XX  重定向
  4XX  客户端错误  404请求的资源服务器端不存在
  5XX  服务器错误


url.parse(decodeURIComponent(request.url),true); //true 把query转成对象

#文件类型
  tool.oschina.net/commonstool.oschina.net/commons

  http    var http = require ('http');

  url     var url = require ('url');
  -          url.parse('url',[boolean]);


      作用：作用来转化url字符串,当第二个参数为true时将解析的字符串转化为对象
      urlObj.pathname：请求的路径
      urlObj.query ：查询字符
      urlObj.path | urlObj.href :请求的完整路径
  fs      var fs = require ('fs');  读取文件
      - fs.readFile(path,callback);
      > 作用：异步读取文件

     - fs.readFileSync(path);
     > 作用：同步读取文件
  mime    实现文件类型和内容转换 npm install mime
      - mime.lookup(fileName);
      > - 根据文件名，获取文件的文件类型*content-type*

#服务器node操作
  .break
  .clear
  .exit
  .save cmd.log
  .node cmd.log(导出之前执行的文件在Node里面)

console.trace(); 输出堆栈
throw error();

#global
  未定义直接赋值的变量属于global，但在js文件中声明的变量属于模块本身，不属于全局。
  global === global.global;

  ##__filename 文件名  当前模块的绝对路径
  ##__dirname 文件名  当前模块所在文件夹的绝对路径
  console.log(process) ==> process.platform,.version,.argv,.pid....

#with 指明语句的全局变量
  var obj={name:28};
  with(obj){
    console.log(name);
  }

#各种进程命令repl

  ##命令行参数
    process.
    process.argv.forEach(fucntion(index,arg){
      console.log(index,arg);
      })
  ##获取环境变量的值
    process.env.Path;

  ##stdin 保持进程进行
  process.stdin.on('data',function(){
    process.stdout.write("read",data); //stderr 错误输出，颜色不一样
  });

  ##process.kill(500pid);

  ##process.cwd(); 当前工作目录  = __dirname 不会被改变
    process.chdir('..'); 修改当前工作目录

  ##process.memorymUsage();  查看内存使用量
    rss 常驻内存
    heapTotal 堆的总量
    heapUsed  堆的使用量    单位均为bytes
    > - process.stdout； 标准输出流
    > - process.stdin 标准输入流 process.stdin.on('data',callback); 监听数据输入
    > - process.argv 返回命令行参数数组
    > - process.cwd() 返回执行文件目录
    > - process.chdir() 改变执行文件目录
    > - process.pid(); 当前进程的pid
    > - process.kill(pid); 关闭某个进程(给某个进程信号)
    > - process.memoryUsage();  node当前消耗内存情况
    > - process.nextTick(); 提前事件队列
    
  ##nextTick  *****  ##setImmediate
    //在事件循环的下一个循环中调用callback函数
    //在所有的同步方法执行完后执行此回调
    //nextTick递归调用队列，会在完全执行完后才调用IO操作，就像whlie(true)的死循环

    0.var data=fs.readFileSync('1.txt','utf-8');
    console.log(data);
    1.process.nextTick(say.bind(this,'nextTick'));
    2.setImmediate(function(){ })
    3.setTimeout(say.bind(this,'setTimeout'),0);
    4.var fs = require('fs');
      fs.readFile('1.txt','utf-8',function(err,data){  })

    ***优先级： 同步操作 > nextTick > setImmediate > IO

*******node 内部封装了一个多线程非阻塞的库 uv  version.uv ，以为异步操作做前提

#util
  var util = require('util');
  util.inherits(child,parent);
  util.isArray([]) 判断是否为某种类型  n instanceof Array

*********************
#事件 event  发布订阅模式  观察者模式
  var EventEmitter = require('events').EventEmitter; 旧版本写法;
  var EventEmitter = require('events');
  var util = require ('util');
  girl.addListener('',function(){}) = = girl.on('',function(){})

#更改环境变量，改变链接地址
  var enva = process.env.enva;
  var devurl ='189';
  var onlineurl = '120';
  if(enva == 'dev'){
      var dburl = devurl;
  }else if(enva == 'oneline'){
      var dburl = onlineurl;
  }

  node 中 set env.dev
