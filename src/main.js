import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import { routes } from "./routes"
import axios from "axios"

// 通过Vue.use  使用这个路由
Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd6774888403aqsjiu.wilddogio.com/'

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
  render: h => h(App)
})
