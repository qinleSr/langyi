<template>
  <!-- 投诉管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="complainAdd">
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
        <MotherLog
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        ></MotherLog>
      </div>
    </div>
    <!-- 客户投诉申诉新增 -->
    <el-dialog title="新增" :visible.sync="complainForm">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>日期</span>
            </div>
            <el-date-picker
              v-model="form.say_time"
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
            <el-input v-model="form.customer_name" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-select v-model="form.room_id" placeholder>
              <el-option label="305" :value="305"></el-option>
              <el-option label="302" :value="302"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>内容</span>
            </div>
            <el-input
              v-model="form.content"
              autocomplete="off"
              style="width: 530px"
            ></el-input>
          </el-col>
          <el-col style="width: 300px"></el-col>
          <el-col style="margin-left: 25px">
            <div class="label_title">
              <span class="improtant">*</span>
              <span>投诉情况分析</span>
            </div>
            <el-input v-model="form.report_split" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>一级受理人</span>
            </div>
            <el-input v-model="form.first_processer" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>终止受理人</span>
            </div>
            <el-input v-model="form.last_processer" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客户方处理结果</span>
            </div>
            <el-input v-model="form.customer_result" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>内部处理方案</span>
            </div>
            <el-input v-model="form.inside_resolution" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>纠正或预防措施</span>
            </div>
            <el-input v-model="form.adjust_solution" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>整改负责人</span>
            </div>
            <el-input v-model="form.adjust_leader" autocomplete="off"></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="complainForm = false">取 消</el-button>
        <el-button type="primary" @click="addComplainForm">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import MotherLog from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import {
  complaintsList,
  addComplaints,
  editComplaints,
} from "../../api/manager/complaints";
export default {
  name: "customer",
  components: { MotherLog, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          date: "2020-4-30",
          user_name: "张一二",
          due_room: "305",
          complaints_content: "上餐速度慢",
          situation_analysis: "人少",
          first_person: "王一一",
          end_person: "李二",
          processing_results: "改善满意",
          internal_processing: "提前准备",
          prevention_programs: "提前准备",
          Those_responsible: "张三",
        },
      ],
      tableLabel: [
        {
          prop: "created_at",
          label: "日期",
        },
        {
          prop: "customer_name",
          label: "姓名",
        },
        {
          prop: "room_id",
          label: "房间号",
        },
        {
          prop: "content",
          label: "顾客投诉内容",
          width: "200",
        },
        {
          prop: "report_split",
          label: "投诉情况分析",
          width: "150",
        },
        {
          prop: "first_processer",
          label: "一级受理人",
        },
        {
          prop: "last_processer",
          label: "终止受理人",
        },
        {
          prop: "customer_result",
          label: "客户处理结果",
          width: "150",
        },
        {
          prop: "inside_resolution",
          label: "内部处理方案",
          width: "150",
        },
        {
          prop: "adjust_solution",
          label: "纠正或预防措施",
          width: "150",
        },
        {
          prop: "adjust_leader",
          label: "整改责任人",
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      complainForm: false,
      form: {
        say_time: "",
        room_id: "",
        customer_name: "",
        content: "",
        report_split: "",
        first_processer: "",
        last_processer: "",
        customer_result: "",
        inside_resolution: "",
        adjust_solution: "",
        adjust_leader: "",
        contract_id: 1,
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    this.getComplaintsList();
  },
  mounted() {},

  methods: {
    // 获取妈妈日志列表
    getComplaintsList() {
      complaintsList()
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message.success("获取成功");
            this.tableData = res.data.data;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 投诉新增事件
    complainAdd() {
      this.complainForm = true;
    },
    // 添加
    addComplainForm() {
      console.log(this.form.say_time);
      console.log(this.form);

      addComplaints(this.form)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            console.log(this.form);
            this.$message.success("新增成功");
            this.complainForm = false;
            this.getComplaintsList();
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
.label_title {
  padding: 5px 0;
}
.el-input,
.el-select {
  width: 202px;
}
</style>
