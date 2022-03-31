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
                    <router-link  to="/customers/{id}/customer">
                        <el-button  type="text" >查看详情</el-button>
                    </router-link>
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
            :total="cDataAll.length">
          </el-pagination>
        </div>

    </div>
    
</template>

<style scoped>
    .el-table{
        margin-left: 20px;
        margin-top:40px;
        font-size: 17px;
    }
    .paginationClass{
      margin-left: 100px;
      margin-top: 50px;
    }
</style>

<script>
  export default {
    data() {
      return {
        page: {
          currentPage: 1,
          pageSize: 12
        },
        cData:[],
        cDataAll: [
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
    mounted() {
      let cDataAll = JSON.parse(JSON.stringify(this.cDataAll));
      this.cData = cDataAll.splice(0, 12);
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
        indexMethod(index) {
        return (index+1);
      },
      handleSizeChange(pageSize) {
        // 每页条数切换
        this.page.pageSize = pageSize;
        this.handleCurrentChange(this.page.currentPage);
      },
      handleCurrentChange(currentPage) {
        //页码切换
        this.page.currentPage = currentPage;
        this.currentChangePage(this.cDataAll, currentPage);
      },
      //分页方法（重点）
      currentChangePage(list, currentPage) {
        let from = (currentPage - 1) * this.page.pageSize;
        let to = currentPage * this.page.pageSize;
        this.cData = [];
        for (;from < to; from++) {
          if (list[from]) {
            this.cData.push(list[from]);
          }
        }
      },

    },
  }
</script>