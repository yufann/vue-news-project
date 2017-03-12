import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store'
import axios from 'axios'
import Loading from './components/loading'
import Filters from './filters'
//console.log(Filters);

//将自定义的过滤器导入方法：Vue.filter(名字，函数)
//这里用ES6语法进行导入
Object.keys(Filters).forEach((key)=>{
  Vue.filter(key,Filters[key]);
});

Vue.use(VueRouter);
Vue.use(Loading);
/* 3.生成路由实例 */
const router=new VueRouter({
  mode:'history',//切换路径模式，变成history模式,不然路径为/#/home
  scrollBehavior:()=>({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    y:0
  }),
  // 注意这里的名称
  routes
});
require('./assets/css/base.css');   //这样引入统一的称为全局引入


//关于axios的一些配置
/*
  当我们发起数据请求或者是页面加载请求数据的时候(request)，loading动画就开始存在，
  当数据返回的时候(response)，loading动画就应该消失
 */
 axios.interceptors.request.use(function (config) {  //配置发送请求的信息
   store.dispatch('showLoading');
   return config;
 }, function (error) {
   return Promise.reject(error);
 });

 axios.interceptors.response.use(function (response) { //配置请求回来的信息
   store.dispatch('hideLoading');
   return response;
 }, function (error) {
   return Promise.reject(error);
 });

/* 把axios对象挂到Vue实例上面，其他组件在使用axios的时候直接  this.$http就可以了 */
 Vue.prototype.$http = axios


new Vue({
  /* 4.最后挂到vue上 */
  router,
  /* 把store里面的数据都挂到vue实例上面 */
  store,
  el: '#app',
  render: h => h(App)
})
