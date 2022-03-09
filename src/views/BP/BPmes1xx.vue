<template>
    <div>
        <div style="width:200px;height:80px">
            <router-link  to="/BPmessage" style="text-decoration:none;color:black;padding:20px;top:20px;position:relative"><i class="el-icon-arrow-left" style="font-size:20px"></i><span style="font-size:20px;" @click="goback" >返回</span> </router-link>
        </div>

         <el-descriptions size='medium' class="margin-top"  title="待审批存款产品" :column="2" border>
            <el-descriptions-item label="产品编号">{{mes1.p_id}}</el-descriptions-item>
            <el-descriptions-item label="产品名称">{{mes1.p_name}} </el-descriptions-item>
            <el-descriptions-item label="编排人员">{{mes1.u_id}} </el-descriptions-item>
            <el-descriptions-item label="提交审批日期">{{mes1.p_shenpiT}} </el-descriptions-item>
            <el-descriptions-item label="购买开放日">{{mes1.p_startDay}} </el-descriptions-item>
            <el-descriptions-item label="购买结束日">{{mes1.p_endDay}} </el-descriptions-item>
            <el-descriptions-item label="备注">{{mes1.text}} </el-descriptions-item>
        </el-descriptions>

        <el-tag>流程查看</el-tag>

        <el-card></el-card>
        <div id="bottom_">
            <el-button type="primary" round>审批通过</el-button>
            <el-button type="danger" round>审批不通过</el-button>
        </div>
      
    </div>
</template>

<script>
  export default {
    data() {
      return {
        mes1:{
            p_id:'2132414',
            p_name:'长虹一号82828',
            p_startDay:'2019-02-20',
            p_endDay:'2020-03-18',
            text:'无',
            u_id:'橙子哥',
            p_shenpiT:'2018-09-11',
        }

      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .el-descriptions{
      margin-left: 50px;
      margin-top: 20px;
      font-size: 16px;
  }
  .el-tag,#bottom_,.el-card{
      font-size: 16px;
      margin-top: 50px;
      margin-left: 50px;
  }
</style>