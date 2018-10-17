<template>
    <div>
      <el-button type="primary" size="mini">新增</el-button>
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
          <template  scope="scope" v-if="title.label=='操作'">
          <el-button
            size="mini"
            v-for="(item,i) in scope.row.operation"
            :key="i"
            :type="item.type">{{item.name}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            tableData:[
              {name:'深圳',country:'中国',city:'深圳',address:'福田',type:'注册地址',describe:'描述1',operation:[{name:'编辑',type:'primary'},{name:'删除',type:'danger'}]}
            ],
            tableDataTitle:[
              {type:'selection',width:55},
              {prop:'name',label:'名称',width:120},
              {prop:'country',label:'国家/地区',width:120},
              {prop:'city',label:'城市',width:120},
              {prop:'address',label:'详细地址',width:180},
              {prop:'type',label:'类型',width:180},
              {prop:'describe',label:'描述',width:180},
              {label:'操作',width:180},
            ]
          }
      },
    }
</script>

<style scoped>
.table{
  width: 100%;
  margin-top: 10px;
}
</style>
