import Home from "./components/Home"
import Menu from "./components/Menu"
import Admin from "./components/Admin"
import About from "./components/about/About"
import Login from "./components/Login"
import Register from "./components/Register"

// 二级路由
import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"


// 三级路由
import Phone from "./components/about/contact/Phone"
import PersonName from "./components/about/contact/PersonName"

// 引入路由文件路径
export const routes = [
    { path: '/', name: "homelink", components: {
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    } },
    { path: '/menu', name: "menulink", component: Menu },
    { path: '/admin', name: "adminlink", component: Admin },
    {
      path: '/about', name: "aboutlink",component: About, children: [
        { path: '/about/contact', name: 'contactlink',redirect: '/about/contact/personname' ,component: Contact,children:[
          {path:'/about/contact/phone',name:'phoneNumber',component:Phone},
          {path:'/about/contact/personname',name:'personName',component:PersonName}
        ] },
        { path: '/about/delivery', name: 'deliverylink', component: Delivery },
        { path: '/about/history', name: 'historylink', component: History },
        { path: '/about/orderingGuide', name: 'orderingGuidelink', component: OrderingGuide },
      ]
    },
    { path: '/login', name: "loginlink", component: Login },
    { path: '/register', name: "registerlink", component: Register },
    // 如果匹配不成功 则返回指定的默认路由
    { path: '*', redirect: '/' }
  ]
