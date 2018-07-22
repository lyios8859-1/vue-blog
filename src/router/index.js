import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Article from '@/views/article/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/article',// 文章页
      name: 'Article',
      component: Article
    },{
      path: '*', // 首页
      name: 'Index',
      component: Index
    }
  ]
})