<template>
    <div class="bg">
      <el-card class="box-card">
        <el-input v-model="companyName" placeholder="公司名"></el-input>
        <el-input v-model="phoneNumber" placeholder="手机号"></el-input>
        <el-input v-model="password" placeholder="密码"></el-input>
        <el-input v-model="verificationCode" placeholder="验证码"></el-input>
        <el-button type="primary" @click="login" class="login">立即登陆</el-button>
      </el-card>
      </div>
</template>

<script>
    export default {
      data () {
        return {
          companyName:'',
          phoneNumber:'',
          password:'',
          verificationCode:'',
        }
      },
      created() {},
      methods: {
        login(){
          this.$router.push({path: '/home ', query: {}})
          location. reload()
        }
      },
      computed: {},
      watch: {},

      components:{}
    }
</script>

<style lang="stylus" scoped>
  .bg {
    height: 100%;
    width: 100%;
    position: absolute;
    background: url(./background-pc.jpg) no-repeat top center!important;
    background-size: cover!important;
    .box-card{
      width: 360px;
      margin: 0 auto;
      position: relative;
      top: 30%;
      .el-input{
        margin-bottom: 10px;
      }
      .login{
        width: 320px;
        border-radius: 3px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        background-color: #19aa8d;
      }
    }
  }
</style>
