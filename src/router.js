import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Website from './views/Website.vue'
import Technicalsupport from './views/Technicalsupport.vue'
import Raspberrypi from './views/Raspberrypi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/website',
      name: 'website',
      component: Website
    },
    {
      path: '/technicalsupport',
      name: 'technicalsupport',
      component: Technicalsupport
    },
    {
      path: '/raspberrypi',
      name: 'raspberrypi',
      component: Raspberrypi
    }
  ]
})
