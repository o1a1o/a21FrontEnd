<template>
  <el-container style="height: 100%;">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main><router-view style="width:1723px;" /></el-main>
    </el-container>
  </el-container>
</template>



<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'

export default {
  name: 'Index',
  components: {CommonAside,CommonHeader},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0 ;
  width: 1920px;
}

 .el-header{
  background-color: #ffffff;
  height: 106x;
  width: 100%;
  /* border-top: 1px solid grey; */
}
.el-main{
  margin-top:60px ;
  background-color: #ffffff; 
  border-right:1px solid #dddddd;
  width: 1824px;
}
</style>
