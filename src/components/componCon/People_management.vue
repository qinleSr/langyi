<template>
  <!-- 产康管理中内部管理人员管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <Bread style="margin-left: 20px"></Bread>
        <div class="Tab_Right">
          <div class="Right_items">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle">新增</div>
          </div>
          <div class="Right_items">
            <img src="../../assets/img/12.png" />
            <div class="Right_itemsTitle">修改</div>
          </div>
          <div class="Right_items">
            <img src="../../assets/img/13.png" />
            <div class="Right_itemsTitle">查看</div>
          </div>

          <div class="Right_items">
            <img src="../../assets/img/14.png" />
            <div class="Right_itemsTitle">导出</div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="All_head">
          <Search class="Search"></Search>
          <div class="All_headRight">
            <div class="Time_title">部门</div>
            <select>
              <option>全部套餐</option>
              <option>产康中心</option>
              <option>佛跳墙</option>
              <option>佛跳墙</option>
            </select>
            <div class="Time_title">状态</div>
            <select>
              <option>在职</option>
              <option>离职</option>
            </select>
          </div>
        </div>
        <Maintenance :tableData="tableData" :tableLabel="tableLabel" :config="config">
          <template v-slot:edit>
            <button class="slot_btn">编辑</button>
            <button class="slot_btn">查看</button>
          </template>
        </Maintenance>
      </div>
    </div>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import Bread from "../Business/Bread";
import { employeeList, addEmployee } from "../../api/production/employee_admin";
export default {
  name: "customer",
  components: { Maintenance, Search, Bread },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          department: "产康中心",
          position: "产康师",
          user_name: "张一二",
          birth_day: "2020-4-30",
          entry_date: "2020-4-30",
          obtainment_date: "2020-4-30",
          user_phone: "15555828930",
          status: "在职",
          note: "",
        },
      ],
      tableLabel: [
        {
          prop: "jid",
          label: "部门",
        },
        {
          prop: "jids",
          label: "职位",
        },
        {
          prop: "ename",
          label: "姓名",
        },
        {
          prop: "birth_time",
          label: "出生日期",
          width: "200",
        },
        {
          prop: "in_the_time",
          label: "入职日期",
          width: "200",
        },
        {
          prop: "positive_time",
          label: "转正日期",
          width: "200",
        },
        {
          prop: "mobile",
          label: "联系方式",
          width: "200",
        },
        {
          prop: "status",
          label: "状态",
        },
        {
          prop: "note",
          label: "备注",
          width: "250",
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
    };
  },
  created() {
    this.getemployeeList();
  },
  mounted() {},

  methods: {
    // 获取人员管理列表
    getemployeeList() {
      employeeList()
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message.success("获取成功");
            this.tableData = res.data.data.data;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
  },
};
</script>
<style scoped>
.CustmerBox {
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  border-radius: 3px;
}
.CustmerBox_Head .Tab {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
}
.Tab .Tab_Right {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.Tab_Right .Right_items {
  width: 100px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.Tab_Right .Right_items .Right_itemsTitle {
  padding: 0 10px;
}
.el-button--primary {
  background: #c19a68;
  color: #fff;
  border-color: #c19a68;
}
.All_head {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
}
.All_head .Search {
  flex: 1;
  min-width: 350px;
}
.All_head .All_headRight {
  flex: 1;
  min-width: 530px;
}
.All_head .All_headRight select {
  height: 35px;
  padding: 0 50px 0 10px;
  margin: 0 10px;
  font-size: 16px;
  border: 1px solid #eee;
  border-radius: 3px;
}
.All_headRight select:focus {
  outline: 0;
}
.All_head .Choos_Time {
  display: flex;
  align-items: center;
  min-width: 490px;
}
.All_head .Choos_Time .Time_title {
  font-size: 20px;
  margin: 0 10px;
}
.All_headRight .el-date-picker:active {
  outline: 0;
  border-color: none;
}
.slot_btn {
  border: 0;
  background: #c19a68;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
}
.All_headRight {
  display: flex;
  align-items: center;
}
.All_head {
  display: flex;
  justify-content: space-between;
}
</style>
