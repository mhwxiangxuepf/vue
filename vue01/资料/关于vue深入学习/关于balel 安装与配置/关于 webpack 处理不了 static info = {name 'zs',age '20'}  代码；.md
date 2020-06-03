关于 webpack 处理不了 static info = {name: 'zs',age: '20'}  代码；
1. 在webpack 中 默认只能处理 一部分 ES6语法；需要借助 loader;

2. Babel 可以转换为低级语法；
	cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
	 cnpm i @babel/core -D

	第二套
	cnpm i babel-preset-env babel-preset-stage-0 -D

	cnpm install --save-dev @babel/plugin-proposal-class-properties
cnpm install babel-cli -g
3. webpack 配置文件  添加匹配规则
 test: /\.js$/, use: 'babel-loader' ,exclude: /node_modules/

 	1. 排除node_modules 的包；原因 只需转义我们自己写的js 即可；否则会消耗资源；

4. 在项目的 根目录 中 新建一个 .balelrc 的 Babel 配置文件；要符合json规范；
	{
		"presets": ["env","stage-0"],
		"plugins": ["transform-runtime"]

	}

	If you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.