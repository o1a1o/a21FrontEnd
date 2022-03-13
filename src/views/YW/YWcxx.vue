<template>
  <div>
    <el-card>
      <div style="width:200px;height:80px">
          <router-link  to="/YWcustomer" style="text-decoration:none;color:black;padding:20px;top:20px;position:relative"><i class="el-icon-arrow-left" style="font-size:20px"></i><span style="font-size:20px;" >返回</span> </router-link>
      </div>
      <br>
      <el-tag>客户基础信息</el-tag>
      <div id="infoA">
        <div class="item_">客户姓名：{{info1.c_name}}</div>
        <div class="item_">客&nbsp;&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;&nbsp;标&nbsp;&nbsp;&nbsp;&nbsp;签:&nbsp;
          <el-select v-model="value1" multiple placeholder="请选择">
            <el-option
              v-for="item in option1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item_">手机号：{{info1.p_num}}</div>
        <div class="item_">是否属于白名单：
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item_">注册时间：{{info1.c_inDate}}</div>
        <div class="item_">可承受风险等级：
          {{info1.c_risk}}
        </div>
         <el-button type="primary" round style="margin-top:-10px;margin-left:-10px">保存编辑</el-button>
      </div >
      <el-tag style="margin-top:40px">客户存款产品情况</el-tag>
      <div id="infoB"> 
        <div class="item">持有金额：{{info1.c_ammount}}</div>
      </div>
    </el-card>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        info1:{
          c_name:'lilili',
          p_num:'138606662123',
          c_inDate:'2004-1-4',
          c_ammount:'10000',
          c_risk:'低'
        },
        option1: [{
          value: '选项1',
          label: '退伍军人'
        }, {
          value: '选项2',
          label: '农村户口'
        }, {
          value: '选项3',
          label: '高薪客户'
        }, {
          value: '选项4',
          label: '公共服务'
        }, {
          value: '选项5',
          label: '人口'
        }],
        option2:[
          {
          value: '选项1',
          label: '是'
          }, {
            value: '选项2',
            label: '否'
          },
        ],
        value1: [],
        value2: [],
      }
    }
  }
</script>

<style scoped>
.el-tag{
  font-size: 20px;
  margin-left: 40px;
  margin-bottom: 10px;
}
.item_{
  width: 560px;
  height: 50px;
  float: left;
  margin-bottom: 30px;
}
.item{
  width: 1120px;
  height: 50px;
  float: left;
  margin-bottom: 30px;
}
.el-select{
  width: 400px;
}
#infoA,#infoB{
  width: 1120px;
  margin-left: 60px;
  margin-top: 40px;
}
/deep/ .el-table__body-wrapper::-webkit-scrollbar {
width: 5px;
height: 10px;
}
.el-card{
  height: 1000px;
  margin-left: 50px;
  margin-top: 30px;
}
</style>