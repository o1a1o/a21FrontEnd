<template>
    <div id="bac">
        <el-card id="card" >
            <img src="..\img\banklogo.png" style="float:left;margin-left:260px;margin-top:104px;">
            <h2 id="title"> 银行业务编排系统</h2>
            
            <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
                <el-tab-pane label="编排人员" name="first">
                    <el-form
                    ref="loginBpFormRef"
                    :model="BPform"
                    :rules="BPormRules"
                    label-width="80px"
                    >
                        <el-form-item prop="username" >
                            <el-input v-model="BPform.username"  autocomplete="off"  placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="keyword">
                        <el-input  v-model="BPform.keyword"  autocomplete="off"  placeholder="请输入密码"  show-keyword></el-input>
                        </el-form-item> 
                        <el-form-item>
                            <el-button class="login" type="primary"  @click="login_BP">登录 </el-button>
                            <!-- style="margin-top:21px;margin-bottom:15px;margin-left: 15px;width:440px;height:58px;background-color:#5282FF;font-size:18px" -->
                        </el-form-item>
                    </el-form>
                </el-tab-pane>


                <el-tab-pane label="业务人员" name="second">
                    <el-form
                    ref="loginYwFormRef"
                    :model="YWform"
                    :rules="YWformRules"
                    label-width="80px"
                    >
                        <el-form-item prop="username" >
                            <el-input v-model="YWform.username"  autocomplete="off"  placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="keyword">
                        <el-input  v-model="YWform.keyword" autocomplete="off"  placeholder="请输入密码"  show-keyword ></el-input>
                        </el-form-item> 
                        <el-form-item>
                            <el-button class="login" type="primary"  @click="login_YW">登录 </el-button>
                        </el-form-item>
                    </el-form>
                        
                </el-tab-pane>
            </el-tabs>
                <div id="re1">没有账号? <router-link  to="/Register" id="ahref">点击注册</router-link></div>
           
            
        </el-card>
        <router-link  to="/YWhome" id="ahref">业务人员端</router-link>
        <router-link  to="/BPhome" id="ahref">编排人员端</router-link>
    </div>
</template>

<script>
    import request from "../utils/request";
    import index from "../../src/api/index"
    export default({
        name:"Login",
        components:{},
        data(){
            return{
                activeName: 'first',
                BPform: {
                username: "",
                keyword: "",
                },
                YWform: {
                username: "",
                keyword: "",
                },
                BPformRules: {
                    username: [
                    { required: true, message: "请输入用户名", trigger: "change" },
                    ],
                    keyword: [
                    { required: true, message: "请输入密码", trigger: "change" },
                    ],
                },
                YWformRules: {
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
            // login_BP(){
            //     this.$api.loginAPI.login(this.BPform,this).then(res =>{
            //         // alert('/',response.data);
            //     })
            // },
            login_BP() {
                const data={username : "123", keyword : "123"};
                if(this.BPform.username===data.username&&this.BPform.keyword===data.keyword){
                    this.$router.push("/YWhome");
                }else {
                     return this.$message.error('用户名或密码错误!');
                }
            },
            login_YW() {
                const data={username : "123", keyword : "123"};
                if(this.YWform.username===data.username&&this.YWform.keyword===data.keyword){
                    this.$router.push("/YWhome");
                }else {
                     return this.$message.error('用户名或密码错误!');
                }
            }
        },
        created() { // 组件创建成功的钩子函数
        // 拿到要访问课程详情的课程id
        let id = this.$route.params.pk || this.$route.query.pk || 1;
        this.$axios({
            url: `http://127.0.0.1:8000/course/detail/${id}/`, // 后台接口
            method: 'get', // 请求方式
        }).then(response => { // 请求成功
            console.log('请求成功');
            console.log(response.data);
            this.course_ctx = response.data; // 将后台数据赋值给前台变量完成页面渲染
        }).catch(error => { // 请求失败
            console.log('请求失败');
            console.log(error);
        })
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
        margin-left:140px ;
        margin-bottom: 50px;
    }
    /deep/ .el-input__inner{
        width: 350px;
        height: 50px;
        margin-left: -10px;
        margin-top: 30px;
    }
    #re1{/*注册*/
        margin-left: 45px;
        margin-top: 20px;
    }
    #ahref{
        color:#4D8BFF;
        text-decoration: none;
    }
    .el-tabs{
        margin: 0 40px;
    }

    /deep/ .el-tabs__item{
        font-size: 16px;
    }
    .login{
        width: 350px;
        height: 50px;
        margin-top: 30px;
        margin-bottom: 20px;
        margin-left: -10px;
        background-color: #5282FF;
    }
</style>

