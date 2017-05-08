import IndexPage from './App';
import VueRouter from 'vue-router';


var router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: IndexPage,
    // redirect: '/home',
    // children: childrens
  }]
});



// router.beforeEach((to, from, next) => {
//   var isLogin = window.sessionStorage.userId && window.sessionStorage.token;
//
//   if (!isLogin && !to.name.match(/login/)) {
//     next('/wxlogin');
//   } else if (isLogin && to.name.match(/login/)) {
//     next('/');
//   } else {
//     next();
//   }
// });


export default router;
