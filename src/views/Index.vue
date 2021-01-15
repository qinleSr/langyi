<template>
  <div class="about">
    <el-container>
      <!-- 头部区域 -->
      <el-header style="padding:0; ">
        <nav-bar></nav-bar>
      </el-header>
      <el-container>
        <!-- 左侧菜单栏区域 -->
        <el-aside :width="iscolshow?'64px':'200px' ">
          <Menulist @iscolshow='child'></Menulist>
        </el-aside>
        <el-container>
          <!-- 右侧内容区域 -->
          <el-main style="height:100%;padding:0;">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <!-- 底部区域 -->
      <el-footer style="padding:0; height:62px;display:flex;">
        <div class="footer_rightBox">
          <div class="rightBox_time">
            <div>{{dateTime}}</div>
            <div>{{Time}}</div>
          </div>
          <img src="../assets/img/10.png" />
        </div>
        <footer style="background:#5C4A3D;flex: 1;"></footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import navBar from "../components/navBar/navBar";
import Menulist from '../components/Menulist/menulist'
import Footer from "../components/Footer/footer.vue";
export default {
  components: { navBar, Footer,Menulist },
  name: "Index",
  data() {
    return {
      dateTime: "",
      Time: "",
      iscolshow: false,
      url: "Customer"
    };
  },
  created() {},
  mounted() {
    this.nowTimes();
  },
  methods: {
    // 获取系统当前时间
    get_time() {
      var year = new Date().getFullYear();
      var month = new Date().getMonth() + 1;
      var date =
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate();
      var hh =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours();
      var mm =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      var ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      this.dateTime = year + "-" + month + "-" + date;
      this.Time = hh + ":" + mm + ":" + ss;
    },
    // 定时器
    nowTimes() {
      // this.get_time(new Date());
      //   setInterval(this.nowTimes,1000);
      //    window.clearInterval();
    },
    // 点击按钮折叠菜单
    child() {
       this.iscolshow = !this.iscolshow;
    
    }
  }
};
</script>
<style scoped>
.toggle-button {
  background: #212125;
  color: #fff;
  text-align: center;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.2rem;
  cursor: pointer;
}
.el-menu {
  border-right: none;
}
@import "../assets/css/base.css";
@import "../assets/css/index.css";
</style>
