<template>
  <div class="content">
    <div class="newsList">
      <ul style="margin-top:30px;">
        <li v-for="(items,index) in arrList">
          <a href="">
            <h2>{{items.title}}</h2>
            <p>{{items.detail}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        arrList:[]
      }
    },
    mounted(){
      this.fetchData();  //文档加载完成，获取数据
    },
    methods:{
      fetchData(){
        var _this=this;
        this.$http.get('src/data/follow.data').then(function(res){
          //console.log(res.data);
          _this.arrList=res.data;
          console.log(arrList)
        }).catch(function(err){
          console.log(err);
        });
      }
    }
  }
</script>
