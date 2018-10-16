<template>
    <div class="header">
      <div class="right">
        <ul>
          <li>欢迎{{userInfo.userName}}进入系统！</li>
          <li @click="logOut" class="logout">退出登陆</li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
      data(){
          return{
            userInfo:{
              userName:'吴亦凡',
              userId:1,
            }
          }
      },
      created(){},
      methods:{
        logOut(){
          this.$router.push({path:'/'})
        }
      },
    }


</script>

<style lang="stylus" scoped>
  .header{
    width :100%;
    height: 60px;
    z-index: -1;
    top: 0;
    right: 0;
    background-color: #fff;
    margin-top: 0;
    .right{
      float: right!important;
      margin-right :15px;
      li{
        height :60px;
        line-height :60px;
        color: #999c9e;
        float: left!important;
      }
      .logout{
        cursor :pointer;
      }
    }
  }

</style>
