# vue-news-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


#注意路径问题
在index.js里面，引入的 http://localhost:8081 要根据自己的端口号来配置
```



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

-----------------------------------------------------------------------------------------------------------

项目思路：
vue防新闻客户端实例：
	1.拿到静态页面，直接用vue边布局边写
	2.这里面的数据用的是假数据
	3.这里没有用任何的UI组件，所有的UI页面都是由切图完成的


项目需要的模块：
	vuex
	vue-router
	axios
	style-loader
	css-loader
	..........
--------------------------------------
1.启动一个vue新项目 vue-news-project
		vue init webpack-simple vue-news-project
		cd vue-news-project
		cnpm install
		npm run dev

2.项目细节：
	1.assets	————放置静态资源	css img js等
	2.在index.js里面头部信息直接拿过来使用，或者编写头部信息
	3.想在vue的项目中引入css,需要下载style-loader,css-loader模块,并在webpack.config.js里面进行配置
		下载：cnpm install style-loader,css-loader -D
		配置：
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'  //这里必须要写全，不能和vue1.0一样简写
			}

	4.下载并配置好之后，可引入全局css或js,js插件等，(有的在main.js里面引入，有的小插件可在index.js中引入)
	5.将页面组件化————Nav.vue, Home.vue, Footer.vue............
		components里面是放每个组件的地方
		定义一个NavView组件(Nav.vue)，定义的方法前面有讲过
		定义一个........................................

	6.编写组件之间的路由
		下载：cnpm install vue-router -D
		1.nav导航栏点击时的路由
			路由的编写<router-link></router-link>
			router-link默认会生成一个a标签，要想其变成一个li标签，则在上面加上tag="li"属性
			<router-link to='/home' tag="li"></router-link>
		2.点击中间导航部分，路由切换，这时中间部分改变，所以这时中间部分要用router-link与router-view配合使用
		3.使用路由，在main.js里面引入并且使用vue-router
			import VueRouter from 'vue-router'
			Vue.use(VueRouter);
		4.生成路由，这里在router.config.js里进行路由的配置生成
			这里遵循路由配置的四个步骤
			注意：在进行第3步生成路由实例的时候，名称不要用错
			const router=new VueRouter({
				mode:'history',//切换路径模式，变成history模式,不然路径为/#/home
				scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
				routes:路由具体的配置
			});
		5.在编写‘我的’页面时,需要头部的导航消失，
			这里用vuex来实现，用vuex来管理组件不同的状态(这里就是nav导航是否需要出现/隐藏)
			下载vuex：cnpm install vuex -D
			新建store文件夹
				|--store
					|--index.js
					|--actions.js
					|--mutations.js
					|--getters.js
					|--types.js

		6.我们这里需要一个变量来控制navViwe导航栏组件的显示或者隐藏
			而我们触发导航栏显示或者隐藏的dispath动作是：当切换到/user-info路由的时候，
			NavView导航栏组件隐藏，当切换到其他路由的时候，NavView导航栏组件显示
			在这里我们用watch监听路由的变化$route()，当路由切换时，才执行$route()函数
				watch:{
		      $route(){
		        alert(1);
		      }
		    }
			$route有两个参数，to表示路由切换到哪里去，from：表示路由从哪里来
			to/from的path属性，表示具体的路由值
			如：/home——>/follow
				watch:{
		      $route(to,from){
		        console.log(to,from);
		        console.log(to.path,from.path);	//follow,home
		      }
		    }

9.做加载Loading动画



8.组件内点击获取数据,进行交互
	需要用到交互axios：可以进行配置
	下载axios：cnpm install axios -D
	导入 import axios from 'axios'
	注意，这里的axios不可以使用：Vue.use(axios);

	axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
	具体更多配置看手册
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

		配置默认post头部信息：
		  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

		配置请求的根路径：
		  axios.defaults.baseURL='http://localhost:8082/';

		把axios对象挂到Vue实例上面，其他页面在使用axios的时候直接  this.$http就可以了：
		  Vue.prototype.$http = axios

		 axios请求数据：
			 mounted(){
				 this.fetchData();
			 },
			 methods:{
				 fetchData(){
					 var _this=this;
					 this.$http.get('src/data/follow.data').then(function(res){
						 _this.arrList=res.data;
					 }).catch(function(err){
						 console.log(err);
					 });
				 }
			 }
