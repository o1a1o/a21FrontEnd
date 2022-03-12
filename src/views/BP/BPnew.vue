<template>
  <div id="bdy">
    <div class="tbody">  
    <el-steps :active="active" finish-status="success" align-center >
      <el-step title="产品种类选择"></el-step>
      <el-step title="基础属性设置"></el-step>
      <el-step title="流程编排"></el-step>
    </el-steps>
<!-- 个人信息 -->
 <el-form ref="form" :model="form" label-width="300px">
<div class="info" v-if="active==1" >
  <div id="fir">
    <el-form-item  prop="p_type" size="medium" >
      <p style="padding-top:25px;margin-bottom: -50px;font-size: 30px;color: #333333;margin-left:-200px;">请设定产品种类</p> <br>
        <el-radio-group v-model="form.p_type" id="typestyle">
        <el-radio :label="0"><p>活期存款</p></el-radio><br>
        <el-radio :label="1"><p>定期存款</p></el-radio><br>
        <el-radio :label="2"><p>定活两便存款</p></el-radio><br>
        <el-radio :label="3"><p>通知存款</p></el-radio><br>
        <el-radio :label="4"><p>大额存单</p></el-radio><br>
        <el-radio :label="5"><p>结构性存款</p></el-radio><br>
      </el-radio-group>
    </el-form-item> 
  </div>
  <div id="shenpiren">
    <p id="tt">该种类对应的审批人员及次序</p>
    <div class="peo">
      <p class="shenhe">一审环节</p>
      <i class="el-icon-user"></i>
      <p class="nei">主管一</p>
    </div>
    <div class="peo">
      <p class="shenhe">二审环节</p>
      <i class="el-icon-user"></i>
      <p class="nei">主管二</p>
    </div>
    <div class="peo">
      <p class="shenhe">三审环节</p>
      <i class="el-icon-user"></i>
      <p class="nei">主管三</p>
    </div>
  </div>
</div>




<div class="info" v-if="active==2">
  <el-card class="box-card" id="card1" style="margin-top:80px;">
    <div slot="header" class="clearfix" ><span>属性设置</span></div>
        <el-form-item label="产品编号" prop="p_id" style="margin-top:20px">
          <el-input type="text" v-model="form.p_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产品名称" prop="p_name">
          <el-input type="text" v-model="form.p_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="起存金额(元)" prop="p_leastPrice">
          <el-input type="text" v-model="form.p_leastPrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单价(元)" prop="p_unitPrice">
          <el-input type="text" v-model="form.p_unitPrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="初始库存" prop="p_stock" >
          <el-input type="text" v-model="form.p_stock" autocomplete="off" placeholder="请输入数量"></el-input>
        </el-form-item>
        <el-form-item label="风险等级" prop="p_risk">
          <el-select v-model="form.p_risk" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.p_risk"
            :label="item.label"
            :value="item.p_risk">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="购买开放日" prop="p_startDay">
          <el-date-picker
            v-model="form.p_startDay"
            type="date"
            placeholder="请选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束售卖日" prop="p_endDay">
          <el-date-picker
            v-model="form.p_endDay"
            type="date"
            placeholder="请选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="发售公司" prop="p_company">
          <el-input type="text" v-model="form.p_company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产品简介" prop="p_des">
          <el-input type="textarea" v-model="form.p_des" autocomplete="off" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
  </el-card>
</div>



<div class="info" v-if="active==3">
  <!-- 1
  <bpmn-modeler
      ref="refNode"
      :xml="xml"
      :users="users"
      :groups="groups"
      :categorys="categorys"
      :is-view="false"
      @save="save"
    />2 -->
  <!-- <el-form-item label="从业资质:" prop="quality"></el-form-item> -->
</div>
<el-button style="margin-top: 100px;position:relative;left:560px;background-color:#009DFF;color:white;width:150px;height:50px;font-size:20px" @click="pre" v-if="active>1">上一步</el-button> 
<el-button style="margin-top: 100px;position:relative;left:560px;background-color:#009DFF;color:white;width:150px;height:50px;font-size:20px" @click="next" v-if="active<3">下一步</el-button>  

</el-form> 
</div>
</div>
</template>
<style>
.tbody{
    width:80%;
    margin-left:10%;
    margin-top: 2%;
}
/* 表单 */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  #tt{
    font-size: 30px;
    color: #333333;
    text-align: center;
    margin-top: 50px;
    padding-bottom: 20px;
  }
  #typestyle {
    position: relative;
    left: -230px;
    margin-top: 80px;
  }
  #fir{
    background-color: #dddddd;
    width: 400px;
    height: 530px;
    margin-top: 100px;
    border-radius: 20px;
    margin-left: 180px;
  }
  #shenpiren{

    float: right;
    position: relative;
    top:-530px;
    left: -180px;
    background-color: #dddddd;
    width: 500px;
    height: 530px;
    border-radius: 20px;
  }
  #typestyle>.el-radio p{
    line-height: 0px;
    font-size: 20px;
    position: relative;
    top:-32px;
    left: 40px;
  }
  .shenhe,.el-icon-user,.nei{
    font-size: 25px;
    color: #303133;
  }
  .nei{
    font-size: 20px;
    position: relative;
    top: -48px;
    left: 30px;
    color: #606266;
  }
  .peo{
    margin-left: 180px;
    margin-bottom: -30px;
  }
  #card1{
    width: 900px;
    height: 750px;
    margin: 0 auto;
  }
  #card1 .el-form-item{
    margin-left:-180px;
    padding-right: 50px;
    width: 1000px;
  }
 
</style>
<script>
  // import BpmnModeler from 'bpmn-js/lib/Modeler';
  // import CustomPaletteProvider from './customPalette';
  // import camundaExtension from './resources/camunda';
  // import bpmnModeler from 'bpmn-js/lib/Modeler' // 引入 bpmn-js
  export  default{
    // components: {
    //   bpmnModeler,
    // },
    data() {
      return {
        //bpmn
        // bpmnModeler: null,
        // xml: "", // Query the xml
        // users: [
        //   { name: "The Beatles", id: "1" },
        //   { name: "The Rolling Stones", id: "2" },
        //   { name: "Pink Floyed", id: "3" },
        // ],
        // groups: [
        //   { name: "Folk Music", id: "4" },
        //   { name: "Rock Music", id: "5" },
        //   { name: "Classical Music", id: "6" },
        // ],
        // categorys: [
        //   { name: "Music", id: "7" },
        //   { name: "Articles", id: "8" },
        // ],

        active: 1,

        form: {
          p_type:'',
          p_id:'',
          p_name:'',
          p_leastPrice:'',
          p_stock:'',
          p_startDay:'',
          p_endDay:'',
          p_company:'',
          p_risk:'',
          p_unitPrice:'',
          p_des:'',
          checkAll: false,
          isIndeterminate: true,      
        },

        options: [{
          p_risk: '1',
          label: '低'
        }, {
          p_risk: '2',
          label: '中'
        }, {
          p_risk: '3',
          label: '高'
        }],
      }
    },
    methods: {
      
      // getModelDetail() {
      //   // Send request to get xml
      //   // this.xml = response.xml
      // },
      // save(data) {
      //   console.log(data);  // { process: {...}, xml: '...', svg: '...' }
      // },
      onSubmit() {
        //this.form.checkedCities获取多选框的内容   zxs[this.form.radio]  this.form.imageUrl
        //开始提交 在这里进行跨域请求   
          this.axios({
            method: "post",
            url: "/api/PsychoSys/tuser.action",
            data: Qs.stringify(this.form)
          })
            .then(res => {
               this.$router.push("/tinfo");
            })
            .catch(function(err) {
              console.log(err);
            });
          /*在这里进行跨域请求*/
        //开始提交
      },
        handleAvatarSuccess(res, file) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.form.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.form.cities.length;
      }, next() {
        if (this.active++ > 2) this.active = 3;
      },
       pre() {
        if (this.active-- < 2) this.active = 1;
      }
    }
  } 
//表单js代码
</script>