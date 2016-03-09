#读文件
    ##readFileSync        同步  有顺序
    ##readFile            异步  
    同步任务执行完，再执行异步任务（异步回调队列）
    fs.readFile('path',{encoding:'utf-8',flag:'r'},function(err,data){

    })

#写文件
    ##writeFileSync
    ##writeFile
    fs.writeFile('path文件路径','追加的内容'，{encoding:'utf-8',flag:'a'},function(err){

    })
    fs.appendFile('path','追加的内容',{encoding:'utf-8''},function(err){

    })

#文件拷贝
    var fs = require('fs');
    fs.readFile('a.jpg',function(err,data){
        if(err){
            console.log(err)
        }else{
            fs.writeFile('b.jpg',data,function(err){
                if(err){
                    console.log(err)
                }
            })
        }
    })


#读文件的步骤
    var fs = require('fs');
    1.open文件
        var fd = fs.openSync('read.txt','r');
        fd 文件描述符，即为一个打开文件的索引(3)，从0开始    ————————stdin  stdout  stderr
                                                                    0       1      2
    2.readSync  读文件                                        
        var buffer = new Buffer(3);   缓存区，是一个数组
            // readSync（fd,buffer,offset,length,position)
            *** position可不给，默认从文件的当前位置（开始位置+上一次读取位置）开始读取
        fs.readSync（fd,buffer,0,3,3); 可读多次
        console.log(buffer.toString());
    3.closeSync  关闭释放文件
        fs.closeSync(fd);


#写文件的步骤
    var fs = require('fs');
    1.open文件
        var fd = fs.open('read.txt','w',function(err,fd){
            ***fs.write(fd,buffer,offset,length,position,callback);
            var buffer = new Buffer('哈哈霍霍');
            fs.write(fd,buffer,6,6,0,function(err,bytesWritten,buff){
                console.log('成功写入'+bytesWritten+'字节');
                下一步写入，可放在此回调中
            })
        });

#copy文件
    var fs = require('fs');
    function　copy(src,dest){
        var buff = new Buffer(8*1024);
        var srcFd = fs.openSync(src,'r');
        var destFd = fs.openSync(dest,'w');
        var readSoFar = 0;
        var writeSoFar = 0;

        do{
            var readByties = fs.readSync(srcFd,buff,0,buff.length,readSoFar); readByties可能与buff.length不一致
            fs.writeSync(destFd,buff,0,readByties,writeSoFar);
            readSoFar+=readByties;
            writeSoFar+=readByties;
        }while{
            readByties == buff.length;  当读满8K时，继续循环
        }

        fs.closeSync(srcFd);
        fs.closeSync(destFd);
    }


#操作目录
    var fs = require('fs');

    1.创建目录 0666八进制表示方法，6表示可读可写可执行权限
        /**
         * d   rwx rwx rwx
         * r read 读取     4
         * w write 写入    2
         * x  execute 执行 1
         * 所有者
         * 所属组
         * 其它人
         * 7  6  3
         */

        fs.mkdir('test',0666,function(err){
            if(err){
                console.log(err);
            }
        })

        创建前需保证父目录存在，否则会报错（一级一级）

    2.读取目录
        fs.readdir('test文件夹名',function(err,files){
            if(err){
                console.log(err);
            }else{
                console.log(files);
            }
        })

    3.查看一个文件目录或详情
    /**
     * size 文件大小
     * atime access time 最后一次访问时间
     * mtime modify time 最后一次修改时间
     * ctime create time
     * birthtime  创建的时间
     */
        fs.stat('test',function(err,stat){
            console.log(stat);
        })


    4.判断一个文件是否存在
        fs.exists('test/file1',function(exists){
            console.log(exists);  返回true或false
        })

    5.从相对路径获取绝对路径
        fs.realPath('test',function(err,realPath){

        })
    6.重命名
        fs.rename('test','test2',function(){

        })
    7.截断文件
        var path = './msg.txt';
        fs.stat(path,function(err,stat){
            // stat.size
            fs.truncate(path,6,function(err){
                fs.stat(path,function(err,stat2){
                    console.log(stat2.size)
                })
            })
        })


    8.删除空目录
        fs.rmdir('test',function(err){

        })


*******修改权限
        sudo su
        chmod 777 a.txt


#watchfile 监控文件变化
    var fs = require('fs');
    /**
     *
     * @param current 当前的state
     * @param previous 之前的state
     */
    function listener(current,previous){
        if(Date.parse(previous.ctime)==0){
            console.log('文件被创建')
        }else if(Date.parse(current.ctime)==0){
            console.log('文件被删除')
        }else{
            console.log('文件被修改了')
        }
        fs.watchFile('src/index.html',{interval:1000},listener);

    }

#path
    1.normalize 将非标准路径转化为标准路径  path.normalize('路径')

        var fs = require('fs');
        var path = require('path');

    2.join  将多个参数值字符串结合成一个路径字符串  path.join(__dirname,'a','b','..','e')

        mac下面，分隔符为左杠/

    3.resolve  以应用程序根目录为起点，根据参数的值解析出一个绝对路径  /代表盘符根目录，默认代表当前目录
            只是解析字符串，与真实路径是否存在无关
            如果没有下一级目录，返回当前路径
        path.resolve('路径，/代表盘符根目录')

    4.relative 获取两个路径之间的相对路径  path.relative(from,to)
                返回的是在第一个路径里，如何用相对路径，去引用第二个路径
        path.relative(__dirname,'b')

    5.dirname  获取路径所属的目录   path.dirname()
            目录的话   返回上一级目录
            文件      返回文件所属目录

    6.basename  获取一个路径的文件名  
        path.basename('a/b/index.js')  --->index.js
        path.basename('a/b/index.js','.js')  --->index   截掉文件后缀

    7.extname获取文件扩展名    
        path.extname()

    8.sep         路径分隔符          path.sep()
        \     mac,linux下是 /
    9.delimiter   环境变量分隔符       path.delimiter
        ;     linux下是：


var size = fs.statSync(filename).size;  获取文件大小
