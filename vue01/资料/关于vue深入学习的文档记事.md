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

二、BUG
1. vue.js:634 [Vue warn]: <transition> can only be used on a single element. Use <transition-group> for lists.
