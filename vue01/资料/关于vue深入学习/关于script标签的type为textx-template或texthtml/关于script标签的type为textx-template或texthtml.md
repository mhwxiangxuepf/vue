 		---《script标签的type为text/x-template或text/html》

 <script type="text/x-template" id="anchored-heading-template">
        <h1>小老弟，有事吗？</h1>
    </script>

其实 和 以下 写法是一样效果(只要vue组件里 定义了映射 template: '#anchored-heading-template' )

 <<template id="anchored-heading-template">
        <h1>小老弟，有事吗？</h1>
    </template>

 let anchoredHeading = Vue.component('anchored-heading', {
            template: '#anchored-heading-template',
            props: ['content']
        })  


