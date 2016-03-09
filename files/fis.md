#组件化

#fis3  工程构建工具
    http://fex.baidu.com/fis-site/#download-sec
    npm install -g fis

    http://fis.baidu.com/fis3/docs/beginning/intro.html

#JDF   京东前端开发集成解决方案

#Jello    jello release -mopd output  打包编译版本压缩 产出文件夹
          jello release livereload
          jello serever -p 8081   指定端口
  jello-jsp
  jello-velocity
  jello  release -w  编译  --help
  jello server open/start/stop
#widget  组件化
#后端JSP模板语言

#highcharts
http://www.hcharts.cn/index.php



*******
#项目构建
  1. 安装 npm install -g fis3
     升级  npm update -g fis3

  2．进入项目根目录
    fis3 release -d <path>
    fis3 release -h 获取更多参数

  3.fis3 inspect 来查看文件命中属性的情况

  解决端口占用：
    fis3 server start -p 3000端口号

  4. md5加密
    fis.match('*.{js,css,png}', {
      useHash: true
    });

  5. 浏览器自动刷新
    fis3 release -wL

  6.嵌入资源
    (1) 在html中可以嵌入其他文件内容或者base64编码值，可以在资源定位的基础上，给资源加 ?__inline 参数来标记资源嵌入需求。
    eg.  <link rel="stylesheet" type="text/css" href="demo.css?__inline">
         <link rel="import" href="demo.html?__inline">
    (2) JS中嵌入资源
     var img = __inline('images/logo.gif');

      编译后：   
     var img = 'data:image/gif;base64,R0lGODlhDgGBALMAAGBn6eYxLvvy9PnKyfO...Jzna6853wjKc850nPeoYgAgA7';

    (3) 在css中嵌入图片的base64
        .style {
          background: url(images/logo.gif?__inline);
        }

  7.在html中声明依赖
    <!--  
      @rquire demo.js
      @require "demo.css"
    -->







    哈哈哈
