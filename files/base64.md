#base64编码:
   把3个8位字节（3x8）转化为 4个6位 (4x6)

var buffer = new Buffer;
readfile读出来的buffer
十六进制转十进制  parseInt('neirong',16)
十进制转二进制  (...).toString(2)
二进制转十进制   parseInt('neirong',2)   二进制0-63之间   63=2^6-1


#图片转base64
    var fs = require('fs');
    fs.readFile('a.jpg',function(err,data){
        if(err){
            conosle.log(data)
        }else{
            var hhh = parseInt(data,16).toString(2);
            var hhhzzz = parseInt(hhh,2);
            fs.writeFile('222.jpg',hhhzzz,function(err){

            })
        }

        console.log(hhhzzz);
    })
