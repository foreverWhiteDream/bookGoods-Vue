<template>

  <div style="padding: 10px">

    <el-image src="https://tupian.qqw21.com/article/UploadPic/2021-1/20211722215388977.jpg" style="height: 200px">
    </el-image>

    <el-table :data="tableData" stripe style="width:  calc(180vh - 200px)">
      <el-table-column prop="username" label="用户名"  width="150px" style="width: 30%"  sortable/>
      <el-table-column prop="address" label="地址" width="200px" style="width: 30%"/>

      <el-table-column prop="phone" label="联系电话" style="width: 30%"/>

    </el-table>

  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";


export default {
  name: "User",
  components:{
    Header,
  },
  data(){
    return{
      //请求到的数据
      tableData:[],
      total:"",
      user: {
        username: '',
        password: ''
      }
    }
  },
  created() {
    this.getsession();
    this.getuser();

  },
  methods:{
    getsession(){
      this.user.username = sessionStorage.getItem("1")
      this.user.password = sessionStorage.getItem("2")



    },
    getuser(){
      axios.post("http://localhost:8085/user/getname",this.user).then((res)=>{
        this.$message.success("登陆成功")
        // console.log(res.data.detail)
        this.tableData = res.data.detail
      })
    }
  }

}
</script>

<style scoped>

</style>