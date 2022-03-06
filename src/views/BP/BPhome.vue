<template>
    <div id="home">
        <i class="el-icon-s-data"></i>
        <span id="top">我发布的产品状态</span>
        <br>

        <div id="left" class="thr">
            <i class="el-icon-sell"></i>
            <span>正在售卖的产品</span>
            <el-table
            max-height="869"
            style="width: 100%;height:869px;"
            :data="productzaimaiData">
            <el-table-column
                prop="p_name"
                align="center"
                label="产品名称"
                width="170">
            </el-table-column>
            <el-table-column
                prop="p_id"
                width="170"
                align="center"
                label="产品编号">
            </el-table-column>
            <el-table-column
                prop="p_date"
                align="center"
                label="发售日期"
                width="152">
            </el-table-column>
             <el-table-column
                align="center"
                label="操作"
                width="80">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>

        <div id="center" class="thr">

        </div>

        <div id="right" class="thr">

        </div>
    </div>
</template>

<style scoped>
    #home{
        width: 1700px;
        height: 990px;
        background-color: #f2f2f2;
        border-radius: 36px;
        margin: 0 auto;
        margin-top: 30px;
    }
    .el-icon-s-data,#top{
        font-size: 30px;
        margin-top: 30px;
        margin-left: 50px;
        margin-bottom: 30px;
    }

    /deep/ .el-table, /deep/ .el-table__expanded-cell{
    background-color: transparent;
    }
    /* 表格内背景颜色 */
    /deep/ .el-table th,
    /deep/ .el-table tr,
    /deep/ .el-table td {
    background-color: transparent;
    }

    .thr{
        width: 572px;
        height: 869px;
        border-left: #777777 1px dotted;
        border-top: #777777 1px dotted;
        border-bottom: #777777 1px dotted;
        float: left;
    }
    #right{
        border-right: #777777 1px dotted;
    }

</style>

<script>
    export default {
      data() {
        return {
          productzaimaiData: [{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          },{
            p_date: '2016-05-02',
            p_name: 'sale1111lilv100@',
            p_id: '1923982'
          }]
        }
      }
    }
  </script>