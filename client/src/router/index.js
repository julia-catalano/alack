import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Analyze from '@/components/Analyze'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'analyze',
      component: Analyze
    },
    {
      path: '/test',
      name: 'test',
      component: HelloWorld
    }
  ]
})
