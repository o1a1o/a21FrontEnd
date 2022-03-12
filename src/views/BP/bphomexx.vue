<template>
    <div>
        <div style="width:200px;height:80px">
            <router-link  to="/BPhome" style="text-decoration:none;color:black;padding:20px;top:20px;position:relative"><i class="el-icon-arrow-left" style="font-size:20px"></i><span style="font-size:20px;" @click="goback" >返回</span> </router-link>
        </div>
        <div id="ziliao">
            <el-tag>产品基础信息</el-tag>
            <div class="dd">
              <el-descriptions column='2'>
                <el-descriptions-item label="产品编号">{{productData.p_id}}</el-descriptions-item>
                <el-descriptions-item label="产品名称">{{productData.p_name}}</el-descriptions-item>
                <el-descriptions-item label="产品类型">{{productData.p_type}}</el-descriptions-item>
                <el-descriptions-item label="起存金额">{{productData.p_leastPrice}}</el-descriptions-item>
                <el-descriptions-item label="初始库存">{{productData.p_stock}}</el-descriptions-item>
                <el-descriptions-item label="剩余库存">{{productData.p_restStock}}</el-descriptions-item>
                <el-descriptions-item label="风险等级">{{productData.p_risk}}</el-descriptions-item>
                <el-descriptions-item label="产品单价">{{productData.p_unitPrice}}</el-descriptions-item>
                <el-descriptions-item label="购买开放时间">{{productData.p_startDay}}</el-descriptions-item>
                <el-descriptions-item label="购买结束时间">{{productData.p_endDay}}</el-descriptions-item>
              </el-descriptions>
            </div>
            <el-tag style="width:270px">产品销售情况与利率统计</el-tag>
            <div></div>
            <el-tag>产品购买流程</el-tag>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        productData: {
            p_id:'121828178',
            p_name:'理财3号',
            p_startDay:'2017-02-01',
            p_endDay:'2021-08-06',
            address: '183.129.147.43',
            p_type:'定活两便存款',
            p_leastPrice:'3000',
            p_stock:'1000000',
            p_restStock:'293931',
            p_risk:'低',
            p_unitPrice:'1.00',
        },

      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  #ziliao{
    margin-left: 50px;
  }
  #ziliao .el-tag{
    margin-top: 50px;
    margin-bottom: 30px;
    width:150px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size:20px
  }
  .el-tag{
    font-size: 30px;
  }
  .el-descriptions{
    font-size: 20px;
    margin-left: 20px;
    line-height: 1.5;
  }

</style>