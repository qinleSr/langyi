<template>
  <div style="height:810px;">
    <div class="toggle-button" @click="toggle">|||</div>
    <el-menu
      unique-opened
      :collapse="iscolshow"
      menu-trigger="click"
      router
      :collapse-transition="false"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#212125"
      :default-active="this.$route.path"
      text-color="#fff"
      active-text-color="#B59461"
    >
      <el-menu-item :index="'/index'" class="index">
        <template>
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>客资管理</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="2-1-1" popper-append-to-body>
            <template slot="title">客户档案管理</template>
            <el-menu-item :index=" '/Customer' ">客户信息管理</el-menu-item>
            <el-menu-item :index="'/CustomeTrack'">客户跟踪管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2-1-2">
            <template slot="title">合同管理</template>
            <el-menu-item :index="'/SigningContract'">签约管理</el-menu-item>
            <el-menu-item :index="'/PackageManagement'">套餐管理</el-menu-item>
            <el-menu-item :index="'/BackSign'">退签管理</el-menu-item>
          </el-submenu>
          <el-menu-item :index="'/PregnancyMaintenance'" class="only_items">孕期维护管理</el-menu-item>
          <el-menu-item :index="'/PersonnelManagement'" class="only_items">人事管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>客房管理</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="3-1">
            <template slot="title">房态管理</template>
            <el-menu-item :index="'/HouseState'">房态信息表</el-menu-item>
            <el-menu-item :index="'/GuestRooms'">客房信息表(列表)</el-menu-item>
            <el-menu-item :index="'/GuestRoom'">客房信息表(填表)</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="1-2">入所服务</el-menu-item> -->
          <el-submenu index="3-2">
            <template slot="title">入所服务</template>
            <el-menu-item :index="'/ArrivalNotice'">入住通知</el-menu-item>
            <el-menu-item :index="'/Innotice'">入所准备</el-menu-item>
            <el-menu-item :index="'/Inhandle'">入所办理</el-menu-item>
          </el-submenu>
          <el-submenu index="3-3">
            <template slot="title">出所服务</template>
            <el-menu-item :index="'/LeaveNotice'">出所办理</el-menu-item>
            <el-menu-item :index="'/Checkroom'">客房检查</el-menu-item>
            <el-menu-item :index="'/Maintenance'">维护跟踪</el-menu-item>
          </el-submenu>
          <el-submenu index="3-4">
            <template slot="title">管家中心</template>
            <el-menu-item :index="'/MotherLog'">妈妈日志</el-menu-item>
            <el-menu-item :index="'/DirectionalService'">所内定向服务</el-menu-item>
            <el-menu-item :index="'/Complaints'">客户/申投诉管理</el-menu-item>
            <el-menu-item :index="'/CustomerSatisfaction'">客户满意度</el-menu-item>
          </el-submenu>
          <el-submenu index="3-5">
            <template slot="title">增值服务</template>
            <el-menu-item :index="'/SettleAccountsDetail'">结账明细</el-menu-item>
            <el-menu-item :index="'/ProductSet'">产品设置</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>护理管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="'/NursingRecord'" class="only_items">在所护理记录</el-menu-item>
          <el-submenu index="4-2">
            <template slot="title">护士管理</template>
            <el-menu-item :index="'/NurseManagement'">护士人员管理</el-menu-item>
            <el-menu-item :index="'/NurseScheduling'">护士排班</el-menu-item>
            <el-menu-item :index="'/NurseAttendance'">护士考勤</el-menu-item>
          </el-submenu>
          <el-submenu index="4-3">
            <template slot="title">专护师管理</template>
            <el-menu-item :index="'/ProfessionalCare'">专护师信息</el-menu-item>
            <el-menu-item :index="'/CarerWage'">专护师薪资结算</el-menu-item>
          </el-submenu>
          <el-menu-item :index="'/NursingSubscribe'" class="only_items">护理预约</el-menu-item>
          <el-menu-item :index="'/NursingReport'" class="only_items">护理报表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>产康管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="'/ProductionIndex'" class="index">
            <template>
              <i class="el-icon-location"></i>
              <span slot="title">产康首页</span>
            </template>
          </el-menu-item>
          <el-submenu index="5-2">
            <template slot="title">产康客户管理</template>
            <el-menu-item :index="'/CustomerInformation'">产康客户信息管理</el-menu-item>
            <el-menu-item :index="'/CustomerType'">客户分类管理</el-menu-item>
            <el-menu-item :index="'/PhysicalAssessment'">客户身体评价</el-menu-item>
            <el-menu-item :index="'/CustomerReturn'">产康客户回访</el-menu-item>
          </el-submenu>
          <el-submenu index="5-3">
            <template slot="title">产康项目管理</template>
            <el-menu-item :index="'/AddedServices'">产康增值服务</el-menu-item>
            <el-menu-item :index="'/DueProject'">项目预约</el-menu-item>
            <el-menu-item :index="'/ProductControl'">产品管理</el-menu-item>
          </el-submenu>
          <el-submenu index="5-4">
            <template slot="title">内部管理</template>
            <el-menu-item :index="'/PeopleManagement'">人员管理</el-menu-item>
            <el-menu-item :index="'/performanceRecord'">业绩记录</el-menu-item>
            <el-menu-item :index="'/CraftRecord'">手工记录</el-menu-item>
          </el-submenu>
          <el-menu-item :index="'/PersonnelAdmin'" class="only_items">人事管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>膳食管理</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="6-1">
            <template slot="title">月子餐出品</template>
            <el-menu-item :index="'/ConfinementMenu'">月子餐单</el-menu-item>
            <el-menu-item :index="'/RowMeal'">月子排餐</el-menu-item>
            <el-menu-item :index="'/NutritionAssessment'">客户营养评价</el-menu-item>
            <el-menu-item :index="'/DietaryTaboos'">饮食禁忌</el-menu-item>
          </el-submenu>
          <el-submenu index="6-2">
            <template slot="title">膳食部管理</template>
            <el-menu-item :index="'/IngredientsProcurement'">食材采购</el-menu-item>
            <el-menu-item :index="'/KitchenInventory'">厨房库存</el-menu-item>
          </el-submenu>
          <el-menu-item :index="'/DepartmentTypesettingAdmin'" class="only_items">部门排版管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="''">aaa</el-menu-item>
          <el-menu-item index="7-1-2">选项2</el-menu-item>
          <el-menu-item index="7-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>行政管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1-1">选项1</el-menu-item>
          <el-menu-item index="8-1-2">选项2</el-menu-item>
          <el-menu-item index="8-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>人事管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1-1">选项1</el-menu-item>
          <el-menu-item index="9-1-2">选项2</el-menu-item>
          <el-menu-item index="9-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>报表管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="10-1-1">选项1</el-menu-item>
          <el-menu-item index="10-1-2">选项2</el-menu-item>
          <el-menu-item index="10-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="11">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>审批管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="11-1-1">选项1</el-menu-item>
          <el-menu-item index="11-1-2">选项2</el-menu-item>
          <el-menu-item index="11-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="12">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>门店管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="12-1-1">选项1</el-menu-item>
          <el-menu-item index="12-1-2">选项2</el-menu-item>
          <el-menu-item index="12-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="13">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>设置管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="13-1-1">选项1</el-menu-item>
          <el-menu-item index="13-1-2">选项2</el-menu-item>
          <el-menu-item index="13-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="14">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>个人中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="14-1-1">选项1</el-menu-item>
          <el-menu-item index="14-1-2">选项2</el-menu-item>
          <el-menu-item index="14-1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "menulist",
  data() {
    return {
      index: "",
      iscolshow: false
    };
  },
  created() {},
  mounted() {
    let start = window.location.href.lastIndexOf("/");
    let path = window.location.href.slice(start + 1);
    this.activeIndex = path;
  },
  methods: {
    handleOpen(key, keyPath) {
      // this.idnex=key
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 点击按钮折叠菜单
    toggle() {
      this.iscolshow = !this.iscolshow;
      this.$emit("iscolshow", this.iscolshow);
    }
  }
};
</script>
<style  >
.el-menu {
  height: 100%;
  border-right: none;
}
.el-menu .index {
  background: #212125 !important;
  color: #fff !important;
}
.el-menu .only_items {
  background: #212125 !important;
  color: #fff !important;
}
.el-menu-item {
  background: #e7e7e7 !important;
  color: #212125 !important;
}
.el-menu-item.is-active {
  background: #b59461 !important;
}
.el-menu--horizontal {
  /* left: 0 !important; */
  display: block;
}

.el-menu-item-group__title {
  padding: 0;
}
.el-menu--popup-right-start {
  margin-left: 0px;
  margin-right: 0px;
  opacity: 0.8;
}
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  transform: rotateZ(0deg);
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  margin-left: 50px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  border-bottom: 0;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 0;
}
.el-submenu.is-active .el-submenu__title {
  border-bottom: 0;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  border-bottom: 0;
}
.el-menu--horizontal > div > .el-submenu {
  float: left;
}
.el-menu--horizontal > div > .el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
.el-menu--horizontal > div > .el-submenu .el-submenu__title {
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid transparent;
  color: #909399;
}

.toggle-button {
  background: #212125;
  color: #fff;
  text-align: center;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.2rem;
  cursor: pointer;
}
</style>