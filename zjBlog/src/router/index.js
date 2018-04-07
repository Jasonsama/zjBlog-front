import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Articles from '@/components/Articles/Articles'
import About from '@/components/About/About'

import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/示例',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Articles',
      name: '文章',
      component: Articles
    },
    {
      path: '/About',
      name: '关于',
      component: About
    }
  ]
})
