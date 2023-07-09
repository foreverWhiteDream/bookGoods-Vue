<template>
  <body id="">
  <el-form class="login-container"  label-position="left" label-width="0px">
    <h3 class="login_title">
      <el-button @click="toLogin()">返回登陆</el-button>
      系统登陆

    </h3>
    <el-form-item>
      <el-input type="text" v-model="loginform.userName" autocomplete="off" placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item >
      <el-input type="password" v-model="loginform.password"  autocomplete="off" placeholder="密码"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" style="width: 100%;background: #505458;border: none;" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      loginform: {
        userName:"",
        password:""
      }
    }
  },
  methods: {
    onSubmit() {
      axios.post('http://localhost:8569/users',this.loginform).then((res)=>{
        if(res.data.code === 20011){
          this.$message.success("注册成功")
          this.$router.push({path:'/'})
        }
      })
    },
    toLogin(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped>

</style>