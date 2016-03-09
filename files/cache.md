#cache
    last-Modified  最后修改时间  客户端发给服务器
    if-Modified-since



#h5离线缓存
1. cache.appcache 文件
  CACHE MANIFEST
  #version 1.0
  #需要缓存的文件
  CACHE:
    ./js/angular.js

  #不需要缓存的文件
  NETWORK:

  #无法访问的页面
  FALLBACK:
  404.html

2. html

  #避免缓存
  <iframe  src="./index.html" marginheight="0" marginwidth="0" frameborder="0" width="0" height="0" scrolling="0"></iframe>

  #缓存页面
  <html manifest="./cache.appcache"></html>

3. js
  applicationCache.addEventListener('updateready',function(){
      location.href = "advertising.html";
  },false)
