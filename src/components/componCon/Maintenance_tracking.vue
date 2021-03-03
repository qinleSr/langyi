<template>
<!-- 维护跟踪 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" >
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
              <option>全部套餐</option>
              <option>佛跳墙</option>
              <option>佛跳墙</option>
              <option>佛跳墙</option>
            </select>
            <select>
              <option>生产方式</option>
              <option>剖腹产</option>
              <option>顺产</option>
            </select>
          </div>
          <div class="Choos_Time">
            <div class="Time_title">入住日期</div>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 350px;"
            ></el-date-picker>
          </div>
        </div>
          <Maintenance :tableData="tableData" :tableLabel="tableLabel" :config="config">
             <template v-slot:edit>
            <button class="slot_btn" @click="edit_msg">编辑</button>
             <button class="slot_btn" @click="look_msg">查看</button>
          </template>
            </Maintenance> 
      </div>
    </div>
    <!-- 编辑信息对话框 -->
    <el-dialog title="提示" :visible.sync="dialogEditMsg" width="50%">
  <div class="edit_msgBox">
    <div class="msgBox_row">
      <div class="msgbox_items">
        <div class="msgbox_title">
          <span>回访日期</span>
        </div>
         <el-date-picker v-model="return_time" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="msgbox_items" style="width: 50%;margin-left: 100px;">
        <div class="msgbox_title">
          <span>回访内容</span>
        </div>
         <el-input v-model="return_Con"></el-input>
      </div>
    </div>
    <div class="msgBox_row">
      <div class="msgbox_items">
        <div class="msgbox_title">
          <span>责任人</span>
        </div>
         <el-input v-model="people"></el-input>
      </div>
      <div class="msgbox_items" style="width: 50%;margin-left: 100px;">
        <div class="msgbox_title">
          <span>备注</span>
        </div>
         <el-input v-model="note"></el-input>
      </div>
    </div>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogEditMsg = false">取 消</el-button>
    <el-button type="primary" @click="dialogEditMsg = false">确 定</el-button>
  </span>
</el-dialog>
<!-- 查看信息对话框 -->
    <el-dialog title="提示" :visible.sync="dialogLookMsg" width="40%">
    <Maintenance :tableData="tableData1" :tableLabel="tableLabel1" :config="config1"></Maintenance>
  <span slot="footer" class="dialog-footer">
  </span>
</el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
export default {
  name: "customer",
  components: { Maintenance,Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          check_in_date: "2020-4-30",
          leave_date: "2020-4-30",
          package_price: "148000",
          days:'28',
          user_name: "张一二",
          mom_bitth_date:'2020-4-30',
          user_phone: "15555828930",
          adres: "杭州市钱江新城钱江路花苑小区",
          baby_name: "张宝宝",
          baby_sex: "女",
          baby_bitth_date: "2020-4-30",
          wx_num: "15555828930"
        }
      ],
      tableLabel: [
        {
          prop: "check_in_date",
          label: "入住日期",
          width: "110"
        },
        {
          prop: "leave_date",
          label: "出所日期",
          width: "110"
        },
        {
          prop: "package_price",
          label: "套餐价格",
          width: "90"
        },
         {
          prop: "days",
          label: "天数",
          width: "90"
        },
        {
          prop: "user_name",
          label: "姓名",
          width: "90"
        },
        {
          prop: "mom_bitth_date",
          label: "出生日期",
          width: "110"
        },
        {
          prop: "user_phone",
          label: "联系方式"
        },
        {
          prop: "adres",
          label: "地址",
          width: "300"
        },
        {
          prop: "baby_name",
          label: "宝宝姓名",
          width: "90"
        },
        {
          prop: "baby_sex",
          label: "宝宝性别",
          width: "90"
        },
        {
          prop: "baby_bitth_date",
          label: "出生日期",
          width: "110"
        },
        {
          prop: "wx_num",
          label: "微信号"
        },
        {
          prop: "customer_ReturnVisit",
          label: "客户回访",
          type:1,
          width: "200"
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      dialogEditMsg:false,//编辑信息对话框
      dialogLookMsg:false,//查看信息对话框
      return_time:'',//回访日期
      return_Con:'',//回访内容
      people:'',//责任人
      note:'',//备注
       tableData1: [
        {
          return_date: "2020-4-30",
          return_con: "宝宝100天",
          note: "完成",
          people:'完成'
        }
      ],
      tableLabel1: [
        {
          prop: "return_date",
          label: "回访日期",
          width:'200'
        },
        {
          prop: "return_con",
          label: "回访内容",
          width:'200'
        },
        {
          prop: "note",
          label: "备注",
          width:'180'
        },
         {
          prop: "people",
          label: "责任人",
          
        }
      ],
       config1: {
        page: 1,
        total: 30,
        loading: false
      },
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 编辑信息
    edit_msg(){
      this.dialogEditMsg = true
    },
    look_msg(){
      this.dialogLookMsg = true
    },
  
  }
};
</script>
<style  scoped>
.CustmerBox {
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  border-radius: 3px;
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
.edit_msgBox .msgBox_row {
      display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.msgbox_items  .msgbox_title{
  padding: 10px 0;
}
</style>