<template>
  <body id="poster">
  <el-form class="login-container"  label-position="left" label-width="0px">
    <h3 class="login_title">
      修改书籍
    </h3>
    <el-form-item>
      <el-input type="text" v-model="loginform.id" autocomplete="off" placeholder="ID"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="loginform.book_name" autocomplete="off" placeholder="书名"></el-input>
    </el-form-item>

    <el-form-item >
      <el-input type="password" v-model="loginform.book_img"  autocomplete="off" placeholder="网页图片"></el-input>
    </el-form-item>

    <el-form-item >
      <el-input type="password" v-model="loginform.book_author"  autocomplete="off" placeholder="作者"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input type="password" v-model="loginform.book_info"  autocomplete="off" placeholder="详情"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input type="password" v-model="loginform.book_download"  autocomplete="off" placeholder="链接"></el-input>
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
  name: "updateBook",
  components:{
    Header,
    Aside,
  },
  created() {

  },
  data() {
    return {
      loginform: {
        id:'',
        book_name: '',
        book_img: '',
        book_author: '',
        book_info: '',
        book_download: ''
      }
    }
  },
  methods: {
    onSubmit() {
      axios.get('http://localhost:8085/item/updateItem',{
        params: {
          id :this.loginform.id,
          book_name: this.loginform.book_name,
          book_img: this.loginform.book_img,
          book_author: this.loginform.book_author,
          book_info: this.loginform.book_info,
          book_download: this.loginform.book_download
        }
      }).then((res)=>{
        this.$message.success("修改书籍信息成功")
        this.$router.push({path:'/layout'})
        console.log(res)
      })
    },
    toMessage(){
      this.$router.push({path:'/Home'})
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