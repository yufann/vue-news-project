<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <!-- 定义的导航NavView组件 -->
    <NavView v-show="navState"></NavView>
    <!-- 定义的内容HomeView组件 -->
    <!-- <HomeView></HomeView> -->

    <!-- 定义切换的动画 -->
    <transition name="slide-down">
      <!-- keep-alive表示当数据都加载到本地后，加载动画loading自动不执行 -->
      <keep-alive>
        <!-- 三个组件配合router-link实现路由，最后三个组件都在router-view里面显示 -->
        <router-view></router-view>
      </keep-alive>
    </transition>

    <FooterView></FooterView>
  </div>
</template>

<script>

  /* 将Nav.vue导入进来 */
  import NavView from './components/Nav.vue'
  // import HomeView from './components/Home.vue'
  import FooterView from './components/Fooetr.vue'

  import {mapGetters,mapActions} from 'vuex'

  export default{
    computed:mapGetters([
      'navState',
      'loading'
    ]),
    watch:{
      $route(to,from){
        if (to.path=='/user-info') {
          /* 1.当路由为user-info时，开始dispatch发起通知,到达actions */
          this.$store.dispatch('navHide');
        }else{
          this.$store.dispatch('navShow');
        }
      }
    },
    components:{
      NavView,
      FooterView
    }
  }
</script>

<style media="screen">
  @import "./assets/css/index.css";
  /* 定义切换时的动画 */
  .slide-down-enter-active,
  .slide-down-leave-avtive{
    transition: .4s all ease;
    opacity: 0.2;
    transform: translate3d(0,6em,0);
  }
  .slide-down-enter,
  .slide-down-leave{
    opacity: 1;
    transform: translate3d(0,6em,0);
  }
</style>
