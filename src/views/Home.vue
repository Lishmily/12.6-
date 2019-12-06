<template>
  <div class="home">
    <Tab></Tab>
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{item}}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 列表 -->
    <List :list="list"></List>


  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import List from "../components/List.vue";
import axios from "axios"

export default {
  name: "home",
  data(){
    return {
      list:[]
    }
  },
  components: {
    Tab,List
  },
  created(){
    axios.post("/list").then(res=>{
      this.list=res.data;
      console.log(this.list);
      
    })

  }
};
</script>

<style lang="scss" scoped>
	.el-carousel__item h3{
    color:#475669;
    font-size: 16px;
    opacity: 0.75;
    line-height: 150px;
    text-align: center;
    margin: 0;
  }

  	.el-carousel__item:nth-child(2n){
      background-color: #99a9bf;
    }
  	.el-carousel__item:nth-child(2n+1){
      background-color: #d3dce6;
    }

</style>
