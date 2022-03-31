<template>

    <div id="select">
        <!-- <div>
             <span>筛选查询</span>
        </div> -->
        <div >  
            <div id="datalist">数据列表</div>
             <el-table
                 border
                :data="xxData.filter(data => !search || data.p_name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                prop="p_id"
                align="center"
                label="产品编号"
                width="150">
                </el-table-column>
                <el-table-column
                prop="p_startDay"
                label="上架日期"
                align="center"
                width="180">
                </el-table-column>
                <el-table-column
                prop="p_endDay"
                label="下架日期"
                align="center"
                width="180">
                </el-table-column>
                <el-table-column
                prop="p_name"
                label="产品名称"
                align="center"
                width="200">
                </el-table-column>
                <el-table-column
                prop="p_total"
                label="总金额"
                align="center"
                width="200">
                </el-table-column>
                <el-table-column
                prop="p_rest"
                label="剩余库存金额"
                align="center"
                width="200">
                </el-table-column>
                <el-table-column
                prop="u_id"
                align="center"
                label="发布人"
                width="150">
                </el-table-column>
                <el-table-column
                prop="u_id2"
                align="center"
                label="审批人"
                width="150">
                </el-table-column>
                <el-table-column
                prop="p_status"
                label="销售状态"
                align="center"
                width="150">
                </el-table-column>
                <el-table-column
                align="center"
                width="150">
                <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入产品名称搜索"/>
                </template>
                <!-- eslint-disable-next-line -->
                <template slot-scope="scope">
                    <router-link  to="/BPalreadyxx">
                        <el-button  size="mini" type="text" >查看</el-button>
                    </router-link>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="paginationClass">
            <el-pagination @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="page.currentPage"
                            :page-sizes="[12]"
                            :page-size="page.pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="xxDataAll.length">
            </el-pagination>
        </div>
    </div>
</template>

<style scoped>
#datalist{
    margin:40px;
    margin-left: 75px;
    font-size: 20px;
}    
.el-table{
    margin-left: 30px;
}
.paginationClass{
    margin-top: 30px;
    margin-left: 50px;
}

</style>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        page: {
            currentPage: 1,
            pageSize: 12
        },
        xxData:[],
        xxDataAll: [{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        },{
            p_id:'2587372271',
            p_startDay:'2013-08-16',
            p_endDay:'2139-12-21',
            p_name:'长虹一号',
            p_total:'313222212311',
            p_rest:'2224141412',
            u_id:'23114',
            u_id2:'23142',
            p_status:1,
        }],
        search: ''
      }
    },
    mounted() {
        let xxDataAll = JSON.parse(JSON.stringify(this.xxDataAll));
        this.xxData =xxDataAll.splice(0, 12);
    },
     methods: {
        handleSizeChange(pageSize) {
        // 每页条数切换
        this.page.pageSize = pageSize;
        this.handleCurrentChange(this.page.currentPage);
        },
        handleCurrentChange(currentPage) {
        //页码切换
        this.page.currentPage = currentPage;
        this.currentChangePage(this.xxDataAll, currentPage);
        },
        //分页方法（重点）
        currentChangePage(list, currentPage) {
        let from = (currentPage - 1) * this.page.pageSize;
        let to = currentPage * this.page.pageSize;
        this.xxData = [];
        for (;from < to; from++) {
            if (list[from]) {
            this.xxData.push(list[from]);
            }
        }
        },
    },
  }
</script>