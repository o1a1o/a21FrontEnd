<template>
    <div>
        <el-card id="zuoshang">

        </el-card>
        <el-card id="youshang">

        </el-card>
    <div id="4ge">
        <div class="four" id="fir">
            <!-- 今日营收 
            {{ywdata.today}} -->
        </div>
        <div class="four" id="sec"></div>
        <div class="four" id="thi"></div>
        <div class="four" id="for"></div>
    </div>
    </div>
</template>

<style scoped>
    #zuoshang{
        width: 1100px;
        height: 600px;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 30px;
        display: inline-block;
    }
    #youshang{
        width: 550px;
        height: 600px;
        /* margin-left: 10px; */
        display: inline-block;
    }
    .four{
        width: 390px;
        height: 320px;
        border-radius: 14px;
        margin-top:40px;
        display: inline-block;
        margin-left: 35px;
    }
    #fir{
        background-color: #FA708B;
    }
    #sec{
        background-color: #38ACF5;
    }
    #thi{
        background-color: #8E6BEB;
    }
    #for{
        background-color: #3FC8A9;
    }
</style>

<script>
  export default {
    data() {
      return {
        ywdata:{
            today:'1292022.20'
        }

      }
    },
    methods: {
    }
  }
</script>