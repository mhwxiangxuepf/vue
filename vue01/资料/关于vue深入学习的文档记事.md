v4-09 
1. npm CDN 安装vue-router 区别；
1. 前端路由和后端路由及#号作用；
1. 后端路由：所有超链接URL，对应服务器
上对应的资源，jsp,css,js,png；
2. 前端路由： 对于单页面应用程序来说，
主要通过URL中的hash（#号）来实现
不同页面之间的切换，同时，hash特点：
HTTP请求中不会包含hash相关的内容；所以
单页面程序中的页面跳转主要用hash实现；
3.
www.baidu.com#/reg  #号后面都叫hash;
类似a标签的锚点，就是用 # ；
3.1 点击时不会切换到新页面；
3.2 点击时只切换不同的组件，这些组件
不会涉及我们页面刷新；

4. webpack Vue.use 说明；
4.1 use就是注册xxx；
手动安装组件；



v6-09  区分webpack中导入vue和普通网页使用script		-18
 
 
 	在网页中用script 导入Vue包 和 import导入Vue包是不同的；
 	1. import 导入的vue 包 是功能不全的； 只提供 runtime-only 方式

 	包的查找规则
 	1. 找 node_modules
 	2. 在 node_modules 里 找对应的 vue 文件夹
 	3. 在 vue 文件夹中，找 package.json 包配置文件；
 	4. 在package.json 中 找一个 main属性；

 	1. 执行 vue.runtime.common.js 文件 则向外暴露 Vue；
 	2. 则其他js,则可以 import Vue from 'vue'

 	1. 要导入 vue.js 包；
 	2. 
 	import Vue from '../nodules/vue/dist/vue.js'
 	这个才是最完全的；

16
 	第2种方式
 	webpack.config.js
 	resolve: {
 	alias{ //修改 vue 被导入的包的路径
 	"vue$": 'vue/dist/vue.js'

 	}
 }


v6-10  在vue中结合render函数渲染指定的组件到容器中	--12


	1. login组件
	2. 注册组件到 vue;

	在runtime-only方式下，注册组件失败；
	怎么在runtime-only 怎么渲染组件； //@
	1. 定义一个 login.vue 文件

	2. 把login.vue 渲染到 页面里；
		1. 
		import login from './login.vue'

		2. 还需要 一个 loader 去识别vue文件；
		cnpm i vue-loader vue-template-compliler -D

		test: .vue use: 'vue-loader'

		3. 
		render: function(el){ 
			return el(login)
		}
		4. 只能用render注册组件，而不是components;

v6-11 	webpack结合vue使用的总结		-05

	关于总结：webpack中如何使用 vue //@
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


v6-12 	export default 和 export 的使用方	--18

	关于组件中定义数据； //@
	1. export default;
	export default {
		data(){
			return {}
		},
		methods: {}
	}

	关于Node导出导入，ES6导出导入； //@
	1. module.exports = {}
	这是 Node 中向外暴露成员的形式；类似java的修饰符吧；
	2. ES6 中导入 模块 import
	3. export default 和 export 向外暴露成员；

	4. node 中 使用 
	var xx = require() 导入模块
	使用
	module.exports 和 exports 暴露成员；

	5. 在一个模块中，即是一个js文件， export default 只允许向外暴露一次


06
	测试
	1. test.js 中 暴露一个对象
	export default {}
	2. main.js 中引入 这个test.js 文件
	import m1 from './test.js'

	console.log(m1)
	3. 输出 ok；


10
	关于export  //@
	export var title = '小星行啊ing'
	1. 在一个模块中，即是一个js文件， export default 只允许向外暴露一次
	2. 在一个模块中，可以同时使用 export 和 export default
	3. 接收
	import m222,{title} from './test.js'  //且title名字不能自定义；
	console.log(title)
	4. 这种叫 按需导出；

	5. 可以使用别名
	import m22,{title as title123,content} from ''


v6-13 	结合webpack使用vue-router -17

03
	关于 建立 App 组件 并使用； //@
	1. 建 app 组件
	2. 导入 app 组件 在main.js
	import app from './App.vue'

	var vm = new Vue({
		el: '#app',
		render: c => c(app)
		})
	3. 安装 vue-router
	cnpm i vue-router -S

	4. 
	import VueRouter from 'vue-router'

	5. 手动安装 vuerouter
	Vue.use(VueRouter)

	6.
	var router = new VueRouter({

		routes: [

		]

		})

11
	关于 A组件 G组件 没在 app上显示；	 //@	
	1. render 会把 el 指定的容器中 所有的内容都 清空；所以不要把 router-view 直接写在 el 所控制的元素中；
	2. 而是放在 app.vue 上；


v6-14 结合webpack实现children子路由 -06


	关于 组件里的子组件； //@
	1. 
	{
		path: '/account',
		component: account,
		children: [
			{ path: 'login', component: login } , 
			{ path: 'register', component: register }
		]
	}

   2. 
   account 组件里 要放入 router-view 用来放他的子组件；


v6-15  组件中style标签lang属性和scoped属性的介绍  -06

	关于 组件 的样式，scoped属性(私有作用域)；
	<style scoped> </style>
	1. 
	在 login 组件 写样式
	div {} 结果 作用 所有组件；
	2.
	scoped 则只是 login 组件变红；

	关于 lang 属性； //@
	1. 
	<style lang= "scss"></style>


v6-16  router.js使用 -02

	1. 定义 router.js
	最后要暴露对象；

	2. main.js 引入 router.js;


v7-01 scoped属性选择器的实现原理  -03
	
	scoped 属性是通过什么方式解决作用域呢；
	1. 右键查看，发现
	div[data-v-5453567]{}属性选择器；
	2. 故 scoped 会给最外层的 div 设置一个属性


v7-02 Mint-UI中按钮组件的使用 -13
	
	关于 bootstrap 和 MintUI 区别
	1. bootstap 是代码 片段，可以直接拿来用的；

	关于使用 Mint-UI
	1. 
	cnpm i mint-ui -S
	2.
	import Vue from 'vue'
	import MintUI from 'mint-ui'
	import 'mint-ui/lib/style.css'
	Vue.use(MintUI)

	3. 部分引用
	import { Cell , Checklist } from 'mint-ui'
	Vue.component( Cell.name, Cell );
	Vue.component( Checklist.name, Checklist );



13
	全局安装后，css组件 可以直接拿来用；

	为什么叫 mt-button;
	1. Vue.use(MintUI) 把所有的组件注册为全局组件了；
	2. 全局组件，在工程里 定义个 各个组件 都可以 引用；

	关于 mintui 中 使用 bootstrap.css 让提示信息有个图标； //@
	1. 安装 bootstrap 
	cnpm i bootstrap@3 -S
	2. 
	import 'bootstrap/dist/css/bootstrap.css'
	3. 进入 bootstrap 官网 组件 - 字体图标，然后选择使用；
		this.toastInstanse = Toast({
          message: "这是消息",
          iconClass: "glyphicon glyphicon-euro" ,//设置 图标，且使用bootstrap图标
        

        })
	



