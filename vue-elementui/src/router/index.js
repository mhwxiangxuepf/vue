import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myCom00 from '@/myVue/myComponent00'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //
    // },
    {
      path: '/',
      name: 'myCom00',
      component:myCom00,
    }

  ]
})
