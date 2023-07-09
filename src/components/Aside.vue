<template>

      <el-menu
          style="width: 100px; min-height: calc(100vh - 50px);min-width: calc(180vh - 1300px)"
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="1-1"
          default-openeds=""
          text-color="#fff"
      >
        <el-sub-menu index="user" popper-offset="0">
          <template #title>
            <el-icon><location/></el-icon>
            <span>展开</span>
          </template>

          <el-menu-item-group title="">
            <el-menu-item index="1-1" @click="toMain()">首页</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="">
            <el-menu-item index="1-3" @click="toDict()">图书管理</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>个人</template>
            <el-menu-item index="1-4-1" @click="toUser()">个人信息</el-menu-item>
            <el-menu-item index="1-4-1" @click="toUpdate()">修改密码</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>



<!--        <el-menu-item index="2">-->
<!--          <el-icon><icon-menu /></el-icon>-->
<!--          <span>二</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="3" disabled>-->
<!--          <el-icon><document /></el-icon>-->
<!--          <span>三</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="4">-->
<!--          <el-icon><setting /></el-icon>-->
<!--          <span>四</span>-->
<!--        </el-menu-item>-->
      </el-menu>

<!--</div>-->
</template>




<script>
// import location from "@element-plus/icons-vue"

export default {
  name: "Aside",
  data(){
    return{

    }
  },
  methods:{
    toMain(){
      this.$router.push({path:'/layout'})
    },

    toDict(){
      this.$router.push({path:'/Home'})
    },
    toUser(){
      this.$router.push({path:'/User'})
    },
    toUpdate(){
      this.$router.push({path:'/UpdateUser'})
    }

  }



}
</script>

<!--<script lang="ts" setup>-->
<!--import {-->
<!--  Document,-->
<!--  Menu as IconMenu,-->
<!--  Location,-->
<!--  Setting,-->
<!--} from '@element-plus/icons-vue'-->
<!--const handleOpen = (key: string, keyPath: string[]) => {-->
<!--  console.log(key, keyPath)-->
<!--}-->
<!--const handleClose = (key: string, keyPath: string[]) => {-->
<!--  console.log(key, keyPath)-->
<!--}-->
<!--</script>-->

<style scoped>

</style>