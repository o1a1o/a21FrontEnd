<template>
    <div>
        <!-- <h2 id="title">编排人员管理</h2> -->
        <el-table
            :data="manageData"
            highlight-current-row
            style="width: 100%;margin-left:50px;margin-top:20px">
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

        <div class="paginationClass">
            <el-pagination @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.currentPage"
                :page-sizes="[12]"
                :page-size="page.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="manageDataAll.length">
            </el-pagination>
        </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        manageData:[],
        page: {
            currentPage: 1,
            pageSize: 12
        },
        manageDataAll: [
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
    mounted() {
        let manageDataAll = JSON.parse(JSON.stringify(this.manageDataAll));
        this.manageData= manageDataAll.splice(0, 12);
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      handleSizeChange(pageSize) {
        // 每页条数切换
        this.page.pageSize = pageSize;
        this.handleCurrentChange(this.page.currentPage);
        },
        handleCurrentChange(currentPage) {
        //页码切换
        this.page.currentPage = currentPage;
        this.currentChangePage(this.manageDataAll, currentPage);
        },
        //分页方法（重点）
        currentChangePage(list, currentPage) {
        let from = (currentPage - 1) * this.page.pageSize;
        let to = currentPage * this.page.pageSize;
        this.manageData = [];
        for (;from < to; from++) {
            if (list[from]) {
            this.manageData.push(list[from]);
            }
        }
        },

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
.paginationClass{
    margin-top: 30px;
    margin-left: 70px;
}
</style>