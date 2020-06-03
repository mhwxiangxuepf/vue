关于MintUI使用及其原理，js组件，css组件；

1. 关于使用 Mint-UI
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
2. 原理
	为什么叫 mt-button;
	1. Vue.use(MintUI) 把所有的组件注册为全局组件了；
	2. 全局组件，在工程里 定义个 各个组件 都可以 引用；
3. js组件 css组件	