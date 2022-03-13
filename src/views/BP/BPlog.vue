<template>

    <el-table
        :data="productData.filter(data => !search || data.p_name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;padding:30px 30px"
        >
        <el-table-column
        prop="p_id"
        label="产品编号"
        align="center"
        v-model="productData.p_id"
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_name"
        label="产品名称"
        align="center"
        v-model="productData.p_name"
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_startDay"
        align="center"
        v-model="productData.p_startDay"
        label="上架日期"
        sortable
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_endDay"
        label="下架日期"
        align="center"
        v-model="productData.p_endDay"
        sortable
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_changeTime"
        label="产品修改时间"
        align="center"
        v-model="productData.p_changeTime"
        sortable
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_address"
        v-model="productData.p_address"
        label="修改设备地址"
        align="center"
        width="220"
        >
        </el-table-column>
        <el-table-column
        align="center"
        prop="p_logtype"
        v-model="productData.p_logtype"
        width="200">
        <!-- eslint-disable-next-line -->
        <template slot="header" slot-scope="scope">
            <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索产品名称"/>
        </template>
        </el-table-column>
    </el-table>
</template>

<script>
  export default {
    data() {
      return {
        productData: [{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-01',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'下架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财5号',
          p_startDay:'2017-02-05',
          p_endDay:'2021-08-08',
          p_address: '183.129.147.43',
          p_logtype:'上架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'下架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-01-06',
          p_address: '183.129.147.43',
          p_logtype:'修改',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'下架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'下架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'修改',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'修改',
          p_changeTime:'2019-10-03 20:00:23'
          },
        ,{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-01',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'上架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财5号',
          p_startDay:'2017-02-05',
          p_endDay:'2021-08-08',
          p_address: '183.129.147.43',
          p_logtype:'上架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'修改',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-01-06',
          p_address: '183.129.147.43',
          p_logtype:'修改',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'修改',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'修改',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'下架',
          p_changeTime:'2019-10-03 20:00:23'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          p_address: '183.129.147.43',
          p_logtype:'下架',
          p_changeTime:'2019-10-03 20:00:23'
        }],
        search: '',
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
.el-table{
  font-size: 16px;
}
</style>