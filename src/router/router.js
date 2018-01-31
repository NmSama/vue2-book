import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../pages/Home.vue')), 'home')
const shoppingCart = r => require.ensure([], () => r(require('../pages/ShoppingCart.vue')), 'shoppingCart')
const categories = r => require.ensure([], () => r(require('../pages/Categories/Categories.vue')), 'categories')
const me = r => require.ensure([], () => r(require('../pages/Me/Me.vue')), 'me')
const bookDetail = r => require.ensure([], () => r(require('../pages/BookDetail.vue')), 'bookDetail')
const moreBook = r => require.ensure([], () => r(require('../pages/MoreBook.vue')), 'moreBook')
const fictionList = r => require.ensure([], () => r(require('../pages/Categories/children/FictionList.vue')), 'fictionList')
const setting = r => require.ensure([], () => r(require('../pages/Me/Setting.vue')), 'setting')
const setName = r => require.ensure([], () => r(require('../pages/Me/Children/SetName.vue')), 'setName')

export default[{
  name: 'Main',
  path: '/',
  component: App,
  children:[
    //地址为空时跳转home页面
    {path: '',redirect: '/home'},
    {name: 'Home', path: '/home', component: home},
    {name: 'Categories', path:'/categories', component: categories,
      children:[
        {name: 'Fictions', path:'fictions/:id', component: fictionList}
      ]
    },
    {name: 'ShoppingCart', path:'/shopping-cart', component: shoppingCart},
    {name: 'Me', path:'/me', component: me/*,
      children:[
        {name: 'Setting', path:'setting', component: setting},
        {name: 'SetName',path:'set-name',component: setName},
      ]*/
    },
    {name: 'Setting', path:'/me/setting', component: setting},
    {name: 'SetName',path:'/me/setting/set-name',component: setName},
    {name: 'BookDetail', path: '/book-detail', component: bookDetail},
    {name: 'MoreBook', path: '/more-book', component: moreBook}
  ]
}]
