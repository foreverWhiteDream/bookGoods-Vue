<template>

  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 200px;padding-left: 30px; font-weight: bold; color: dodgerblue" >图书管理系统</div>
    <div style="flex: 1">
      <el-image
          style="height: 90%;width: 44px;margin-left: 1100px; border-radius: 50%;"
          src="https://tupian.qqw21.com/article/UploadPic/2021-1/20211722215388977.jpg"
      ></el-image>
    </div>
    <div style="padding: 17px 0 30px 0">
      <el-dropdown @command="handleCommand">

    <span class="el-dropdown-link">
      用户<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">用户信息</el-dropdown-item>
            <el-dropdown-item command="b">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  created() {
   // this.loginuser();
  },
  methods:{
    loginuser(username, password){

      this.user.username=username;
      this.user.password=password
    }
  }
}
</script>

<style scoped>

</style>
