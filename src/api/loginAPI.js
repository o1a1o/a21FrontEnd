import {Axios_post} from "../config/axios";

const loginAPI = {

  login_BP(params,self) {
    return Axios_post('http://localhost:8080/api/user/login',params).then(res =>{
      // if(res.code === '0'){
      //   self.$message({
      //     type:"success",
      //     message: "登录成功"
      //   })
      //   self.$router.push("/Home")
      // } else {
      //   self.$message({
      //     type:"error",
      //     message: res.msg
      //   })
      // }
      alert('/',response.data);
    })
  },
}

export default loginAPI;
