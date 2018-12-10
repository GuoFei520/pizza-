import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import { routes } from "./routes"
import axios from "axios"

import store from "./store/store.js"

// 通过Vue.use  使用这个路由
Vue.use(VueRouter)
// 配置默认根路径
axios.defaults.baseURL = 'https://wd6774888403aqsjiu.wilddogio.com/'

// 配置vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios

// 实例化一个路由
const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   // return{ x:0,y:100 }
  //   // return {selector:'.btn'}
  //   if(savedPosition){
  //     return {savedPosition}
  //   }else {
  //     return{ x:0,y:0 }
  //   }
  // }
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
