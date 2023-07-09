<template>
  <body id="poster">
  <el-form class="login-container"  label-position="left" label-width="0px">
    <h3 class="login_title">
      系统登陆
      <el-button @click="toRegister()">点我注册</el-button>
    </h3>
    <el-form-item>
      <el-input type="text" v-model="loginform.username" autocomplete="off" placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item >
      <el-input type="password" v-model="loginform.password"  autocomplete="off" placeholder="密码"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" style="width: 100%;background: #505458;border: none;" @click="onSubmit">登陆</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  name: "Login",
  components:{
    Header,
    Aside,
  },
  data() {
    return {
      loginform: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      axios.post('http://localhost:8085/user/login',this.loginform).then((res)=>{
        if(res.data.success === true){
          this.$message.success("登陆成功")

          sessionStorage.setItem("1",this.loginform.username)
          sessionStorage.setItem("2",this.loginform.password)
          this.$router.push({path:'/layout'})
        }
      })
    },
    toRegister(){
      this.$router.push({path:'/Register'})
    }
  }
}
</script>

<style>
#poster{
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
  padding: 0px;

}

.login-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 35px 35px;
  background: #fff;
  border: 1px solid #aeeaea;
  box-shadow: 0 0 25px #cec6c6;

}

.login_title{

}


</style>