<template>

  <div style="padding: 10px">

<!--    功能区域-->
    <div style="margin: 10px 0">
<!--      <el-button type="primary" @click="add">新增</el-button>-->
<!--      <el-button type="primary" @click="updata">修改</el-button>-->
<!--      <el-button type="primary" @click="deletel">删除</el-button>-->
      <div style="margin: 10px 0;float: right">
        <el-input v-model="name" placeholder="请输入关键字" style="width: 200px" clearable></el-input>
        <el-button type="primary" @click="load" >查询</el-button>
      </div>
    </div>

<!--    搜索区域-->

<!--<div style="width: calc(180vh - 200px);height: calc(100vh - 50px)">-->

<!--    下部表格数据-->
<!--    stripe 斑马纹-->
    <el-table :data="tableData" stripe style="width:  calc(180vh - 200px)">
      <el-table-column prop="id" label="序号"  width="150px" style="width: 30%"  sortable/>
      <el-table-column  prop="book_img" label="图片" width="200px" style="width: 30%">
        <template v-slot="scope">
          <el-image :src="scope.row.book_img" style="height: 120px;width: 120px"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="book_name" label="书名" style="width: 30%"/>
      <el-table-column prop="book_author" label="作者" style="width: 40px"/>
      <el-table-column prop="book_info" label="简介" style="width: 30%"/>


<!--      <el-table-column fixed='right' label="Operations" width="120">-->
<!--        <template #default>-->
<!--          <el-button link type="primary" size="small" @click="handleClick">-->
<!--            编辑-->
<!--          </el-button>-->
<!--          <el-button link type="primary" size="small">-->
<!--            删除-->
<!--          </el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>


<!--</div>-->

<!--    分页功能-->
    <el-pagination
        v-model:currentPage="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[5, 10, 15]"
        page-size="pageSize"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />



    <el-dialog v-model="dialogVisible" title="新增数据" width="30%" :before-close="handleClose">
      <el-form :model="form" label-width="120px" style="width: 80%">


        <el-form-item label="单词">
          <el-input v-model="form.indexId"></el-input>
        </el-form-item>

        <el-form-item label="翻译">
          <el-input v-model="form.translation"></el-input>
        </el-form-item>

      </el-form>


      <template #footer>
      <span class="dialog-footer">

        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>


      </span>
      </template>
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


  //搜索框
  name:'',
  //表单对象
  form:{},



  //表单是否显示
  dialogVisible:false,


  currentPage4: 1,//第几页
  pageSize: 15,//每页多少条数据

  // 查询到的数据多少条
  total:0,

    //请求到的数据
    tableData:[]
}
  },




  created() {
    // this.getAll();
    this.load();
  },
  methods:{

    load(){
      axios.get('http://localhost:8085/item/findByPageName',{
        params: {
          name: this.name,
          currentPage: this.currentPage4,
          pageSize: this.pageSize
        }
      }).then((res) =>{
        if (res.data.item !== []) {

          if (this.tableData !== [])
            this.$message.success("查询成功")

          this.tableData = res.data.items
          this.total = res.data.data.total

        }
        else{
          this.$message.error("查询失败")
        }

      })

    },

    // 提交form对象到后端
    save(){
        axios.post('http://localhost/words',this.form).then((res) =>{
          console.log(res)
        })
    },




    // 功能按钮区
// -------------
    //新增按钮
    add(){
      this.dialogVisible = true;
      this.form={}
    },


    deletel(){

    },

    updata(){

    },





// -------------------------------------


    handleSizeChange( pageSize){
      this.pageSize = pageSize;
      this.load();
    },


    handleCurrentChange(pageNum){
      this.currentPage4 = pageNum;
      this.load();

    }

  },
}

</script>
