<template>
  <div class="layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"
          ><el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="2">
              <img src="../../assets/img/menu_list/1.png" alt="" />
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        activeIndex2: "",
      };
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="less">
.layout,
.el-container {
  height: 100%;
}
.el-header {
  background-color: #60534b;
}
.el-aside {
  background-color: #323234;
}
.el-footer {
  background-color: #60534b;
}
</style>