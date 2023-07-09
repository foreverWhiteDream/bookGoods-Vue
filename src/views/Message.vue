<template>

  <div style="padding: 10px">

    <el-form-item>
      <el-button type="primary" style="width: 100%;background: #505458;border: none;" @click="toAdd()">添加书籍</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width: 100%;background: #505458;border: none;" @click="toUpdate()">修改书籍</el-button>
    </el-form-item>

    <el-dialog
        title="提示"
        visible=true
        width="30%"
        center>
    </el-dialog>

  </div>
</template>

<script>


import axios from "axios";

export default {
  name: 'Home',
  components: {

  },

  data(){
    return{
    }
  },




  created() {

  },
  methods: {
    toAdd(){
      this.$router.push({path:'/AddBook'})
    },
    toUpdate(){
      this.$router.push({path:'/UpdateBook'})
    }

  }
}

</script>
