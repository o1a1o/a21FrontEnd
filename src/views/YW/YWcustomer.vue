<template>

    <div>
        <el-table
            :data="cData"
            style="width: 100%"
            >
            <el-table-column
            type="index"
            width="250"
            align="center"
            :index="indexMethod">
            </el-table-column>
            <el-table-column
            prop="p_num"
            label="客户手机号"
            align="center"
            width="300">
            </el-table-column>
            <el-table-column
            prop="c_name"
            label="客户名称"
            align="center"
            width="300">
            </el-table-column>
            <el-table-column
            prop="c_risk"
            label="客户可承受风险等级"
            align="center"
            width="300">
            </el-table-column>
            <el-table-column
            label="操作"
            align="center"
            width="300">
             <!-- eslint-disable-next-line -->
                <template slot-scope="scope">
                    <router-link  to="/YWcxx">
                        <el-button  type="text" >查看详情</el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>
    </div>
    
</template>

<style scoped>
    .el-table{
        margin-left: 20px;
        margin-top:20px;
        font-size: 17px;
    }
</style>

<script>
  export default {
    data() {
      return {
        cData: [
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },{
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
            {
            p_num:'987291387',
            c_name:'新大陆',
            c_risk:'低',
            },
        ]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
        indexMethod(index) {
        return (index+1);
      }
    },
  }
</script>