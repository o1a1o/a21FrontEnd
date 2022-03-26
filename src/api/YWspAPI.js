import {Axios_get, Axios_post} from "../axios/axios.js";

const YWspAPI ={
    load(self){
        self.loading=true;
        Axios_get("/api/get_plus_EmpNo",{accRole:accRole}).then(res => {
            self.loading = false
            if(accRole == "hr") {
              self.showData = res.data;
              console.log(self.HRtableData);
            }
            else if(accRole = "%"+"man") {
              self.ZGtableData = res.data;
              console.log(self.ZGtableData);
            }
          }).catch(err =>{
            console.log(err);
          })
    }
    // load(self,accRole) {
    //     self.loading = true
    //     console.log("1"+accRole);
        // Axios_get("/api/get_plus_EmpNo",{accRole:accRole}).then(res => {
        //   self.loading = false
        //   if(accRole == "hr") {
        //     self.HRtableData = res.data;
        //     console.log(self.HRtableData);
        //   }
        //   else if(accRole = "%"+"man") {
        //     self.ZGtableData = res.data;
        //     console.log(self.ZGtableData);
        //   }
        // }).catch(err =>{
        //   console.log(err);
        // })
    // },
}

export default YWspAPI;