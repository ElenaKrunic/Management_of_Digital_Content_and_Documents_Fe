import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import ArticleResult from '../views/search/ArticleResult.vue'
import SearchSimpleArticleQuery from '../views/search/SearchSimpleArticleQuery.vue'
import Login from '../views/login/Login.vue'
import RegisterBuyer from '../views/register/RegisterBuyer.vue'
import RegisterSeller from '../views/register/RegisterSeller.vue'
import Logout from '../views/logout/Logout.vue'
import AddArticle from '../views/article/AddArticle.vue'
import Store from '../views/store/Store.vue'
import ArticleDetails from '../views/article/ArticleDetails.vue'
import UpdateArticle from '../views/article/UpdateArticle.vue'
import ArticleItem from '../views/article/ArticleItem.vue'
import ShoppingCart from '../views/cart/ShoppingCart.vue'
import MyErrands from '../views/errand/MyErrands.vue'
import ErrandDetails from '../views/errand/ErrandDetails.vue'
import ErrandItem from '../views/errand/ErrandItem.vue'
import SearchSimpleErrandQuery from '../views/search/SearchSimpleErrandQuery'
import ErrandResult from '../views/search/ErrandResult.vue'
import SearchRangeArticleQuery from '../views/search/SearchRangeArticleQuery.vue'
import SearchRangeErrandQuery from '../views/search/SearchRangeErrandQuery.vue'
import ChangeBuyer from '../views/user/ChangeBuyer.vue'
import ChangeSeller from '../views/user/ChangeSeller.vue'
import IndexArticle from '../views/index/IndexArticle.vue'
import User from '../views/user/User.vue'
import AllUsers from '../views/user/AllUsers.vue'
import UserDetails from '../views/user/UserDetails.vue'
import SelectSearchType from '../views/search/SelectSearchType.vue'
import SearchBoolArticleQuery from '../views/search/SearchBoolArticleQuery.vue'
import SearchBoolErrandQuery from '../views/search/SearchBoolErrandQuery.vue'
import AllErrands from '../views/errand/AllErrands.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articleResult',
    name: 'ArticleResult',
    component: ArticleResult
  },
  {
    path: '/SearchSimpleArticleQuery',
    name: 'SearchSimpleArticleQuery',
    component: SearchSimpleArticleQuery
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
  },
  {
    name: 'Logout',
    path: '/logout',
    component: Logout
},
{
  name: 'AddArticle',
  path: '/addArticle',
  component: AddArticle
},
{
  name: 'Store',
  path: '/store',
  component: Store
},
{
  name: 'ArticleDetails',
  path: '/articleDetails/:id',
  component: ArticleDetails
},
{
  name: 'UpdateArticle',
  path: '/updateArticle/:id',
  component: UpdateArticle
},
{
  name: 'ArticleItem',
  path: '/articleItem',
  component: ArticleItem
},
{
  name: 'ShoppingCart',
  path: '/cart',
  component: ShoppingCart
},
{
  name: 'MyErrands',
  path: '/myErrands',
  component: MyErrands
},
{
  name: 'ErrandItem',
  path: '/errandItem',
  component: ErrandItem
},
{
  name: 'ErrandDetails',
  path: '/errandDetails/:id',
  component: ErrandDetails
},
{
  name: 'SearchSimpleErrandQuery',
  path: '/searchSimpleErrandQuery',
  component: SearchSimpleErrandQuery
},
{
  name: 'ErrandResult',
  path: '/errandResult',
  component: ErrandResult
},
{
  name: 'SearchRangeArticleQuery',
  path: '/searchRangeArticleQuery',
  component: SearchRangeArticleQuery
},
{
  name: 'SearchRangeErrandQuery',
  path: '/searchRangeErrandQuery',
  component: SearchRangeErrandQuery
},
{
  name: 'ChangeBuyer',
  path: '/changeBuyer',
  component: ChangeBuyer
},
{
  name: 'ChangeSeller',
  path: '/changeSeller',
  component: ChangeSeller
},
{
  name: 'IndexArticle',
  path: '/indexArticle',
  component: IndexArticle
},
{
  name: 'User',
  path: '/user',
  component: User
},
{
  name: 'AllUsers',
  path: '/allUsers',
  component: AllUsers
},
{
  name: 'UserDetails',
  path: '/userDetails/:id',
  component: UserDetails
},
{
  name: 'SelectSearchType',
  path: '/selectSearchType',
  component: SelectSearchType
},
{
  name: 'SearchBoolArticleQuery',
  path: '/searchBoolArticleQuery',
  component: SearchBoolArticleQuery
},
{
  name: 'SearchBoolErrandQuery',
  path: '/searchBoolErrandQuery',
  component: SearchBoolErrandQuery
},
{
  name: 'AllErrands',
  path: '/allErrands',
  component: AllErrands
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*
router.beforeEach((to, from, next) => {

  const token = localStorage.getItem('token')

  if(to.name === 'RegisterBuyer' && !token) next();
 // else if(to.name !== 'Login' && !token) next ({name: 'Login'});
  //else if((to.name === 'Login' || to.name === 'Register') && token) next ({name: 'SearchSimpleQuery'})
  else next();
})
*/
export default router
