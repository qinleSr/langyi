<template>
  <div class="about">
    <el-container>
      <!-- 头部区域 -->
      <el-header style="padding: 0; height: 80px">
        <nav-bar> </nav-bar>
      </el-header>
      <el-container>
        <!-- 左侧菜单栏区域 -->
        <el-aside class="test-1" :width="iscolshow ? '64px' : '200px'">
          <Menulist @iscolshow="child"></Menulist>
        </el-aside>
        <el-container>
          <!-- 右侧内容区域 -->
          <el-main style="height: 100%; padding: 0">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <!-- 底部区域 -->
      <el-footer style="padding: 0; height: 80px; display: flex">
        <div class="footer_rightBox">
          <div class="rightBox_time">
            <div style="margin-bottom: 5px">{{ dateTime }}</div>
            <div>{{ Time }}</div>
          </div>
          <img src="../assets/img/menu_list/time.png" />
        </div>
        <Footer style=" flex: 1"></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import navBar from "../components/navBar/navBar";
import Menulist from "../components/Menulist/menulist";
import Footer from "../components/Footer/footer.vue";

export default {
  components: { navBar, Footer, Menulist },
  name: "Index",
  data() {
    return {
      dateTime: "2020-03-11",
      Time: "09:00:00",
      iscolshow: false,
      url: "Customer",
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
      // setInterval(this.nowTimes, 1000);
      // window.clearInterval();
    },
    // 点击按钮折叠菜单
    child() {
      this.iscolshow = !this.iscolshow;
    },
  },
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
.el-header {
  height: 80px;
}
.el-aside {
  height: 810px;
  overflow: hidden;
}
.about,
.el-container,
.el-aside {
  height: 100%;
}
.rightBox_time {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.footer_rightBox {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
}
.footer_rightBox img {
  margin: 0;
}
.footer_rightBox .rightBox_time {
  margin: 0;
}
.el-aside {
  /* 滚动条 */
  /* overflow-y: scroll; */
}
.el-container {
  overflow: hidden;
  margin-bottom: 80px;
}
.el-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(193, 193, 193);
  background: #535353;
}
.test-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(33, 33, 37);
  border-radius: 10px;
  background: #ededed;
}
@import "../assets/css/base.css";
@import "../assets/css/index.css";
</style>
