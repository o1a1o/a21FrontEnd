<template>
    <div id="bac">
        <div id="card" >
            <img src="..\img\banklogo.png" style="float:left;margin-left:276px;margin-top:104px;">
            <h2 id="title"> 银行业务编排系统</h2>
            <el-form
            ref="loginFormRef"
            :model="form"
            :rules="formRules"
            label-width="80px"
            >
            <el-form-item prop="username" >
                <el-input v-model="form.username"  autocomplete="off"  placeholder="请输入用户名"
                style="width:440px;margin-bottom:20px"></el-input>
            </el-form-item>
            <el-form-item prop="keyword">
               <el-input  v-model="form.keyword" :rows="100" autocomplete="off"  placeholder="请输入密码"  show-keyword
                style="width:440px;margin-bottom:20px" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="login"  style="margin-top:21px;margin-bottom:15px;margin-left: 15px;width:440px;height:58px;background-color:#5282FF;font-size:18px">登录 </el-button>
                <div id="re1">没有账号? <router-link  to="/Register" id="ahref">点击注册</router-link></div>
            </el-form-item>
            </el-form>
        </div>
        <router-link  to="/YWhome" id="ahref">业务人员端</router-link>
        <router-link  to="/BPhome" id="ahref">编排人员端</router-link>
    </div>
</template>

<script>
    export default({
        name:"Login",
        components:{},
        data(){
            return{
                form: {
                username: "",
                keyword: "",
            },
            formRules: {
                username: [
                { required: true, message: "请输入用户名", trigger: "change" },
                ],
                keyword: [
                { required: true, message: "请输入密码", trigger: "change" },
                ],
            },
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            login() {
                const data={username : "123", keyword : "123"};
                if(this.form.username===data.username&&this.form.keyword===data.keyword){
                    this.$router.push("/YWhome");
                }else {
                     return this.$message.error('用户名或密码错误!');
                }
            }
        },
    })
</script>

<style scoped>
    *{
        margin: 0 auto;
        padding: 0;
    }
    #bac{
        width: 1920px;
		height: 1080px;
        top:0;
        left:0;
        background: linear-gradient(to bottom, #5282FF 0%,#5282FF  64.8%,white 64.8%,white 100%);
    }
    #card{
        width: 640px;
        height:742px;
        position: relative;
        top:170px;
        border: 1px solid #F0F0F0;
        background-color: 	#FFFFFF;
    }
    #title{
        font-size: 42px;
        margin-top: 213px;
        margin-left:152px ;
        margin-bottom: 109px;
    }
    /deep/ .el-input__inner{
        width: 440px;
        height: 60px;
        margin-left: 15px;
    }
    #re1{
        margin-left: 15px;
    }
    #ahref{
        color:#4D8BFF;
        text-decoration: none;
    }
</style>

