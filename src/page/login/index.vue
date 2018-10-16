<template>
    <div class="bg">
      <el-card class="box-card">
        <el-input v-model="companyName" placeholder="公司名"></el-input>
        <el-input v-model="phoneNumber" placeholder="手机号"></el-input>
        <el-input v-model="password" placeholder="密码" type="password"></el-input>
        <el-checkbox v-model="remember">记住密码</el-checkbox>
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
          remember:'',
        }
      },
      created() {
        let user = this.getItem('userInfo');
        if(user){
          this.remember = true;
          this.companyName = user.companyName;
          this.phoneNumber = user.phoneNumber;
          this.password = user.password;
        }
      },
      methods: {
        login(){
          // if(this.companyName=='宏顺集团'&&this.phoneNumber=='18475626356'&&this.password=='123456'){
          if(this.companyName=='宏'&&this.phoneNumber=='1'&&this.password=='123456'){
            if(this.remember){//记住密码
              this.setItem('userInfo',{companyName:this.companyName,phoneNumber:this.phoneNumber,password:this.password})
            }else{
              this.removeItem('userInfo');
            }
            this.$router.push({path: '/home ', query: {}})
            location. reload()
          }else{
            this.$message({
              showClose: true,
              message: '请输入正确的公司名，手机号和密码！',
              type: 'error'
            });
          }
        },
        // localStorage.setItem(key,value)：将value存储到key字段
        setItem(name,val){
          localStorage.setItem(name,JSON.stringify(val))
        },
        // localStorage.getItem(key):获取指定key本地存储的值
        getItem(name){
          return JSON.parse(localStorage.getItem(name))
        },
        // localStorage.removeItem(key):删除指定key本地存储的值
        removeItem(name){
          localStorage.removeItem(name)
       },
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
      .el-input,.el-checkbox{
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
