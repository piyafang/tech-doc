#启动
  1. C:\Program Files\MongoDB 2.6 Standard\bin  启动cmd
  2. 输入 mongod --dbpath=D:\Mongodb\data 按回车键
  3.c盘
  命令窗体中输入 mongo --host=127.0.0.1 或者 mongo 按回车键

  5. use   数据库名称   切换进入数据库
     show dbs 查看数据库
     db.数据库名字.insert({key：value}); 插入数据
     db.dropDatabase()  删除数据库
     db.shutdownServer
     dp.piyafang.help();
     db.数据库名字.count();
     db.数据库名字.drop(); 删除
     show collections();
     多个文档插入，用数据里面包json
     db.worker.find();  查看

     for(var i=0;i<5;i++){
      db.worker.insert({name:'pyf',age:6});
    }


    db.数据库名字.updata({ });   更新覆盖
    db.数据库名字.updata({name: 'pyf'},{$set:{age:7}},{multi:true});  设置
    db.数据库名字.updata({name: 'pyf'},{$inc:{age:7}},{multi:true});   自增7
    db.数据库名字.updata({name: 'pyf'},{$inc:{age:7}},{upsert:true});   插入

    删除
        db.数据库名字.find('查询条件'，{name:1,_id:0}).pretty();
        db.数据库名字.remove({name: 'pyf'},{justOne: true});

        db.数据库名字.findOne(); 只查询集合下的第一条数据
        db.数据库名字.find({name: {$gt:30}});
        db.数据库名字.find({_id: ObjectId('sjdhjshfaksfh')});   通过ID查询
        db.数据库名字.find({name:/\d+/});   正则查找
        db.数据库名字.find({name:/^pyf/});   正则查找  以什么开头
        db.数据库名字.find({$or：[{name:'pyf'},{name:'zf'}]);   多条件
