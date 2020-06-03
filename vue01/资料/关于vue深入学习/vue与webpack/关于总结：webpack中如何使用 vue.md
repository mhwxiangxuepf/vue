	关于总结：webpack中如何使用 vue 
	1. 安装 vue
	2. .vue文件的loader;
	3. main.js 导入 vue 模块 类库；
	4. 定义 .vue 文件
	5. import 导入 这个vue文件组件
	6. 
	创建vue 实例
	var vm = new Vue((
		el:'#app',
		render: c => c(login) //会渲染到 id 是app的div;
		))

	7. 在页面中 创建一个 id 为app 的 div 元素，作为我们 vm 实例要控制的区域；