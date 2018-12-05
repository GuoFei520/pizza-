# pizza-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

#安装路由命令
cnpm install vue-router --save
如果有cnpm就直接运行此命令
否则运行 npm install vue-router --save

#路由跳转
跳转到上一次浏览的页面
this.$router.go(-1);

指定跳转的地址
this.$router.replace('/menu')

指定跳转路由的名字下
this.$router.replace({name:'menulink'})

通过push进行跳转
this.$router.push('/menu')
this.$router.push({name:'menulink'})

#路由独享守卫
beforeRouteEnter (to, from, next) {
            // alert("Hello" + this.name);
            // next();
    next(vm=>{
        alert("Hello" + vm.name);
    })
}
beforeRouteLeave (to, from, next) {
    if(confirm("确定离开吗？")=== true){
        next();
    }else{
        next(false);
    }
}


// 全局守卫
// router.beforeEach((to,from,next)=>{
  // alert('还没有登录，请先登录！');
  // next();

  // 判断store.gettes.isLogin === false
  // console.log(to);
//   if (to.path == '/login' || to.path == '/register') {
//     next();
//   }else {
//     alert('还没有登录，请先登录！');
//     next('/login');
//   }
// })"# pizza-" 
