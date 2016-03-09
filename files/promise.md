#promise
  异步编程操作

var defer  = function(){
  var pending = []; //待执行的后续任务
  var value; //当前函数的返回值
  var promise = {};
  promise.then = function(callback){
    if(pending){
      pending.push(callback);
    }else{
      callback(value);
    }
  }
  return {
    promise: promise,
    resolve: function(_value){
      if(pending){
        value = _value;
        pending.forEach(function(cbFn){
          cbFn(value);
          })
      }
    }
  }

}

var defer = defer();
var promise = defer.promise;
promise.then(function(data){
  console.log(data)
});

setTimeout(function(){
  defer.resolve(100)
},1000);















haha
