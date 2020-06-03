关于 一个 vue 工程的 router 与 routerview 解析 及组件通信；
1. 建立 App 组件 并使用
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
2. 关于 A组件 G组件 没在 app上显示；	
	1. render 会把 el 指定的容器中 所有的内容都 清空；所以不要把 router-view 直接写在 el 所控制的元素中；
	2. 而是放在 app.vue 上；	

3. 使用 router = path / (path+children) + RouterviewOfApp + RouterviewOfCompon;  
	1.  1 个 router = 1 个 routerview = path + path + ...
	2.  1 个 routerview = 1 个 children  = 1个 router
	3. 故
		routerview = router / children ；
		routerview 即是 组件标签；	 

	{
		path: '/account',
		component: account,
		children: [
			{ path: 'login', component: login } , 
			{ path: 'register', component: register }
		]
	}


	export default new Router({
	  routes: [
	    route("/login",'/Login',"Login"),  
	    {
	      path:"/",
	      component: () => import('../pages/Layout'), //重定向之前加载 Layout 组件;
	      redirect:"/index/dashboard",
	      children:[
	        route("/index/dashboard","/Dashboard","Dashboard"), //那这些组件的 <router-view></router-view> 在哪里；
	        route("/item/category",'/item/Category',"Category"),
	        route("/item/brand",'/item/Brand',"Brand"),
	        route("/item/list",'/item/Goods',"Goods"),
	        route("/item/specification",'/item/Specification',"Specification"),
	        route("/user/statistics",'/item/Statistics',"Statistics"),
	        route("/trade/promotion",'/trade/Promotion',"Promotion")
	      ]
	    }	