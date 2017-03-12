/* 生成路由示例 */

/* 1.准备组件 */
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import Userinfo from './components/Userinfo.vue'
import Article from './components/Article.vue'

/* 2.配置路由 */
export default[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Column
  },
  {
    path:'/user-info',
    component:Userinfo
  },
  {
    path:'/article/:id',
    component:Article
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'*', //配置默认路由
    redirect:'/home'  //对路由进行重定向
  }
]
