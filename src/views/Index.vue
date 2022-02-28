<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>



<script>
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'
export default {
  name: 'Index',
  components: {Aside,Header},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header{
  background: #333;
}
.el-main{
  background-color: #f5f5f5;
  padding-top: 0;
}
</style>
