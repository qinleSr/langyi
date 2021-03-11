<template>
  <!-- 孕期维护管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
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
              <option>已签套餐</option>
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
          <el-button type="primary" style="margin-right: 20px">确定</el-button>
        </div>
        <PregnancyList
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        >
          <template v-slot:look>
            <button class="slot_btn" @click="getPregnancyPayList">查看1</button>
          </template>
          <template v-slot:look1>
            <button class="slot_btn" @click="aaa">查看2</button>
          </template>
          <template v-slot:edit1>
            <button class="slot_btn" @click="bbb">编辑1</button>
          </template>
          <template v-slot:edit2>
            <button class="slot_btn" @click="ccc">编辑2</button>
          </template>
          <template v-slot:edit3>
            <button class="slot_btn" @click="ddd">编辑3</button>
          </template>
          <template v-slot:look3>
            <button class="slot_btn" @click="fff">查看3</button>
          </template>
        </PregnancyList>
      </div>
    </div>
    <!-- 孕期回访弹框 -->
    <el-dialog title="孕期回访" :visible.sync="dialogVisit" width="50%">
      <div
        style="
          display: flex;
          align-items: center;
          float: right;
          padding: 10px 0;
          cursor: pointer;
        "
        @click="add"
      >
        <img src="../../assets/img/11.png" />
        <div>新增</div>
      </div>
      <Dialogtable
        :tableData="tableData1"
        :tableLabel="tableLabel1"
        :config="config1"
      >
      </Dialogtable>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisit = false">取 消</el-button>
        <el-button type="primary" @click="updateDialogVisit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 孕期回访新增弹框 -->
    <el-dialog title="孕期回访新增" :visible.sync="dialogadd" width="40%">
      <div class="add_box">
        <div class="add_row">
          <div class="add_items">
            <div class="add_itemstitle">
              <span>跟进日期</span>
            </div>
            <el-date-picker
              v-model="form.track_at"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <div class="add_items" style="margin-left: 80px">
            <div class="add_itemstitle">
              <span>孕期膳食指导</span>
            </div>
            <el-input v-model="form.guid" placeholder="膳食指导"></el-input>
          </div>
        </div>
        <div class="add_row">
          <div class="add_items">
            <div class="add_itemstitle">
              <span>孕期健康评估</span>
            </div>
            <el-input v-model="form.test" placeholder="健康评估"></el-input>
          </div>
          <div class="add_items" style="margin-left: 80px">
            <div class="add_itemstitle">
              <span>其他回访服务</span>
            </div>
            <el-input
              v-model="form.other_review"
              placeholder="回访服务"
            ></el-input>
          </div>
        </div>
        <div class="add_row">
          <div class="add_items" style="width: 100%">
            <div class="add_itemstitle">
              <span>沟通信息</span>
            </div>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form.remarks"
            ></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogadd = false">取 消</el-button>
        <el-button type="primary" @click="addDialogadd">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 孕期课程活动框 -->
    <el-dialog
      title="孕期课程活动"
      :visible.sync="activityDialogVisit"
      width="50%"
    >
      <div
        style="
          display: flex;
          align-items: center;
          float: right;
          padding: 10px 0;
          cursor: pointer;
        "
        @click="addd"
      >
        <img src="../../assets/img/11.png" />
        <div>新增</div>
      </div>
      <Dialogtable
        :tableData="tableData2"
        :tableLabel="tableLabel2"
        :config="config2"
      >
      </Dialogtable>
      <span slot="footer" class="dialog-footer">
        <el-button @click="activityDialogVisit = false">取 消</el-button>
        <el-button type="primary" @click="updateActivityDialogVisit"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 孕期课程活动新增弹框 -->
    <el-dialog
      title="孕期课程活动新增"
      :visible.sync="dialogaddActivity"
      width="40%"
    >
      <div class="add_box">
        <div class="add_row">
          <div class="add_items">
            <div class="add_itemstitle">
              <span>首次跟进</span>
            </div>
            <el-date-picker
              v-model="form1.track_at"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <div class="add_items" style="margin-left: 35px">
            <div class="add_itemstitle">
              <span>活动</span>
            </div>
            <el-input v-model="form1.activity"></el-input>
          </div>
          <div class="add_items" style="margin-left: 35px">
            <div class="add_itemstitle">
              <span>课程</span>
            </div>
            <el-input v-model="form1.course"></el-input>
          </div>
        </div>
        <div class="add_row">
          <div class="add_items" style="width: 100%">
            <div class="add_itemstitle">
              <span>备注</span>
            </div>
            <el-input style="width: 100%" v-model="form1.remarks"></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogaddActivity = false">取 消</el-button>
        <el-button type="primary" @click="addDialogaddActivity"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 个性产康宣教弹框 -->
    <el-dialog title="提示" :visible.sync="dialogCourse" width="40%">
      <div class="course_box">
        <div class="course_row">
          <div class="course_rowitems">
            <div class="course_rowtitle">
              <span>产前注意事项</span>
            </div>
            <el-select v-model="matters" placeholder="请选择">
              <el-option
                v-for="item in matters_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="course_rowitems">
            <div class="course_rowtitle">
              <span>顺产分娩产程和注意事项</span>
            </div>
            <el-select v-model="childbirth" placeholder="请选择">
              <el-option
                v-for="item in childbirth_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="course_rowitems">
            <div class="course_rowtitle">
              <span>剖腹产的注意事项</span>
            </div>
            <el-select v-model="cesarean" placeholder="请选择">
              <el-option
                v-for="item in cesarean_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="course_row" style="width: 100%">
          <div class="course_rowitems">
            <div class="course_rowtitle">
              <span>备注</span>
            </div>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
              style="width: 445px"
            ></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCourse = false">取 消</el-button>
        <el-button type="primary" @click="dialogCourse = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 入院信息沟通弹框 -->
    <el-dialog title="编辑" :visible.sync="LiveHospotal" width="30%">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="Livetextarea"
        style="height: 80px"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="LiveHospotal = false">取 消</el-button>
        <el-button type="primary" @click="LiveHospotal = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 入院陪护安排弹框 -->
    <el-dialog title="编辑" :visible.sync="CareHospotal" width="30%">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="Caretextarea"
        style="height: 80px"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="CareHospotal = false">取 消</el-button>
        <el-button type="primary" @click="CareHospotal = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import PregnancyList from "../Business/table_Track.vue";
import Dialogtable from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import {
  pregnancyList,
  addPregnancy,
  customerList,
  addCustomer,
} from "../../api/user_list";
export default {
  name: "customer",
  components: { PregnancyList, Search, Dialogtable },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          user_name: "张一二",
          user_phone: "15555828930",
          due_date: "2020-4-30",
          gestation_period: "5周",
          package: "淑·套餐",
          baby_sex: "女",
          total_amount: "148000",
          received_deposit: "48000",
        },
      ],
      tableLabel: [
        {
          prop: "user_name",
          label: "姓名",
        },
        {
          prop: "user_phone",
          label: "联系方式",
        },
        {
          prop: "due_date",
          label: "预产期",
        },
        {
          prop: "gestation_period",
          label: "孕周期",
        },
        {
          prop: "package",
          label: "已签套餐",
          width: "90",
        },
        {
          prop: "return_visit",
          label: "孕期回访",
          type: 2,
        },
        {
          prop: "course_activity",
          label: "孕期课程活动",
          type: 6,
        },
        {
          prop: "mission",
          label: "个性产康宣教",
          type: 3,
        },
        {
          prop: "hospital_communication",
          label: "入院信息沟通",
          width: "200",
          type: 4,
        },
        {
          prop: "escort",
          label: "入院陪护安排",
          width: "200",
          type: 5,
        },
        {
          prop: "stay_in",
          label: "入住通知",
          type: 8,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      dialogVisit: false,
      dialogCourse: false,
      dialogadd: false,
      tableLabel1: [
        {
          prop: "track_at",
          label: "跟进日期",
          width: "160",
        },
        {
          prop: "guid",
          label: "孕期膳食指导",
          width: "160",
        },
        {
          prop: "test",
          label: "孕期健康评估",
          width: "160",
        },
        {
          prop: "other_review",
          label: "其他回访服务",
          width: "160",
        },
        {
          prop: "remarks",
          label: "沟通信息",
          width: "200",
        },
      ],
      tableData1: [
        {
          follow_date: "2020-4-30",
          course_food: "完成",
          course_health: "完成",
          ohter_visit: "完成",
          msg: "有xxx需求",
        },
      ],
      config1: {
        page: 1,
        total: 30,
        loading: false,
      },
      tableLabel2: [
        {
          prop: "track_at",
          label: "跟进日期",
          width: "200",
        },
        {
          prop: "guid",
          label: "孕期膳食指导",
          width: "160",
        },
        {
          prop: "test",
          label: "孕期健康评估",
          width: "160",
        },
        {
          prop: "other_review",
          label: "其他回访服务",
          width: "160",
        },
        {
          prop: "remarks",
          label: "沟通信息",
          width: "200",
        },
      ],
      tableData2: [
        {
          follow_date: "2020-4-30",
          course_food: "完成",
          course_health: "完成",
          ohter_visit: "完成",
          msg: "有xxx需求",
        },
      ],
      config2: {
        page: 1,
        total: 30,
        loading: false,
      },
      form: {
        track_at: "",
        guid: "",
        test: "",
        other_review: "",
        remarks: "",
        contract_id: 2,
      },
      form1: {
        track_at: "",
        activity: "",
        course: "",
        remarks: "",
        contract_id: 2,
      },
      dialogaddActivity: false,
      activityDialogVisit: false,
      track_at: "", //
      matters: "", //产前注意事项
      matters_options: [
        {
          value: "选项1",
          label: "完成",
        },
        {
          value: "选项2",
          label: "未完成",
        },
      ],
      childbirth: "", //顺产分娩注意事项
      childbirth_options: [
        {
          value: "选项1",
          label: "完成",
        },
        {
          value: "选项2",
          label: "未完成",
        },
      ],
      cesarean: "", //剖腹产的注意事项
      cesarean_options: [
        {
          value: "选项1",
          label: "完成",
        },
        {
          value: "选项2",
          label: "未完成",
        },
      ],
      textarea: "",
      Livetextarea: "",
      LiveHospotal: false,
      Caretextarea: "",
      CareHospotal: false,
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 孕期课程活动列表
    getPregnancyList() {
      pregnancyList()
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message.success("获取成功");
            this.tableData2 = res.data.data.data;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 孕期回访列表
    getPregnancyPayList() {
      this.dialogVisit = true;
      customerList()
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message.success("获取成功");
            this.tableData1 = res.data.data.data;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 孕期回访新增
    addDialogadd() {
      console.log(this.form);
      addCustomer(this.form)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("新增成功");
            this.dialogadd = false;
            this.getPregnancyList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    updateDialogVisit() {
      this.getPregnancyList();
      this.dialogVisit = false;
    },
    //孕期回访查看事件
    aaa() {
      this.activityDialogVisit = true;
      this.getPregnancyList();
    },
    addDialogaddActivity() {
      console.log(this.form1);
      addPregnancy(this.form1)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("新增成功");
            this.dialogaddActivity = false;
            // this.getPregnancyList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    updateActivityDialogVisit() {
      this.activityDialogVisit = false;
    },
    // 孕期课程活动事件
    bbb() {
      console.log(456);
      this.dialogCourse = true;
    },
    // 孕期回访查看--新增事件
    add() {
      this.dialogadd = true;
    },
    addd() {
      this.dialogaddActivity = true;
    },
    ccc() {
      console.log(111232);
      this.LiveHospotal = true;
    },
    ddd() {
      console.log(4444);
      this.CareHospotal = true;
    },
    fff() {
      this.$router.push("/NoticeForm");
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
  outline: none;
}
.el-dialog__body {
  padding: 0 20px;
}
.add_row {
  display: flex;
  align-items: center;
}
.add_row .add_items .el-input {
  width: 220px;
}
.add_itemstitle {
  padding: 10px 0;
}
.course_row {
  display: flex;
  align-items: center;
}
.course_row .course_rowitems {
  margin: 0 20px;
}
.course_row .course_rowitems .course_rowtitle {
  padding: 10px 0;
}
.course_rowitems,
.el-textarea {
  width: 100% !important;
}
</style>