
var fs = require('fs'); //file systems
fs.readFile('callback.js','utf-8',function(err,data){
  /**
  *接收请求时单线程的，IO操作是多线程的
  *回调函数最后执行，多个回调函数根据速度排序执行
  *readFile 读取文件
  *err 错误对象
  *data 读取到文件内容
  */
  if(++count==2){
    fn();
  }
});
