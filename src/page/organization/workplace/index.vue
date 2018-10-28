<template>
  <div>
    <el-button type="primary" size="mini" @click="add">新增</el-button>
    <el-button type="primary" size="mini">导入</el-button>
    <el-button type="primary" size="mini">导出</el-button>
    <el-table
      :data="tableData"
      border
      class="table">
      <el-table-column
        v-for="(title,index) in tableDataTitle"
        :key="index"
        :type="title.type"
        :prop="title.prop"
        :label="title.label"
        :width="title.width"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center">
        <template scope="scope">
          <el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="deleteData(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <addPlace :addShow="addShow" :editData = "editData" :title="title" @dialogClose="dialogClose" @submit="submit"></addPlace>
  </div>
</template>

<script>
  import addPlace from './addPlace'

  export default {
    name: "index",
    data() {
      return {
        tableData: [
          {id:1,name: '深圳', country: '中国', city: '深圳', address: '福田', type: '注册地址', describe: '描述1'}
        ],
        tableDataTitle: [
          {type: 'selection', width: 60},
          {prop: 'name', label: '名称', width: 180},
          {prop: 'country', label: '国家/地区', width: 180},
          {prop: 'city', label: '城市', width: 120},
          {prop: 'address', label: '详细地址', width: 180},
          {prop: 'type', label: '类型', width: 180},
          {prop: 'describe', label: '描述', width: 180},
        ],
        addShow: false,
        title: '',
        editData:{}
      }
    },
    methods: {
      add() {
        this.title = '新增';
        this.editData = {};
        this.addShow = true;
      },
      edit(data) {
        this.title = '编辑';
        this.editData =  data;//克隆
        this.addShow = true;
      },
      deleteData(data) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.forEach((res,index)=>{
            if(res.id==data.id){
              this.tableData.splice(index,1)
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      dialogClose() {
        this.addShow = false;
      },
      submit(data,type) {
        if(type==1){
          this.tableData.push(data);
        }else if(type==2){
          this.tableData.forEach(res=>{
            if(res.id==data.id){
              Object.assign(res,data)//浅拷贝
            }
          })
        }
      }
    },
    components: {
      addPlace
    }
  }
</script>

<style scoped>
  .table {
    width: 100%;
    margin-top: 10px;
  }
</style>
