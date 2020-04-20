	---《ES6学习笔记之 this 详解》

关于ES6学习笔记之 this 详解

1. 普通没带箭头；
	var obj = {
	            x: 0,
	            f1: function () {
	                console.log(this.x);
	            }
	        }
	var f1 = obj.f1;
	var x = 1;

	obj.f1(); //0
	f1(); //1


	1. 先明确 声明的 变量 属于谁的；
		1. var obj ; 属于 script；
		2. var f1 ; 属于 script;
		3. var x； 属于 script；
	2. 明确 this 在哪个 作用域
		1. console.log(this.x);  作用域 属于 f1 方法体；
		2. 如果是 这样：
		console.log({this.x});
		则 属于log 的方法体吧； ？？
	3. 明确 this 的作用域 被指向的 变量 或者 匿名（没有指向）， 被谁调用；

		
	1. 看点；
		1. 看点1： 看 this 所在的方法体 {} 赋值给的变量 f1 ;
		2. 看点2： 看 f1 被 哪个 调用执行；
			1. obj.f1(),  这是被 obj 调用； 故this 是指 obj;
			2. f1() , 是被 script 调用； 故 this 是指 script;

2. 带箭头 （主要看其，最近的 function大括号,还是没有，则是属于script全局的）
	1. 例子1
	function Timer(){
	    this.s1 = 0;
	    this.s2 = 0;
	    //箭头函数
	    setInterval(() => this.s1++, 1000); // this 是 Timer;
	    /**

		1. 箭头函数中，this 对象的指向是固定的；
		2. 实际是因为箭头函数根本没有自己的 this ；
		3. 导致内部的 this 就是外层 function 代码块的 this; 
		4. 故，箭头 this ，最近大括号是 Timer；
	    */
	    //普通函数
	    setInterval(function (){
	        this.s2++;
	    }, 1000);

	    /**
	    1. 普通函数有this;
	    2. this 所在 最近大括号 匿名 function{},属于setInterval(),底层是window 调用； 
	    3. 故，this 是 window;


	    */
	}
	var timer = new Timer();
	setTimeout(() => console.log('s1: ', timer.s1), 3100);  //s1:  3
	setTimeout(() => console.log('s2: ',timer.s2), 3100);   //s2:  0	

	2. 例子2
        var name = 'window';
        var A = {
            name : 'A',
            show: () => {
                console.log(this.name); //箭头本身的大括号不用看，直接看A层的大括号，没有其他函数包裹（比如function{}）,故再指向外层，是script;
            }
        }
        A.show();　　//window
    3. 例子3
		var name = 'window';
        var A = {
            name: 'A',
            show: function() {
                var s = () => console.log(this.name); //箭头函数所在的作用域是在 show 函数内，show 是普通函数，有自己的 this;
                return s;
            }
        }
        var show = A.show();
        show(); //A
        var B = {
            name: B
        }
        show.call(B);   //A
        show.call();    //A   