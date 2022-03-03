<template>
    <div id="bac">
        <div id="card" >
            <router-link  to="/" id="Back"><img src="..\img\back2.png">返回登录页面</router-link>
            <img id="img1" src="..\img\reg1.png">
            <img id="img2" src="..\img\reg2.png">
            <router-link  to="/Reg1" id="b1">以编排人员身份注册</router-link>
            <router-link  to="/Reg2" id="b2">以业务人员身份注册</router-link>
        </div>
    </div>
</template>

<script>
    export default({
        name:"Register",
        components:{},
        data(){
            return{
                
            }
        },
        methods: {
            
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
    img{
        border-radius:75px;
        margin-top:211px;
    }
    #img1{
        margin-left: 145px;
        float: left;
    }
    #img2{
        margin-right: 145px;
        float: right;
    }
    #b1,#b2{
        text-decoration: none;
        color: #333333;
        font-size: 48px;
        position: relative;
        font-family: "微软雅黑";
        top:30px;
    }
    #b1:hover,#b2:hover{
        color: #5282FF;
    }
    #b1{
        float: left;
        margin-left: 270px;
        margin-top: 46px;
    }
    #b2{
        float: right;
        margin-right: 270px;
    }
    #Back{
        color:white;
        text-decoration:none;
        position:absolute;
        margin-top:-150px;
        font-size:30px;
        margin-left:30px;
    }
    #Back:hover{
        color: #dedede;
    }
</style>


