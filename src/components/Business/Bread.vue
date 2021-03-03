<template>
  <!-- 面包屑 -->
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
       <el-breadcrumb-item :to="{path:'/IndexCon'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{this.$route.meta.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
/* .bread {
  background-color: #fff;
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border: 1px #efefef solid;
  box-sizing: border-box;
  box-shadow: 1px 2px 4px #bababa;
  margin-bottom: 36px;
} */
.el-icon-arrow-right:before {
  color: #000;
}
.el-breadcrumb__item {
  font-size: 20px;
  line-height: 50px;
}
.el-breadcrumb__inner {
  cursor: pointer !important;
}
</style>