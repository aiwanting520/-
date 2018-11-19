
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/msite',
      component: MSite,
      meta:{
        FootShow:true,
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        FootShow:true,
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        FootShow:true,
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        FootShow:true,
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
