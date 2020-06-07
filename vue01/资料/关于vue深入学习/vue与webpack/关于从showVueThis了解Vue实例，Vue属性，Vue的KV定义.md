关于从showVueThis了解Vue实例，Vue属性，Vue的KV定义
1. Vue 的 一切 KV，key 都是写入 Vue实例的 做变量名；一般都是要引号的，但可以省略；
比如，data属性  msg: '模板'  ，methods属性  方法名； 都是写入 Vue 实例；
2. 可以在 打印 这个 this 就看到；
3. 比如 使用 $route.path 前 先向当前vue实例注册 路由router； 
    const app = new Vue({
        el:"#app",
        data:{},
        methods:{},
        router
        }