<template>
  <!-- 产康客户管理--产康客户信息管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <Bread style="margin-left: 20px"></Bread>
        <div class="Tab_Right">
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
              style="width: 350px"
            ></el-date-picker>
          </div>
        </div>
        <Maintenance :tableData="tableData" :tableLabel="tableLabel" :config="config">
          <template v-slot:edit>
            <button class="slot_btn" @click="edit_return">编辑</button>
            <button class="slot_btn" @click="look_return">查看</button>
          </template>
          <template v-slot:look>
            <button class="slot_btn">编辑</button>
          </template>
        </Maintenance>
      </div>
    </div>
    <!-- 客户回访跟踪编辑 -->
    <el-dialog title="编辑" :visible.sync="dialogForm">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>回访日期</span>
            </div>
            <el-date-picker
              v-model="form.return_time"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form.Customer_name" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form.Customer_phone" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-input v-model="form.Customer_room" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>生产日期</span>
            </div>
            <el-date-picker
              v-model="form.birth_time"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>入所日期</span>
            </div>
            <el-input v-model="form.to_time" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-input v-model="form.leave_time" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>套餐</span>
            </div>
            <el-input v-model="form.food" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客情反馈</span>
            </div>
            <el-input v-model="form.Customer_talk" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>项目类别</span>
            </div>
            <el-input v-model="form.project_type" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>回访项目</span>
            </div>
            <el-input v-model="form.return_project" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产康师</span>
            </div>
            <el-input v-model="form.teacher" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>效果追踪</span>
            </div>
            <el-input
              v-model="form.effect"
              autocomplete="off"
              style="width: 430px"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>备注</span>
            </div>
            <el-input
              v-model="form.note"
              autocomplete="off"
              style="width: 430px"
            ></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogForm = false">取 消</el-button>
        <el-button type="primary" @click="dialogForm = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 查看回访信息弹框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
      <Maintenance
        :tableData="tableData1"
        :tableLabel="tableLabel1"
        :config="config1"
      ></Maintenance>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import Bread from "../Business/Bread";
import { productReturnList } from "../../api/production/productionClient";
export default {
  name: "customer",
  components: { Maintenance, Search, Bread },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          return_date: "2020-4-30",
          user_name: "张一二",
          user_phone: "15555828930",
          project_type: "套内",
          server_project: "无痛乳腺疏通",
          feedback: "明日预约准时参加",
          serve_people: "张一二",
          customer_type: "拓展签约",
        },
      ],
      tableLabel: [
        {
          prop: "review_time",
          label: "回访日期",
        },
        {
          prop: "cname",
          label: "客户姓名",
        },
        {
          prop: "mobile",
          label: "联系方式",
        },
        {
          prop: "type",
          label: "项目类别",
        },
        {
          prop: "pname",
          label: "服务项目",
          width: "160",
        },
        {
          prop: "feedback",
          label: "客情反馈",
          width: "180",
        },
        {
          prop: "serve_name",
          label: "服务人员",
        },
        {
          prop: "return_visit",
          label: "回访跟踪",
          width: "250",
          type: 1,
        },
        {
          prop: "due_Production",
          label: "产康预约",
          width: "180",
          type: 2,
        },
        {
          prop: "user_type",
          label: "客户类别",
          width: "180",
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      form: {
        return_time: "",
        Customer_name: "",
        Customer_phone: "",
        Customer_room: "",
        birth_time: "",
        to_time: "",
        leave_time: "",
        food: "",
        Customer_talk: "",
        project_type: "",
        return_project: "",
        teacher: "",
        effect: "",
        note: "",
      },
      dialogForm: false,
      dialogVisible: false,
      config1: {
        page: 1,
        total: 30,
        loading: false,
      },
      tableLabel1: [
        {
          prop: "return_date",
          label: "回访日期",
          width: "120",
        },
        {
          prop: "room",
          label: "房间号",
          width: "80",
        },
        {
          prop: "user_name",
          label: "客户姓名",
          width: "100",
        },
        {
          prop: "user_age",
          label: "年龄",
          width: "60",
        },
        {
          prop: "child_num",
          label: "胎次",
          width: "70",
        },
        {
          prop: "birth_date",
          label: "生产日期",
          width: "120",
        },
        {
          prop: "to_date",
          label: "入所日期",
          width: "120",
        },
        {
          prop: "leave_date",
          label: "出所日期",
          width: "120",
        },
        {
          prop: "customer_talk",
          label: "客情反馈",
          width: "130",
        },
        {
          prop: "return_project1",
          label: "回访项目",
          width: "90",
        },
        {
          prop: "return_project2",
          label: "回访项目",
        },
        {
          prop: "teacher",
          label: "产康师",
        },
        {
          prop: "effect",
          label: "效果追踪",
          width: "200",
        },
      ],
      tableData1: [
        {
          return_date: "2020-4-30",
          room: "207",
          user_name: "张一二",
          user_age: "25",
          child_num: "二胎",
          birth_date: "2020-5-15",
          to_date: "2020-5-15",
          leave_date: "2020-5-15",
          customer_talk: "准时参加",
          return_project1: "套内",
          return_project2: "无痛乳腺疏通",
          teacher: "王一一",
          effect: "手法专业，做起来很舒服",
        },
      ],
    };
  },
  created() {
    this.getProductReturnList();
  },
  mounted() {},

  methods: {
    // 获取列表
    getProductReturnList() {
      productReturnList()
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
    // 编辑
    edit_return() {
      this.dialogForm = true;
    },
    //查看
    look_return() {
      this.dialogVisible = true;
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
.el-row {
  margin-bottom: 10px;
}
.el-col {
  margin: 0 10px;
  /* width: 202px; */
}
.el-col .label_title {
  padding: 5px 0;
}
.el-input,
.el-select {
  width: 202px;
}
</style>
