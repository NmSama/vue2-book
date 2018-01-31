// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import routes from './router/router'
import VueRouter from 'vue-router'
Vue.prototype.$http = axios

import {CellSwipe,Checklist,Button,Toast,Radio,Header,Actionsheet} from 'mint-ui'
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(Checklist.name, Checklist)
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)
Vue.component(Radio.name, Radio)
Vue.component(Header.name, Header)
Vue.component(Actionsheet.name, Actionsheet)
import 'mint-ui/lib/style.css';
import './sass/rewriteMint.scss'

//使用路由实例插件
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'active'//.router-link-active默认值改为active
});

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
