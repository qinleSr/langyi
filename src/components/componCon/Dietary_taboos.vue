<template>
  <!-- 饮食禁忌 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle">新增</div>
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
          <div class="Choos_Time">
            <div class="Time_title">入住日期</div>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 350px"
            ></el-date-picker>
          </div>
        </div>
        <common-table
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        ></common-table>
      </div>
    </div>
  </div>
</template>
<script>
import CommonTable from "../Business/table.vue";
import Search from "../Conpontool/Search.vue";
import { dietaryTaboosList } from "../../api/food/confinement";
export default {
  name: "customer",
  components: { CommonTable, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          user_name: "张一二",
          room_num: "208",
          production_mode: "顺产",
          production_date: "2020-4-30",
          production_hospital: "省妇保",
          baby_sex: "女",
          once_twins: "单胎",
          few_births: "二胎",
          to_date: "2020-4-30",
          leave_date: "2020-4-30",
          in_days: "28",
          food_allergy: "芒果,海鲜",
          food_taboos: "不吃猪肉",
          is_allergy: "猪肉,芹菜",
        },
      ],
      tableLabel: [
        {
          prop: "cname",
          label: "姓名",
          width: "90",
        },
        {
          prop: "room_num",
          label: "房间号",
          width: "90",
        },
        {
          prop: "sc_artion",
          label: "生产方式",
          width: "90",
        },
        {
          prop: "sc_at",
          label: "生产日期",
        },
        {
          prop: "production_hospital",
          label: "生产医院",
        },
        {
          prop: "baby_sex",
          label: "宝宝性别",
          width: "90",
        },
        {
          prop: "once_twins",
          label: "单胎/双胎",
        },
        {
          prop: "few_births",
          label: "胎数",
          width: "90",
        },
        {
          prop: "to_date",
          label: "入所日期",
        },
        {
          prop: "leave_date",
          label: "出所日期",
        },
        {
          prop: "in_days",
          label: "入住天数",
        },
        {
          prop: "swgm",
          label: "食物过敏",
        },
        {
          prop: "swjj",
          label: "食物禁忌",
        },

        {
          prop: "sfyfxsw",
          label: "是否有腹泻的食物",
          width: "200",
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
    this.getDietaryTaboosList();
  },
  mounted() {},

  methods: {
    getDietaryTaboosList() {
      dietaryTaboosList()
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
</style>
