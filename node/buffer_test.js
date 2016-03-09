Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd){
    var length = sourceEnd-sourceStart>targetBuffer.length-targetStart?targetBuffer.length-targetStart:sourceEnd-sourceStart
    //console.log(length);

for(var i = sourceStart;i<sourceStart+length;i++){
    targetBuffer[targetStart++] = this[i];
}
var src = new Buffer('你好');
var target = new Buffer('哈哈哈哈哈');
src.cp(target,6,0,6)
console.log(target);