// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import axios from 'axios'
Vue.prototype.$http = axios

import {CellSwipe,Checklist,Button} from 'mint-ui'
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(Checklist.name, Checklist)
Vue.component(Button.name, Button)
import 'mint-ui/lib/style.css';

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
