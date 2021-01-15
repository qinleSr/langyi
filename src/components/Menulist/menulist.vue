<template>
<div>
<div class="toggle-button" @click="toggle">|||</div>
<el-menu  
      unique-opened
      :collapse='iscolshow'
      router
      :collapse-transition='false'
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#212125"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item :index="'/index'">
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
        <el-submenu index="1-1">
          <template slot="title">客户档案管理</template>
          <el-menu-item :index=" '/Customer' ">客户信息管理</el-menu-item>
          <el-menu-item index="1-1-1">客户跟踪管理</el-menu-item>
        </el-submenu>
         <el-submenu index="1-2">
          <template slot="title">合同管理</template>
          <el-menu-item index="1-2-1">签约管理</el-menu-item>
          <el-menu-item index="1-2-2">套餐管理</el-menu-item>
          <el-menu-item index="1-2-2">退签管理</el-menu-item>
        </el-submenu>
          <el-menu-item index="1-3">孕期维护管理</el-menu-item>
          <el-menu-item index="1-4">人事管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
        <span >客房管理</span>
          </template>
        <el-menu-item-group>
        <el-menu-item index="1-1">房态管理</el-menu-item>
          <el-menu-item index="1-2">入所服务</el-menu-item>
          <el-menu-item index="1-3">出所服务</el-menu-item>
          <el-menu-item index="1-4">管家中心</el-menu-item>
          <el-menu-item index="1-5">增值服务</el-menu-item>
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
</div>

</template>
<script>
export default {
    name:'menulist',
     data(){
    return{
      index:'',
      iscolshow:false
    }
  },
  created(){},
  mounted(){},
  methods:{
       handleOpen(key, keyPath) {
        // this.idnex=key
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      // 点击按钮折叠菜单
      toggle(){
        this.iscolshow=!this.iscolshow
        this.$emit('iscolshow',  this.iscolshow)
      }
  }
}
</script>
<style  scoped>
.el-menu{
  height: 100%;
  border-right: none;
}
.toggle-button{
  background: #212125;
  color: #fff;
  text-align: center;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: .2rem;
  cursor: pointer;

}
</style>