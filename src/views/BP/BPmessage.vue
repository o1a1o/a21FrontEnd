<template>
    <div>
        <el-tabs type="border-card">
        <el-tab-pane label="产品审批">
            <el-table
                ref="multipleTable filterTable" 
                 :data="psData.filter(data => !search || data.p_id.toLowerCase().includes(search.toLowerCase()))"
                tooltip-effect="dark"
                @row-click="clickToXx"
                style="width: 100%;"
                height="800"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="p_shenpiT"
                align="center"
                label="提交审批时间"
                sortable
                width="320">
                </el-table-column>
                <el-table-column
                prop="p_id"
                label="产品编号"
                sortable
                align="center"
                width="250"> 
                </el-table-column>
                <el-table-column
                prop="p_name"
                align="center"
                width="250"
                label="产品名称">
                </el-table-column>
                <el-table-column
                prop="p_name"
                align="center"
                width="220"
                label="发行金额">
                </el-table-column>
                <el-table-column
                prop="p_risk"
                align="center"
                width="200"
                label="风险等级">
                </el-table-column>
                <el-table-column
                prop="p_status"
                align="center"
                :filters="[{text: '待审批', value: '待审批'}, {text: '已审批', value: '已审批'}]"
                :filter-method="filterTag"
                width="200"
                label="状态">
                </el-table-column>
                <el-table-column
                align="center"
                width="150"
                label="操作">
                <!-- eslint-disable-next-line -->
                 <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入产品编号搜索"/>
                </template>
                 <!-- eslint-disable-next-line -->
                <template slot-scope="scope">
                    <router-link  to="/BPalreadyxx">
                        <el-button  size="mini" type="text" >审批</el-button>
                    </router-link>
                </template>
                </el-table-column>
            </el-table>
            <button @click="shenpiall" id="shenpiall">一键审批</button>
        </el-tab-pane>
        <el-tab-pane label="注册审批">
            注册审批
        </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped>
.el-tabs{
    margin-left: 50px;
    margin-top: 30px;
}
#shenpiall{
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 20px;
  font-size: 15px;
}
</style>

<script>
  export default {
    data() {
      return {
        psData: [
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'已审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },
          {
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          },{
            p_shenpiT:'2019-10-29 21:20:02',
            p_id:'898112312421798',
            p_name:'定期存款111',
            p_risk:'低',
            p_status:'待审批',
          }
        ],
        search:'',
        multipleSelection: [],
      }
    },

    methods: {
      //多选
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //多选选中
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
       filterTag(value, row) {
        return row.p_status === value;
      },
       filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      shenpiall(){
        alert("一键审批");
      },
      clickToXx(){
        this.$router.push({ name: "BPmes1xx" });
      }
    }
  }
</script>