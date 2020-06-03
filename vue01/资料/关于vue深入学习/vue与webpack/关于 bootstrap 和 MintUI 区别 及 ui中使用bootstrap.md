关于 bootstrap 和 MintUI 区别 及 ui中使用bootstrap
1. 区别
	1. bootstap 是代码 片段，可以直接拿来用的；

2. 关于 mintui 中 使用 bootstrap.css 让提示信息有个图标
	1. 安装 bootstrap 
	cnpm i bootstrap@3 -S
	2. 
	import 'bootstrap/dist/css/bootstrap.css'
	3. 进入 bootstrap 官网 组件 - 字体图标，然后选择使用；	

		this.toastInstanse = Toast({
          message: "这是消息",
          iconClass: "glyphicon glyphicon-euro" ,//设置 图标，且使用bootstrap图标
        

        })