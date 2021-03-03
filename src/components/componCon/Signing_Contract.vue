<template>
  <!-- 签约管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
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
            <select>
              <option>全部状态</option>
              <option>跟进中</option>
              <option>已签约</option>
              <option>暂停</option>
              <option>审核中</option>
            </select>
            <select>
              <option>渠道来源</option>
              <option>老客户推荐</option>
              <option>新用户签约</option>
            </select>
            <select>
              <option>预定套餐</option>
              <option>佛跳墙</option>
              <option>佛跳墙</option>
              <option>佛跳墙</option>
            </select>
          </div>
          <div class="Choos_Time">
            <div class="Time_title">签约日期</div>
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
        >
          <el-button type="primary">主要按钮</el-button>
        </common-table>
      </div>
    </div>
  </div>
</template>
<script>
import CommonTable from "../Business/table.vue";
import Search from "../Conpontool/Search.vue";
import { ContractList } from "../../api/user_list";
export default {
  name: "customer",
  components: { CommonTable, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          signing_date: "2020-4-30",
          user_name: "张一二",
          user_phone: "15555828930",
          contract_no: "HZCLYGX20200522025",
          check_in_date: "2020-4-30",
          leave_date: "2020-4-30",
          hospital: "省妇保医院",
          due_date: "2020-4-30",
          customer_source: "老客户推荐",
          due_days: "28",
          due_room: "208",
          due_food: "跟进中",
          customer_price: "189,800",
          received_deposit: "89,800",
        },
      ],
      tableLabel: [
        {
          prop: "signing_date",
          label: "签约日期",
        },
        {
          prop: "user_name",
          label: "姓名",
        },
        {
          prop: "user_phone",
          label: "联系方式",
        },
        {
          prop: "contract_no",
          label: "合同编号",
          width: "200",
        },
        {
          prop: "check_in_date",
          label: "入住日期",
          width: "100",
        },
        {
          prop: "leave_date",
          label: "出所日期",
          width: "100",
        },
        {
          prop: "hospital",
          label: "分娩医院",
          width: "100",
        },
        {
          prop: "due_date",
          label: "预产期",
        },
        {
          prop: "customer_source",
          label: "客户来源",
        },
        {
          prop: "due_days",
          label: "预定天数",
          width: "100",
        },
        {
          prop: "due_room",
          label: "预定房间",
          width: "100",
        },
        {
          prop: "due_food",
          label: "预定套餐",
        },
        {
          prop: "customer_price",
          label: "合同价格",
          width: "100",
        },
        {
          prop: "received_deposit",
          label: "已收定金",
          width: "100",
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
    };
  },
  created() {},
  mounted() {
    this.getList();
  },

  methods: {
    /** 查询列表 */
    getList() {
      ContractList().then((res) => {
        console.log(res.data.data);
      });
    },
  },
};
</script>
<style  scoped>
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