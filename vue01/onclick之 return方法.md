JAVASCRIPT在事件中调用函数时用return返回值实际上是对window.event.returnvalue进行设置。

而该值决定了当前操作是否继续。 
当返回的是true时，将继续操作。 
当返回是false时，将中断操作。

而直接执行时（不用return）。将不会对window.event.returnvalue进行设置 
所以会默认地继续执行操作

详细说明如下：
例如：
当在 <a href="abc.htm" onclick="return add_onclick()">Open</a> 中 
如果函数 add_onclick() 返回 true, 那么 页面就会打开 abc.htm 
否则, (返回 false), 那么页面不会跳转到 abc.htm, 只会执行你的 add_onclick() 函数里的内容. (add_onclick函数中控制页面转到 abc.htm除外

) 
而 <a href="abc.htm" onclick="add_onclick()">Open</a> 
不管 add_onclick() 返回什么值, 都会在执行完 add_onclick 后打开页面 abc.htm


另外补充：
onclick事件时就相当于onclick="return true/false"
例：
function check()
{
if(obj.value=="" )
   {
     window.alert("不能为空！");
     obj.focus();
     return false;
   }
     return true;
}

调用方法返回true时才提交表单，反之则不提交，这是submit按钮