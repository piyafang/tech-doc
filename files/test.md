http-server   可以直接启动服务器

#测试库
  测试框架：mocha    http://mochajs.org/
  断言库：should  chai  assert(node自带的)   https://github.com/tj/should.js

1. 安装  npm install mocha -g    npm init生成package.json   
    文件名  test  mocha才能识别，同级
    npm install should -g或--save-dev

2. mocha   回车   测试函数-----test目录下的所有语句
  如果自命名  mocha + 文件夹名


#浏览器端测试
mocha init .   会生成一个测试脚本


#测试代码覆盖率
  1. npm install istanbul -g   与mocha 配合很棒
     npm install instanbul --save-dev
  2. istanbul  cover
  3. istanbul cover ./node_modules/mocha/bin/_mocha

#angular单元测试
  1.安装
   npm install -g karma --save-dev
   npm install karma --save-dev

  2. karma 需要一个配置文件    （运行测试用例）  默认测试框架是jasmine
    node.js风格的
    karma init

  3. jasmine  行为驱动开发的测试框架   （编写测试用例）
    http://jasmine.github.io/
    http://jasmine.github.io/1.3

  4. 后缀  .spec.js
  5. npm install angular.mocks   angular-mocks.js
  6. karma start.conf.js

  插件  npm install karma-jasmine --save-dev
       npm install karma-junit-reporter --save-dev


# $httpBackend   //模拟后台服务
# $httpBackend.flush()   //模拟后台返回的响应请求

#测试
  git clone --depth=1 https://github.com/angular/angular-seed.git asss
  下载工程
  git clone --depth=1 https://github.com/angular/angular-seed.git seed
  安装软件
  npm install
  启动服务
  npm start
  http://localhost:8000/app/index.html
  单元测试
  npm test
  集成测试
  npm start
  npm run update-webdriver
  npm run protractor















      哈哈
