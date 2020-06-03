关于js作用域问题--这个function作用域 可以拿到 这个that

1. 
export default {
	
	  name: 'App',
	  data () {
	      return {
	          //定义一个toast实例
	        toastInstanse: null

	      }
	  },

	  methods: {
	  	show(){},

	  	get(){
	  		this.show(); // 第1个this; 指向这个 App 实例；

	  		let _that = this; // 利用 一个临时变量，把this 传入 到function里；
	  		setTimeout(function () {

	  			_that.toastInstanse.close();	

	  			}, 3000 );

	  	问题1：这个function作用域 可以拿到 这个that;当调用这个function时，却是底层另一些对象，比如window;
	  	问题2 如果变成箭头函数，this是指 App，那是不是说调用这个方法是 App呢；
	  	 setTimeout( () => {this} )
	  	 回答问题2 ： 就算是箭头函数，那么调用这个方法，还是底层另一些对象，不过这个this，则是继承外层的this; 故，指向 App; 



	  	}

2. 从以上代码，可以看到：
	1. 这个function作用域 可以拿到 这个that
	说明，get{} 作用域，定义的变量，在其内的各层作用域，都可以访问到；
	2. 而 get作用域，要访问到 同级 data作用域的内容，则是要通过 this母体访问；
	包括 同级show；
	3. that 无法找到声明，就会根据作用域链去上级（上次层）中继承 that