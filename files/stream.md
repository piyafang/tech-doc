#流
    1.readFile  writeFile   将文件作为一个整体
    2.read  write   将文件放入缓存区，8K
    3.流 ----是一组有序，是有起点和终点的数据手段。
             网络中传输数据的时候，先将数据转成二进制的字节数据，再经网络传输到达服务器端，服务器再转成对应的文件。
         可读流  xxx.on('data',function(){ }) 
         可写流  write

         socket  可读可写，面向互联网的客户端读写

    只需要一个buffer，节约速度，可控制

    ##可读流   继承了 Readable   EventEmitter

        var fs = require('fs');
        var rs = fs.createReadStream('readme.txt');

        1.open事件
            rs.on('open',function(){
                console.log('文件打开了')
            });
        **rs.setEncoding('utf-8'); //设置编码

        只有监听data事件后，才开始真正读取数据
        2.data事件
            rs.on('data',function(data){
                console.log('next');
                rs.pause();  //暂停流的发射事件，一次只能读64k的文件
                setTimeout(function(){
                    console.log('over');
                    rs.resume(); //重新开始恢复
                })
            });
        3.end事件
            rs.on('end',function(){
                console.log('文件读取完毕')
            });
        4.close事件

        5.error事件
            rs.on('error',function(){
                console.log('err')
            });

    ##写入流
        var fs = require('fs');
        var ws = fs.createWriteStream('./write.txt');
        ws.write('写入的内容');    //有返回值，boolean

        //写入成功触发的事件(缓存区文件已处理完)
        ws.on('drain',function(){

        })


#流实现文件复制
    function copy(src,dest){
        var fs = require('fs');
        var rs = fs.createReadStream(src);
        var ws = fs.createWriteStream(dest);
        fs.on('data',function(data){
            var flag = ws.write(rs);  //有返回值，成功true,失败false
            if(!flag){
                rs.pause();
            }
        })
        //写入成功触发的事件(缓存区文件已处理完)
        ws.on('drain',function(){
            rs.resume();
        })
    }
    copy('a.txt','acopy.txt')

*****======》等同于pipe  源文件.pipe(目标文件)
        function copy(src,dest){
            var rs = fs.createReadStream(src);
            var ws = fs.createWriteStream(dest);
            rs.pipe(ws);
        }

*******Readable
    var Readable = require('stream').Readable;
    var util = require('util');

    util.inherits(Counter,Readable);

    function Counter(){
        Readable.call(this);
        this._max = 10;
        this._pos = 1;
    }
    Counter.prototype._read = function(){
        var i = this._pos++;
        if(i>this._max){
            this.push(null);  //pull null表示结束，触发end事件
        }else{
            this.push(new Buffer(i+""))； //触发data事件
        }
    }

    var counter = new Counter();
    //数据从哪来
    counter.on('data',function(data){
        console.log(data.toString());
    })
    //何时结束
    counter.on('end',function(data){
        console.log(end);
    })
