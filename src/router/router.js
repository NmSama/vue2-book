import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home.vue'
import ShoppingCart from '../ShoppingCart.vue'
import Categories from '../Categories.vue'
import Me from '../Me.vue'
import BookDetail from '../BookDetail.vue'
import Main from '../Main.vue'
import MoreBook from '../MoreBook.vue'
import Fictions from '../components/Fictions.vue'

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
        {name: 'Home', path: 'home', component: Home},
        {name: 'Categories', path:'categories', component: Categories,
          children:[
            {name: 'Fictions', path:'fictions', component: Fictions}
          ]
        },
        {name: 'ShoppingCart', path:'shopping-cart', component: ShoppingCart},
        {name: 'Me', path:'me', component: Me},
        {name: 'MoreBook', path: 'more-book', component: MoreBook}
      ]
    },
    {name: 'BookDetail', path: '/book-detail', component: BookDetail}
  ]
})
