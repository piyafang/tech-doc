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
