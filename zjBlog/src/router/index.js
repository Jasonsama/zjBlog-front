import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/App'
// import HelloWorld from '@/components/HelloWorld'
import Article from '@/components/Article/Article'
import Articles from '@/components/Articles/Articles'
import About from '@/components/About/About'
import Index from '@/components/Index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: Index
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
    // {
    //   path: '/hello-world',
    //   name: '示例',
    //   component: HelloWorld
    // },
    {
      path: '/articles',
      name: '文章列表',
      component: Articles
    },
    {
      path: '/about',
      name: '关于',
      component: About
    },
    {
      path: '/article/:id',
      name: '文章',
      component: Article
    }
  ]
})
