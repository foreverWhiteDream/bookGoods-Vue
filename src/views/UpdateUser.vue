<template>
  <body id="poster">
  <el-form class="login-container"  label-position="left" label-width="0px">
    <h3 class="login_title">
      修改密码
    </h3>
    <el-form-item>
      <el-input type="text" v-model="loginform.password" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>

    <el-form-item >
      <el-input type="password" v-model="loginform.password"  autocomplete="off" placeholder="确认密码"></el-input>
    </el-form-item>

    <el-form-item style="display: flex;
        justify-content: center;
        align-items: center;">
      <el-button type="primary" style="width: 45%;background: #505458;border: none; margin: auto;" @click="onSubmit">修改</el-button>
      <el-button type="primary" style="width: 45%;background: #505458;border: none; margin: auto;" @click="toMessage()">返回</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  name: "updateUser",
  components:{
    Header,
    Aside,
  },
  created() {
    this.getSession();
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
      axios.post('http://localhost:8085/user/update',this.loginform).then((res)=>{
        this.$message.success("修改密码成功")
        this.$router.push({path:'/'})
        console.log(res)
      })
    },

    toMessage(){
      this.$router.push({path:'/layout'})
    },
    getSession(){
      this.loginform.username = sessionStorage.getItem("1")
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