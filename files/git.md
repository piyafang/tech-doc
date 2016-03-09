0.git config --global user.name "zfpx"    
  git config --global user.email "zfpx@126.com"  
  
1.git init         初始化生成.git文件
  ls -al           查看所有文件，包含隐藏目录
  pwd              查看文件路径
  git add  -A      工作区文件添加到暂存区
  git commit -m"提交信息"       暂存区提交至历史区
  git checkout                历史区检出至工作区
  git rm --cashed +文件名      删除暂存区文件
  rm -rf +文件夹名 删除

2.git remote add origin https://github.com/piyafang/20151121.git
  origin关联远程仓库

  git remote -v  查看远程仓库
  github/zhufengoeixun

3. git remote add mingzi github仓库  拉取远程仓库代码
   git pull mingzi master

4.git push+ 想要提交仓库地址

5.touch +文件名   新建一个文件
  mkdir +文件夹名 新建一个文件夹

6.touch .gitignore 创建忽略文件
  配置说明
  以斜杠“/”开头表示目录；
  以星号“*”通配多个字符；
  以问号“?”通配单个字符
  以方括号“[]”包含单个字符的匹配列表；
  以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；

  .[ab] 任何以a和b结尾的文件
  .css 以js结尾的文件
  *.css 以js结尾的文件
  !index.js 除了index.js都可以忽略
  \!index.js 文件名为!index.js

******

7. 发布博客
  setting  ---> github pages



  npm install cnpm
  cnpm install

  * 临时使用代理
  npm install -g cnpm --registry=http://registry.npm.taobao.org

  * 永久修改代理
  npm config set registry "http://registry.npm.taobao.org"


8. 删除文件            git rm 文件名
   将文件移出git但不删除　　　git rm --cached 文件名


9. 保存项目当前状态但不提交
  git stash
  git stash list  查看
  git stash apply 取出

10. 重命名文件
  git mv old.txt new.txt

11. 修改目录结构
  mkdir src
  git mv *.html src/

  ************
12. 修改提交时间
  git commit -m '-' --data 2099.01.01

13. 取消上一次提交
  git reser --soft HEAD^

14. 撤销文件修改
  git checkout 文件名或*

15. 查看remote信息
  tail .git/config

16. 关联远程库
  git remote add origin 网址


17. 查看文件改动
  git diff app.db

18. 跟踪代码具体作者
  git blame config.rb

19. 新建并进入分支
  git checkout -b 分支名

20. 删除分支
  git branch -d 分支名

21. 推送分支
  git push origin 分支名

22. 合并分支
  ***** 在某一个分支  git merge 分支名

23. 拉取分支
  git fetch origin
