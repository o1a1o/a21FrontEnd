<template>
    <div id="bac">
        <p id="titA">业务人员注册</p>
        <div id="cardA">
            <div id="head">
                <router-link  to="/Register" id="back"><img src="..\img\back1.png" style="padding-right:10px;">返回选择注册页面</router-link>
                <p id="head1">账号信息</p>
            </div>

            <el-form ref="YWform" :model="BPform" style="text-align:center;">
                <el-form-item>
                    <p class="sth">姓名</p>
                    <el-input v-model="YWform.name" style="width:700px"></el-input>
                </el-form-item>
                <el-form-item >
                    <p class="sth">工号</p>
                    <el-input v-model="YWform.gonghao"></el-input>
                </el-form-item>
                <el-form-item >
                    <p class="sth">账号（手机号）</p>
                    <el-input v-model="YWform.zhanghao"></el-input>
                </el-form-item>
                <el-form-item >
                    <p class="sth">验证码</p>
                    <el-input v-model="YWform.yanzhengma"></el-input>
                    <el-button type="primary" @click="yanzhengma" style="position:absolute;right:150px;margin-top:9px;font-size:24px;width:227px;height:74px;background-color:#5282FF">获取验证码</el-button>
                </el-form-item>
                <el-form-item >
                    <p class="sth">密码</p>
                    <el-input v-model="YWform.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <p class="sth">注册邀请码</p>
                    <el-input v-model="YWform.zhucema"></el-input>
                </el-form-item>
                <el-checkbox
                    style="font-size:30px;margin-bottom:30px"
                    label="我已阅读并同意《服务协议》与《隐私声明》" 
                    v-model="YWform.agree"
                ></el-checkbox>
    
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="font-size:24px;width:638px;height:74px;background-color:#5282FF">同意协议并提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
  name: "Reg1",
  components: {},
  data() {
    return {
      YWform: {
        name: "",
        gonghao: "",
        zhanghao:"",
        yanzhengma:"",
        password:"",
        zhucema:"",
        agree:[]
      },
      rules:{
          agree: [ 
          { type: 'array', required: true, message: '请勾选同意协议', trigger: 'change' }, 
        ],
      }
    };
  },
  methods: {
    onSubmit() {
      alert("111");
    },
    yanzhengam() {
      alert("222");
    },
  },
};
</script>

<style scoped>
    *{
        margin: 0 auto;
        padding: 0;
    }
    #bac{
        width: 1920px;
		height: 1468px;
        top:0;
        left:0;
        background: linear-gradient(to bottom, #5282FF 0%,#5282FF  64.8%,white 64.8%,white 100%);
    }
    #titA{
        font-size: 42px;
        font-weight: 600;
        text-align: center;
        padding-top: 24px;
        padding-bottom: 24px;
    }
    #cardA{
        background-color: white;
        width: 1580px;
        height: 1281px;
        border: 1px #797979 solid;
    }
    #head{
        height: 130px;
        border-bottom: 1px #797979 solid;
    }
    #head1{
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        padding-top: 45px;
    }
    #back{
        font-size: 24px;    
        text-decoration: none;    
        position: absolute;
        color: #5282FF;
        padding-top: 53px;
        padding-left: 20px;
    }
    #back:hover{
        color: #797979;
    }
    /deep/ .el-input__inner{
        width: 706px;
        height: 74px;
        margin-top: 10px;
    }
    .sth{
        padding-top:30px;
        font-size: 25px;
    }
</style>
