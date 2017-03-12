<template>
  <div  class="content">
    <div class="newsList">
      <ul style="margin-top:30px;">
        <li v-for="(items,index) in arrList">
          <a href="">
            <h2>{{index+1}} . {{items.title}}</h2>
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
  }
</script>
