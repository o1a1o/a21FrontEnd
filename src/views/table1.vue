<template>
    <div>
        <el-table
                 border
                 :model="xxData"
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
                sortable
                width="180">
                </el-table-column>
                <el-table-column
                prop="p_endDay"
                label="下架日期"
                align="center"
                sortable
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
                    <router-link  to="/YWalreadyxx">
                        <el-button  size="mini" type="text" >查看</el-button>
                    </router-link>
                </template>
                </el-table-column>
            </el-table>
    </div>
</template>

