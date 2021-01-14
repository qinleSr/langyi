<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <template >
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >客资管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >客房管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >护理管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >产康管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >膳食管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >财务管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >行政管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >人事管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >报表管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="11">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >审批管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="12">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >门店管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="13">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >设置管理</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="14">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >个人中心</span>
          </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>
<script>
export default {
    name:'menulist',
     data(){
    return{}
  },
  created(){},
  mounted(){},
  methods:{
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>
<style  scoped>
.el-menu{
  height: 100%;
}
</style>