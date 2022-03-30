<template>
  <header>
    <p id="tit">Welcome ！</p>
    <div id="out">
      <el-avatar icon="el-icon-user-solid" ></el-avatar>
      <div id="logout" @click="logout">
        退出
      </div>
    </div>
    
  </header>
</template>

<style scoped>
header{
  /* background:url('../img/bankback.jpg'); */
  background-color: #c2ccd0;
  width: 1820px;
  display:flex;
  justify-content: space-between;
  height: 105px;
  align-items: center;
  padding-top: 10px;
  color: #ffffff;
  border: #DDDDDD 1px solid;
}
#tit{
  padding-left: 40px;
  color: #272727;
  font-size: 20px;
}
#logout{
  margin-right: 40px;
  font-size: 20px;
  text-decoration: none;
  color: #272727;
}
#logout:hover{
  color: blue;
}
#out{
  background-color: #DDDDDD;
  padding-left: 40px;
  padding-top: 20px;
  padding-bottom: 25px;
  position: relative;
  top: -5px;
}
</style>


<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {

    };
  },

  methods: {
    logout(){
        this.$confirm('确定要退出吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        });
    },
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					_this.$router.push({ name: "Login" });
				}).catch(() => {
				});
			},

  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
};
</script>




