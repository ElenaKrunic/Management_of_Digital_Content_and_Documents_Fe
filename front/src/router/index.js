import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Search from '../views/search/Search.vue'
import Index from '../views/search/Index.vue'
import Result from '../views/search/Result.vue'
import SearchSimpleQuery from '../views/search/SearchSimpleQuery.vue'
import Indexing from '../views/index/Indexing.vue'
import Login from '../views/login/Login.vue'
import RegisterBuyer from '../views/register/RegisterBuyer.vue'
import RegisterSeller from '../views/register/RegisterSeller.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '/searchSimpleQuery',
    name: 'SearchSimpleQuery',
    component: SearchSimpleQuery
  },
  {
    path: '/indexing',
    name: 'Indexing',
    component: Indexing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registerBuyer',
    name: 'RegisterBuyer',
    component: RegisterBuyer
  },
  {
    path: '/registerSeller',
    name: 'RegisterSeller',
    component: RegisterSeller
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const token = localStorage.getItem('token')

  if(to.name === 'RegisterBuyer' && !token) next();
 // else if(to.name !== 'Login' && !token) next ({name: 'Login'});
  //else if((to.name === 'Login' || to.name === 'Register') && token) next ({name: 'SearchSimpleQuery'})
  else next();
})

export default router
