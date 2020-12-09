import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import index from '@/page/index'
import about from '@/page/about'
import production from '@/page/production'
import contact from '@/page/contact'
import develop from '@/page/develop'
import service from '@/page/service'
import firecenter from '@/page/firecenter'
import leader from '@/page/leader'
import yeaer from '@/page/yeaer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/components/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/components/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/page/about',
      name: 'about',
      component: about
    },
    {
      path: '/page/production',
      name: 'production',
      component: production
    },
    {
      path: '/page/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/page/develop',
      name: 'develop',
      component: develop
    },
    {
      path: '/page/service',
      name: 'service',
      component: service
    },
    {
      path: '/page/firecenter',
      name: 'firecenter',
      component: firecenter
    },
    {
      path: '/page/leader',
      name: 'leader',
      component: leader
    },
    {
      path: '/page/yeaer',
      name: 'yeaer',
      component: yeaer
    }
  ]
})
