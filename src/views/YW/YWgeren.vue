<template>
    <div>
        <h2 id="title">个人资料</h2>

        <el-form ref="form" :model="gerenform" label-width="80px" >
        <el-form-item label="上传头像">
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="工号">
            <el-input v-model="gerenform.u_id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="gerenform.u_name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
            <el-input v-model="gerenform.u_tel"></el-input>
        </el-form-item>
        <el-form-item label="入职时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="gerenform.u_inDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">编辑</el-button>
            <el-button>保存</el-button>
        </el-form-item>
        </el-form>        
    </div>
</template>

<style>
    /* 上传头像 */
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    margin-top: 10px;
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
  .el-form,#title{
      margin-left: 30px;
      margin-top: 30px;
  }
  .el-input__inner{
      width: 500px;
      height: 50px;
      margin-bottom:10px
  }


</style>

<script>
  export default {
    data() {
      return {
        imageUrl: '',
        gerenform: {
          u_id:'20020920',
          u_name:'cocosori',
          u_tel:'183293822838',
          u_inDate:'2002-03-20'
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
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
      }
    }
  }
</script>