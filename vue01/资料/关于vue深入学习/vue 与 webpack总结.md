

1. 一个vue工程= render app组件 + router组件

2. router 与 routerview
	1.  1 个 router = 1 个 routerview = path + path + ...
	2.  1 个 routerview = 1 个 children  = 1个 router
	3. 故
		routerview = router / children 	

3. 父子组件  是vue本身+component
	1. vue本身是父；
	2. vue的<template>模板 里 使用的 <组件标签> 是子；

4. 父子 通信  是了解了

5. 同级 子之间通信呢；

关于 node cnpm npm 环境搭建 https://www.jianshu.com/p/13f45e24b1de
1. 下载安装 node.js
node-v12.14.0-x64.msi
2. node系统环境变量path
D:\tools_installs\node12.14.0
3. node -v  测试
4. npm -v  测试安装成功
5. npm root -g  查看包路径
6. 修改包路径 ，先建立好目录；
npm config set prefix "D:\tools\node12.14.0\node_global"
npm config set cache "D:\tools\node12.14.0\node_cache"
7. npm install -g express  安装一个包看看；
8. node 
   require('express')
   解决报错；
9. 添加用户变量path为：D:\tools\node12.14.0\node_global  
10. 新增系统变量NODE_PATH,变量值为
D:\tools\node12.14.0\node_global\node_modules

11. 修改之后关闭CMD窗口，然后重新打开；
12. node
	require('express')
	结果成功了
13. 搭建完成；

关于 npm 镜像
1. npm install -g nrm
2. nrm ls  // 查看镜像列表
3. nrm use taobao 
4. nrm add r_name r_url  //在nrm添加自己的镜像地址
5. nrm del r_name 
6. nrm test r_name //测试镜像的相应速度
	
关于 webpack 环境搭建；
1. 其他知识
	1. 删除 node_modules 后 ，可以 npm install 则重新安装；


1. npm i webpack -g // webpack是前端的一个项目构建工具，基于Node.js开发；
	然，就是玩 webpack.config.js 文件；
	//  ES6语法太高级了，还需要webpack转译一下,比如import语法；
    还要执行一个命令
    webpack ./src/main.js ./dist/bundle.js
    用webpack处理一下main文件，转成bundle.js(自定义命名）
2. npm i webpack-dev-server -D  // 这个工具，来实现自动打包编译的功能,可以npm run dev 
	cnpm i webpack -D
	cnpm i html-webpack-plugin -D  //这插件可以在内存中生成html页面；
3. webpack 处理不了 static info = {name: 'zs',age: '20'}  代码；
	Babel 可以转换为低级语法；

4. 以上，则基本完成一个 webpack 工程搭建；
	主要目录结构；
	1. 	node_modules
	2. package.json
	3. webpack.config.js
5. 视频 v5-10 有webpack工程搭建流程；
	1. 手建目录 dist src
	2. src下手建目录 js css images ; 手建文件 index.html main.js
	3. npm init -y
		则有 node_modules , package.json	
	4. 命令 webpack ./src/main.js ./dist/bundle.js
	5. 手建 webpack.config.js	
		1. 配置main.js 的入口，出口；	
	6. npm i webpack-dev-server -D
		1. 
		package.json{ "dev":"webpack-dev-server" } 通过这样运行 webpack-dev-server脚本
		2. 给当前项目开发环境再安装 webpack ;
		cnpm i webpack -D	
		3. 则 npm run dev 项目运行在 8080 端口；
		再访问 localhost:8080/src/  则是访问 index ;
		4. 页面 html 要引入的 项目根路径的 bundle.js
		<script src="/bundle.js"></script>
	7. cnpm i html-webpack-plugin -D ；
		1. var htmlWebpackPlugin = require('html-webpack-plugin') ;

关于webpack.config.js
1. require
	1. path
	2. webpack
	3. html-webpack-plugin
1. entry
2. output
3. devServer
4. plugins
5. module		

关于 vue-cli 与 webpack 环境搭建
快速上手 vue-cli
0. npm install -g vue-cli
1. idea  new--module--static web 
	vue-cli-demo

2. vue init webpack

	ESLint no
	test no
	Nightwatch no
3. 完成一个 vue 工程搭建

4. node_modules 目录删除后，可以执行 npm install  重新下载依赖；



关于 VueTemplate 模板组件，在VueStudy2；
1. 总结了 很多vue知识； 







































