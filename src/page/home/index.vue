<template>
    <div>
      <Header></Header>
        <div class="left">
          <Sidebar></Sidebar>
        </div>
      <div class="main">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import Header from './header'
  import Sidebar from './sidebar'
  export default {
    data () {
      return {

      }
    },
    created() {},
    methods: {
      login(){
        this.$router.push({path: '/home ', query: {}})
      }
    },
    computed: {},
    watch: {},

    components:{
      Header,
      Sidebar
    }
  }
</script>

<style lang="stylus" scoped>
  .left{
    width :200px;
    float: left;
    display inline-block;
  }
  .el-header{
    padding :0;
  }
  .main{
    float: left;
    display: inline-block;
  }
</style>
