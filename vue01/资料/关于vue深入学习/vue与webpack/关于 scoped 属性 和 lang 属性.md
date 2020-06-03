关于 scoped 属性 和 lang 属性

1. 组件 的样式，scoped属性(私有作用域)
	<style scoped> </style>
	1. 
	在 login 组件 写样式
	div {} 结果 作用 所有组件；
	2.
	scoped 则只是 login 组件变红；

2. 关于 lang 属性； 
	1. 
	<style lang= "scss"></style>

3. scoped 属性是通过什么方式解决作用域呢；
	1. 右键查看，发现
	div[data-v-5453567]{}属性选择器；
	2. 故 scoped 会给最外层的 div 设置一个属性	