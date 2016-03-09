#express
    模板解析，静态文件服务，中间件，路由控制等
    1.npm install express

        本质上是一个监听函数
        中间件是处理Http请求的通用函数，用来分析数据，完成特定任务。next调用下一个中间件或路由函数。有顺序
    2.var express = require('express');
        var app = express();

    //next 函数，下一个

    3.使用，
        app.use(function(req,res,next){
            res.setHeader('Content-type','text/html;charset=utf-8');
            console.log(use);
                //req.host
                //req.path
            next(); //表示可以往下执行，过滤网,中间件，每个中间件有终止请求的权利，即不调next函数
         });

         //静态文件服务器，__dirname作为根目录来访问url上的相对路径的文件
         app.use(express.static(__dirname));

    4.设路由
        app.get('/',function(req,res){
            res.end('/');
        })
        app.get('/reg',function(req,res){
            res.end('注册');
        })
        app.all('/login',function(req,res){
            res.end('登录');
        })
        app.all('*',function(req,res){
            res.end('404');
        })

    4.监听
        这个
            var http  = require('http');
            var server = http.createServer(app);
            server.listen(8080);

        或这个  app.listen(8080);





第三方模块
    body-parser
    multer   API变化较频繁
    express-session
    cookie-session    把session放在客户端

    res.redirect('/index.html')  重定向
    res.render('reg',{})  直接渲染页面
