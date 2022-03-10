<template>
    <div>
        <router-link  to="/YWcustomer" style="text-decoration:none;color:black;padding:20px;top:20px;position:relative"><i class="el-icon-arrow-left" style="font-size:20px"></i><span style="font-size:20px;" >返回</span> </router-link>
        <el-card>
            <el-tag id="tag1">客户基础信息</el-tag>
            <el-descriptions column='2' >
                <el-descriptions-item label="客户姓名">{{information.c_name}}</el-descriptions-item>
                <el-descriptions-item label="手机号">{{information.c_tel}}</el-descriptions-item>
                <el-descriptions-item label="注册时间">{{information.c_indate}}</el-descriptions-item>
                <el-descriptions-item label="可承受风险等级：">{{information.c_risk}}</el-descriptions-item>
                <el-descriptions-item label="*用户标签:">
                    <el-select v-model="value1" multiple placeholder="请选择">
                    <el-option
                    v-for="item in tags"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </el-descriptions-item>
                <el-descriptions-item label="*是否属于白名单：" width='200'>
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option
                        v-for="item in listItem"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-descriptions-item>
            </el-descriptions>
            <el-tag id="tag2">客户存款产品情况</el-tag>
            <el-descriptions column='1' >
                <el-descriptions-item label="持有金额">{{holdings.ammount}}</el-descriptions-item>
               
                <el-descriptions-item label="持有产品">
                    <!-- <div id="pie1" style="width: 600px;height:400px;"></div> -->
                </el-descriptions-item>
                <el-descriptions-item label="产品构成">{{holdings.parts}}</el-descriptions-item>
            </el-descriptions>
        </el-card>
    </div>
</template>

<script>
    




  export default {
    data() {
      return {
        tags: [{
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
        listItem:[{
          value: '选项1',
          label: '是'
        }, {
          value: '选项2',
          label: '否'
        }],
        information:{
            c_name:'肚子饿',
            c_tel:'17282247722',
            c_indate:'2000-05-01',
            c_risk:'低'
        },
        holdings:{
            ammount:'1000000',
            product:'',
            parts:''
        },
        value1: '',
        value2:'',
      }
    }
  }
</script>

<style scoped>
.el-card{
    margin-top: 40px;
    margin-left: 50px;
    padding-bottom: 40px;
}
.el-descriptions,#tag1,#tag2{
    margin-left: 60px;
    margin-top:50px ;
    font-size: 20px;
}
.el-descriptions-item{
    line-height: 50px;
}
</style>