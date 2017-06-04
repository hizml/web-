import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import User from '../components/user.vue'
import Contact from '../components/contact.vue'
import Cart from '../components/cart.vue'
import Category from '../components/category.vue'
import Detail from '../components/detail.vue'
import List from '../components/list.vue'

Vue.use(Router)

export default new Router({
  routes: [{ // 布置路由
    path: '/',
    name: '首页',
    component: Home
  }, {
    path: '/user',
    name: '会员',
    component: User
  }, {
    path: '/contact',
    name: '客服',
    component: Contact
  }, {
    path: '/cart',
    name: '购物车',
    component: Cart
  }, {
    path: '/category',
    name: '目录',
    component: Category
  }, {
    path: '/detail',
    name: '详情',
    component: Detail
  }, {
    path: '/list',
    name: '列表',
    component: List
  }]
})
