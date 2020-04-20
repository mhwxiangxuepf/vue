关于vue中scope，slot-scope理解及，了解组件相关的元素；
前提了解
  1. scope 与 slot-scope 是一样的；
  都是映射 slot 元素 中的 自定义属性；

了解组件相关元素：
  1. 主组件或父组件
    1. 子入口标签；
      1. 子入口标签的属性 A ,即是 子组件 props属性中的 A；
    2. 被分发标签（也叫父插槽标签），即是 子入口标签 下的首标签（对应 插槽元素）；一般是 <div></div> <template></template>;

  2. 子组件
    1. 子模板（也叫组件模板），即是是组件的模板；
    2. 子元素，即是组件模板中的元素；
      1. 首子元素，把子组件的模块的首个标签，叫首子元素；
      2. 次子元素
    3. 子插槽元素，即slot元素；
   
    4. 子模型，即是组件模板的 vue实例； 比如 Vue.component()
    5. 主模型/父模型；
    6. 子元素中的vue变量，即是组件模板中的，变量；
      比如 <li v-for="(item, index) in data1">  data1 item index ;
      1. 子元素中的vue变量 可以映射到 子模型中的 data属性，也可以映射到 props 属性；
    7. 子插槽元素中的变量; 比如 item,index ；
    <slot :row="item" :$index="index"></slot>
    8. 子插槽元素中的自定义属性变量；比如 上方的 row;
      1. 被分发标签 <template scope="scope"> scope 映射 slot中所有 自定义属性变量；
        scope:{row:row,$index:$index}
    9. 自定义属性变量（也叫中间变量）
      1. 父向子 传数据，用到中间变量A 传过去；子再用 模型属性 props 接收；
        1. 父数据；
        2. 子入口标签；
        2. 子入口标签定义，中间变量 A ；
        3. 子模型props
      2. 父向子，并结合slot元素显示 ；
        1. 被分发的标签；
        1. scope
        2. slot 元素；
        3. slot 中 自定义属性变量；

  3. 父子通信要点
    1. 父向子； 父向子通信-变量，通过：方法一
      1. 子入口标签，绑定属性 A;
      2. 子元素的变量A，再映射到 模型中 props 属性 A；

    2. 子向父； 子插槽元素 的 v-for 会相当于 放到 父插槽标签上；
      子插槽： <slot name="up" v-for="val in arr" :text="'姓名是：'+val"></slot> 
      父插槽： <div class="tmpl" slot="up"> 相当于把 v-for="val in arr"  放入到 ‘ <div class="tmpl" slot="up">’ 
              </div>
      结果： 父插槽元素 循环多次；
    3. 父向子？（子中的 item 数据 传给中间变量row, 父再用scope获取row ）（其实更准确说法，父向子传数据，因为数据 <p>姓名:{{scope.row.name}}</p> 还只是在子组件中显示 并没有进入 父模型里 ）；被分发标签 中 scope属性的属性值 scopeVal , 即是映射 子插槽元素中的所有自定义属性变量,row;
      1. 怎么映射到其中一个自定义属性变量呢 如下：
          scope.row
      2. 故 scope.row  即是 子的 items



以下实例分析

Vue.component('tb-list', {
  template: '#tb-list',
  props: {    // 父向子传值，子要带这个 props 属性； props里的 data1 指向 父的属性绑定 :data1;
    data1: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }

});


我们注册了一个叫 tb-list 这么一个组件，然后给 tb-list 传递了一个data属性值

 <script id="tb-list" type="text/x-template">
      <ul>
        <li v-for="(item, index) in data1">
          <slot :row="item" :$index="index"></slot>
        </li>
      </ul>
    </script>

以上是 子组件代码


以下 是主组件代码； 我叫 这个主组件 引入子组件的 标签 叫 做 子入口标签
 <tb-list :data1="dataFather">  // 主组件，通过data1 把 主组件 dataFather 传给 子组件 data1; 
    <template scope="scope"> //这个 template 怎解； 这是 内容分发者，要分发的内容；
      <div class="info" :s="JSON.stringify(scope)">
        <p>姓名:{{scope.row.name}}</p>
        <p>年龄: {{scope.row.age}}</p>
        <p>性别: {{scope.row.sex}}</p>
        <p>索引：{{scope.$index}}</p>
      </div>
    </template>
  </tb-list>    

 new Vue({
        el: '#app',
        data() {
          return {
            dataFather: [
              {
                name: 'kongzhi1',
                age: '29',
                sex: 'man'
              }, 
              {
                name: 'kongzhi2',
                age: '30',
                sex: 'woman'
              }
            ]
          }
        },
        methods: {
          
        }
      });  