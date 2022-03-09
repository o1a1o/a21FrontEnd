<template>
    <div>
        <h2 id="title">编排人员管理</h2>
        <el-table
            :data="manageData"
            highlight-current-row
            style="width: 100%;margin-left:50px">
            <el-table-column
            type="index"
            width="300">
            </el-table-column>
            <el-table-column
            property="u_id"
            label="员工工号"
            width="400">
            </el-table-column>
            <el-table-column
            property="u_name"
            label="员工名称"
            width="400">
            </el-table-column>
            <el-table-column
            property="u_type"
            width="400"
            label="编排权限">
            </el-table-column>
            <el-table-column
            label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">禁用</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">启用</el-button>
                </template>
            </el-table-column>
             
        </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        manageData: [
            {
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },{
                u_id:'23414142',
                u_name:'关东煮',
                u_type:'有权限',
            },
        ],

      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>

<style scoped>
#title{
    margin-left: 40px;
    font-size: 20px;
    font-weight: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>