关于 从ES6 this 指向，了解this本身就是实参，了解方法本身是一个对象 总结

1. 先明白：方法本身是一个对象 要依附在某一类的环境中 才能编译通过； 剪头函数  依附的类环境是？  只要写出来方法体  必须有其依附的类环境；
2. 
this,fun1(()＝＞{this},this)     都是同一层this

3.
fun2(function {this},this),this     第二  三个指向是同一层

4. 
this;A＝{()=＞{this}};  同一层  但不是指向A

5. 
this; A＝{this;function {this}};2  3指向同一层 都是指向A

6. 
	this; A＝{this;function （this){this}};  第三个this 根本不会有  因为那个位置是形参  而不是实参 (this本身就是实参)
	1. 第三个this是存在的 且与第二个是同级 ，this；＝{this; function ({this}){this}  


7. 
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

8. 遗留问题；
	1. 这个function作用域 可以拿到 这个that
	说明，get{} 作用域，定义的变量，在其内的各层作用域，都可以访问到；