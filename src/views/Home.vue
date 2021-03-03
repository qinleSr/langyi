<template>
  <div class="home">
    <div class="Login_box">
      <div class="right_box">
        <img src="../assets/img/1.jpg" />
      </div>
      <div class="Right_box">
        <div class="Login_title">后台管理中心</div>
        <div class="user_input">
          <img src="../assets/img/15.png" />
          <input placeholder="用户名" v-model="user_name" maxlength="8" />
        </div>
        <div class="user_input">
          <img src="../assets/img/16.png" />
          <input placeholder="密码" type="password" v-model="password" maxlength="11"/>
        </div>
        <div class="Right_footer">
          <div class="footer_left">
            <input type="radio">
            <div class="footer_leftText">记住密码</div>
          </div>
          <div class="footer_rigth">忘记密码？</div>
        </div>
        <div class="login_btn" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      user_name:'',
      password:''
    }
  },
  mounted(){},
  methods:{
// 登录事件
login(){
  if(this.user_name==''){
     this.$message.error('请您输入您的用户名，谢谢!');
  }else if(this.password==''){
    this.$message.error('请您输入您的密码，谢谢!');
  }else if (this.user_name!='admin' && this.password!='123456'){
     this.$message.error('请输入正确的用户名或密码!');
  }else{
    this.$message.success('恭喜您登录成功!');
    this.$router.push({path:'/index'})
  }
}
  },
  components: {}
};
</script>
<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/login.css";

</style>
