<template>
    <div>
      <ul class="side-menu">
        <li class="nav-header">
          <div>
            <span><img alt="image" class="img-circle" src="./profile_small.jpg"></span>
            <span class="text-name">吴亦凡</span>
            <span class="text-muted">管理员</span>
          </div>
        </li>
        <li>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#2F404F"
            text-color="#a7b1c2"
            active-text-color="#fff">
            <el-submenu v-for="(list,index) in menuList" :key="index" :index="`index`">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{list.name}}</span>
              </template>
              <div v-for="(child,i) in list.childMenu" :key="child.id">
                <div v-if="child.childMenu">
                  <el-submenu :index="`${index+1}-${i+1}`" v-if="list.childMenu">
                    <template slot="title">{{child.name}}</template>
                    <el-menu-item
                      v-for="(child_,j) in child.childMenu"
                      :key="child_.id"
                      :index="`${index+1}-${i+1}-${j+1}`" style="padding:0">
                      <router-link :to="child_.path">{{child_.name}}</router-link></el-menu-item>
                  </el-submenu>
                </div>
                <div v-else>
                  <el-menu-item-group>
                    <el-menu-item :index="`${index+1}-${i+1}`">{{child.name}}</el-menu-item>
                  </el-menu-item-group>
                </div>
              </div>
            </el-submenu>
          </el-menu>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
      data(){
         return{
           menuList:[
             {
               name:'组织规划',
               id:1,
               childMenu:[
                 {name:'基础设置',id:11,childMenu:[{name:'工作地点',id:111,path:'/home/workplace'}]},
                 {name:'法律实体',id:12},
                 {name:'组织架构',id:13},
                 {name:'职位管理',id:14},
                 {name:'汇报关系',id:15,childMenu:[{name:'职位规划',id:151,path:'/home/careerPlanning'},{name:'职位配置',id:152,path:''}]},
               ]
             }
           ]
         }
      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style lang="stylus" scoped>
.side-menu{
  margin-top: -80px;
  min-height :750px;
  width: 200px;
  display: inline-block;
  background-color: #2f4050;
  .nav-header{
    padding: 23px 25px;
    margin-top: 20px;
    background: url(./header-profile.png) no-repeat
    .img-circle {
      border-radius: 50%;
    }
    .text-name{
    color: rgb(223, 228, 237);
      display: block;
    }
    .text-muted {
      color: #8095a8;
    }
  }
  .el-submenu{
    .el-menu-item{
      padding :0;
      a{
        width: 100%;
        padding-left: 60px;
        display: inline-block;
      }
    }
    }
  .el-menu{
    border-right :0;
  }
}
</style>
