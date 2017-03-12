<template>
  	<div class="content">
      <!-- 将轮播图拿出来，变成一个组件 -->
  		<SilderView></SilderView>
  	    <div class="newsList">
  	    	<ul>
  	            <li v-for="(items,index) in arrList">
                    <!-- 因为要做字符串连接，而作为属性的时候才能做字符串连接 所以这里为绑定属性:to -->
  	                <router-link :to="'/article/'+items.id">
  	                	<h2>{{index+1}} . {{items.title}}</h2>
  	                    <p>{{items.detail}}</p>
  	                </router-link>
  	            </li>
  	        </ul>
  	    </div>
  	</div>
  </template>
<script>
  /* 将轮播图的组件导出 */
  import SilderView from './Slider.vue'
  export default{
    data(){
      return{
        arrList:[]
      }
    },
    components:{
      SilderView
    },
    mounted(){  //表示文档加载完成，执行里面的函数（这里为发起请求获取数据）
      this.fetchData();
    },
    methods:{
      fetchData(){  //发起请求获取数据
        //console.log(this.$http);
        var _this=this;
        this.$http.get('src/data/index.data').then(function(res){
          //console.log(res.data);
          _this.arrList=res.data;
        }).catch(function(err){
          console.log(err);
        });
      }
    }
  }
</script>
