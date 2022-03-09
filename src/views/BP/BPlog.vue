<template>

    <el-table
        :data="productData.filter(data => !search || data.p_name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;padding:30px 100px"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
        prop="p_id"
        label="产品编号"
        v-model="productData.p_id"
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_name"
        label="产品名称"
        v-model="productData.p_name"
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_startDay"
        v-model="productData.p_startDay"
        label="上架日期"
        sortable
        width="250">
        </el-table-column>
        <el-table-column
        prop="p_endDay"
        label="下架日期"
        v-model="productData.p_endDay"
        sortable
        width="250">
        </el-table-column>
        <el-table-column
        prop="address"
        v-model="productData.address"
        label="修改设备地址"
        width="250"
        :formatter="formatter">
        </el-table-column>
        <el-table-column
        align="center"
        width="250">
        <!-- eslint-disable-next-line -->
        <template slot="header" slot-scope="scope">
            <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索产品名称"/>
        </template>
        <!-- eslint-disable-next-line -->
        <template slot-scope="scope">
            <router-link  to="/bpxxlog">
                <el-button  size="mini" type="text" >查看</el-button>
            </router-link>
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
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财5号',
          p_startDay:'2017-02-05',
          p_endDay:'2021-08-08',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-01-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'}
        ,{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-01',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财5号',
          p_startDay:'2017-02-05',
          p_endDay:'2021-08-08',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-01-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        },{
          p_id:'121828178',
          p_name:'理财3号',
          p_startDay:'2017-02-02',
          p_endDay:'2021-08-06',
          address: '183.129.147.43'
        }],
        search: '',
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
        this.$router.push({ name: "bpxxlog" });
      },
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>

<style scoped>

</style>