<template>
  <div class="home">
   <div class="Login_box">
     <div class="right_box">
        <img src="../assets/img/1.jpg">
     </div>
     <div class="Right_box">
       <div class="Login_title">后台管理中心</div>
       <el-form label-width='0px' class="login_input">
         <el-form-item>
           <el-input v-model="input" placeholder="用户名"></el-input>
         </el-form-item>
          <el-form-item>
 <el-input v-model="input" placeholder="密码"></el-input>
             </el-form-item>
       </el-form>
       
      
     </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  }
}
</script>
<style scoped>
@import '../assets/css/base.css';
@import '../assets/css/login.css';
</style>
