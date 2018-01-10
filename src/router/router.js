import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import ShoppingCart from '../pages/ShoppingCart.vue'
import Categories from '../pages/Categories/Categories.vue'
import Me from '../pages/Me.vue'
import BookDetail from '../pages/BookDetail.vue'
import Main from '../pages/Main.vue'
import MoreBook from '../pages/MoreBook.vue'
import Fictions from '../pages/Categories/children/FictionList.vue'

//使用路由实例插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',//.router-link-active默认值改为active
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      children:[
        //地址为空时跳转home页面
        {path: '',redirect: '/home'},
        {name: 'Home', path: '/home', component: Home},
        {name: 'Categories', path:'/categories', component: Categories,
          children:[
            {name: 'Fictions', path:'fictions/:id', component: Fictions}
          ]
        },
        {name: 'ShoppingCart', path:'/shopping-cart', component: ShoppingCart},
        {name: 'Me', path:'/me', component: Me}
      ]
    },
    {name: 'BookDetail', path: '/book-detail', component: BookDetail},
    {name: 'MoreBook', path: '/more-book', component: MoreBook}
  ]
})
