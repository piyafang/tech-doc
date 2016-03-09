

*  <a href="http://webpack.github.io/">webpack 官网</a>
*  <a href="http://segmentfault.com/a/1190000002551952">Webpack 入门指迷</a>
*  <a href="https://github.com/petehunt/webpack-howto"> Webpack how to</a>
*  <a href="http://segmentfault.com/a/1190000003499526">基于webpack搭建前端工程解决方案探索</a>
*  <a href="http://www.jianshu.com/p/8adf4c2bfa51">Webpack-dev-server结合后端服务器的热替换配置</a>
*  <a href="https://fakefish.github.io/react-webpack-cookbook/">Webpack 和 React 小书</a>
*  <a href="http://www.w3ctech.com/topic/1513">2015: 前端工具现状</a>


https://github.com/jtHwong/frontend-learn
https://github.com/jtHwong/shares/blob/master/es67workflow/ppt/es67workflow.md


#准备工作
  http://school.zhufengpeixun.cn/course/32

  1.babel     es6 → es5
      安装  npm install babel@5.8.3 -g
      基本命令
        babel  执行转换
        babel -o  指定输出文件
        babel -w  启动监控
        babel -d  指定编译的目录
        babel -s  sourcemap
        babel --help 查看帮助

      babel arrow.js -o arr.es5.js

  2. gulp
    匹配符	说明
    *	匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾
    **	匹配路径中的0个或多个目录及其子目录,需要单独出现，即它左右不能有其他东西了。如果出现在末尾，也能匹配文件。
    ?	匹配文件路径中的一个字符(不会匹配路径分隔符)
    [...]	匹配方括号中出现的字符中的任意一个，当方括号中第一个字符为^或!时，则表示不匹配方括号中出现的其他字符中的任意一个，类似js正则表达式中的用法
    !(pattern|pattern|pattern)	匹配任何与括号中给定的任一模式都不匹配的
    ?(pattern|pattern|pattern)	匹配括号中给定的任一模式0次或1次，类似于js正则中的(pattern|pattern|pattern)?
    +(pattern|pattern|pattern)	匹配括号中给定的任一模式至少1次，类似于js正则中的(pattern|pattern|pattern)+
    *(pattern|pattern|pattern)	匹配括号中给定的任一模式0次或多次，类似于js正则中的(pattern|pattern|pattern)*
    @(pattern|pattern|pattern)	匹配括号中给定的任一模式1次，类似于js正则中的(pattern|pattern|pattern)


    npm  install q
    var Q = require('q');
    gulp.task('one', function() {
      var deferred = Q.defer();

      // 执行异步的操作
      setTimeout(function() {
        deferred.resolve();
      }, 1);
      return deferred.promise;
    });

    gulp.task('two',['one'],function(){
      console.log('two is done');
    });



    插件
      sass　需要安装ruby  http://rubyinstaller.org/downloads/
            gem install sass
            sass -v


  3. yoeman
  http://school.zhufengpeixun.cn/course/41/learn#lesson/398

    npm install -g yo
    mkdir gulpwebapp
     cd gulpwebapp
     npm install -g generator-gulp-webapp
     yo gulp-webapp
     gulp build


     http://www.browsersync.cn/
******
     http://www.browsersync.cn/docs/gulp/

     gulp -T
