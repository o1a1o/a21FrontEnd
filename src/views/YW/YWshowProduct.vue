<template>
    <div>
        <el-card id="home">
            <div id="top">
                <span>推荐产品设置</span>
            </div>
             <el-table
            ref="multipleTable"
            :data="showData"
            tooltip-effect="dark"
            style="font-size:16px"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
            <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
            </template>
            <!-- eslint-disable-next-line -->
            </el-table-column>
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
            width="120">
            </el-table-column>
            <el-table-column
            align="center"
            width="150">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
            <el-button>设置推荐</el-button>
            </template>
            <!-- eslint-disable-next-line -->
            <template slot-scope="scope">
                <router-link  to="/BPalreadyxx">
                    <el-button  size="mini" type="text" >查看</el-button>
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
                :total="showDataAll.length">
            </el-pagination>
        </div>
        </el-card>
    </div>
</template>

<script>
// import axios from "../../axios/axios.js";;
  export default {
    mounted() {
        let showDataAll = JSON.parse(JSON.stringify(this.showDataAll));
        this.showData = showDataAll.splice(0, 12);
    },
    data() {
      return {
        showData:[],
        page: {
            currentPage: 1,
            pageSize: 12
        },
        showDataAll: [{
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
      }
    },
    methods:{
        loadShowData(){
            this.$api.YWspAPI.load(this).then(res=>{
                console.log(this.showDataALl);
            }).catch(err=>{
                console.log(err);
            });
        },

        handleSizeChange(pageSize) {
        // 每页条数切换
        this.page.pageSize = pageSize;
        this.handleCurrentChange(this.page.currentPage);
        },
        handleCurrentChange(currentPage) {
        //页码切换
        this.page.currentPage = currentPage;
        this.currentChangePage(this.showDataAll, currentPage);
        },
        //分页方法（重点）
        currentChangePage(list, currentPage) {
        let from = (currentPage - 1) * this.page.pageSize;
        let to = currentPage * this.page.pageSize;
        this.showData = [];
        for (;from < to; from++) {
            if (list[from]) {
            this.showData.push(list[from]);
            }
        }
        },

        // loadHr(){
        // this.$api.userAPI.load(this, "hr").then(res =>{
        //   console.log(this.HRtableData);
        // }).catch(err => {
        //   console.log(err);
        // });
        // },
    },
    created(){
        this.loadShowData();
    }
  };
</script>

<style scoped>
#home{
    margin-top: 15px;
    margin-left: 15px;
    width: 1780px;
}
#top span{
    margin-left: 20px;
}
.paginationClass{
    margin-top: 20px;
    margin-left: 20px;
}
</style>