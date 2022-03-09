<template>
    <div>
        <div style="width:200px;height:80px">
            <router-link  to="/BPlog" style="text-decoration:none;color:black;padding:20px;top:20px;position:relative"><i class="el-icon-arrow-left" style="font-size:20px"></i><span style="font-size:20px;" >返回</span> </router-link>
        </div>
        <div id="ziliao">
            <el-tag>产品基础信息</el-tag>
            <div class="dd">
              <el-descriptions column='1'>
                <el-descriptions-item label="产品编号">{{productData.p_id}}</el-descriptions-item>
                <el-descriptions-item label="产品名称">{{productData.p_name}}</el-descriptions-item>
                <el-descriptions-item label="上架时间">{{productData.p_startDay}}</el-descriptions-item>
                <el-descriptions-item label="下架时间">{{productData.p_endDay}}</el-descriptions-item>
              </el-descriptions>
            </div>
            <el-tag>产品修改情况</el-tag>
            <el-table
              :data="changeData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="c_date"
                align="center"
                label="修改时间"
                width="300">
              </el-table-column>
              <el-table-column
                prop="c_log"
                align="center"
                label="修改内容"
                width="600">
              </el-table-column>
              <el-table-column
                prop="c_per"
                width="300"
                align="center"
                label="修改人员">
              </el-table-column>
              <el-table-column
                prop="c_agr"
                width="300"
                align="center"
                label="审核人员">
              </el-table-column>
            </el-table>
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
          address: '183.129.147.43'
        },
        changeData: [{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率和产品编排流程',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        },{
          c_date:'2022/2/22    15:03',
          c_log:'修改了定期利率',
          c_per:'lililic',
          c_agr:'lililia'
        }]
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