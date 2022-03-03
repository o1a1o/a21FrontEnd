<template>
  <header>
    <p id="tit">欢迎来到三湘银行服务系统 ！</p>
    <div id="logout" @click="logout">退出</div>
  </header>
</template>

<style scoped>
header{
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




