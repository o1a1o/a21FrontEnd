<template>
  <el-menu 
    :default-active="activeIndex"
    class="el-menu-vertical-demo" 
    :collapse="isCollapse"
    background-color="#171C3A"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
     <div id="zuoshang">
      <el-avatar> user </el-avatar>
    </div>
    <h3 id="topline" v-show="!isCollapse">业务人员端</h3>
    <h3 v-show="isCollapse"></h3>
    <el-menu-item 
      
      style="width:100px;height:100px;"
      :index="item.path" 
      v-for="item in noChildren" 
      :key="item.path"
      @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon" class="iii"></i><br>
      <div slot="title" class="ppp">{{ item.label }}</div>
    </el-menu-item>
   
    <!-- <el-submenu 
      :index="item.label" 
      v-for="item in hasChildren" 
      :key="item.path" 
      @click="clickMenu(item)">

      <template slot="title">
        <i class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>

      <el-menu-item-group>
        <el-menu-item 
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subItem)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->

  </el-menu>
</template>
<style scoped>

  .el-menu {
    height: 100%;
    border: none;
  }
  .iii{
    margin-left: 17px;
    margin-top: 15px;
    width: 20px;
    height: 20px;
    font-size: 23px;
    color: white;
  }
  .ppp{
    position: relative;
    top: -15px;
    left: -20px;
    text-align: center;
    width: 100px;
    height: 20px;
    font-size: 15px;
  }

  .el-menu > h3{
    font-size: 13px;
    font-weight: 100;
    color: white;
    text-align: center;
    line-height: 48px;
  }
  #topline{
    line-height: 15px;
    font-size: 15px;
  }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100px;
    min-height: 600px;
  }
  #zuoshang{
    padding-left: 28px;
    padding-top:28px ;
    width: 51px;
  }
  /* 选中后样式 */
   .el-menu-item.is-active {
        /* border-left:#006EFF solid 6px !important; */
        background-color: #006EFF !important;
        color: white !important;
    }
     .el-menu-item:hover {
        border-left:#006EFF solid 6px !important;
    }
</style>
<script>
  export default {
    data() {
      return {
        menu: [
          {
            path: "/YWhome",
            name: "YWhome",
            label: "首页",
            icon: "YWhome",
          },
          {
            path: "/YWreleasedProduct",
            name: "YWreleasedProduct",
            label: "已发布产品",
            icon: "YWreleasedProduct",
          },
          {
            path: "/YWshowProduct",
            name: "YWshowProduct",
            label: "推荐产品设置",
            icon: "YWshowProduct",

          },
          {
            path: "/YWmessage",
            name: "YWmessage",
            label: "消息中心",
            icon: "YWmessage",

          },
          {
            path: "/YWcustomer",
            name: "YWcustomer",
            label: "客户页面",
            icon: "YWcustomer",

          },
          {
            path: "/YWgeren",
            name: "YWgeren",
            label: "个人信息",
            icon: "YWgeren",

          },
        
        ],
      }
    },
    mounted() {
      this.activeIndex = this.$route.path;
    },
    methods: {
      clickMenu(item) {
        this.$router.push({ name: item.name });
        this.$store.commit("selectMenu", item);
      },
    },
    computed:{
      noChildren() {
        return this.menu.filter((item) => !item.children);
      },
      hasChildren() {
        return  this.menu.filter((item) => item.children);
      },
      isCollapse() {
        return this.$store.state.tab.isCollapse;
      },
    },
  }
</script>