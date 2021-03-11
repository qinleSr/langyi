<template>
  <!-- 定向服务 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="add_Directional">
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
        <common-table
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        >
          <template v-slot:edit>
            <button class="slot_btn" @click="edit_userMsg">编辑</button>
            <button class="slot_btn" @click="look_userMsg">查看</button>
          </template>
        </common-table>
      </div>
    </div>
    <!-- 新增弹框事件 -->
    <el-dialog title="新增" :visible.sync="Directional">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input
              v-model="form.customer_name"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-select v-model="form.room_id" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>套餐</span>
            </div>
            <el-select v-model="form.product_id" placeholder>
              <el-option label="豪华套餐" :value="1"></el-option>
              <el-option label="单人餐" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>宝宝姓名</span>
            </div>
            <el-input v-model="form.baby_name" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>宝宝性别</span>
            </div>
            <el-radio v-model="form.baby_gender" :label="1">男</el-radio>
            <el-radio v-model="form.baby_gender" :label="2">女</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>生产医院</span>
            </div>
            <el-input
              v-model="form.birth_hospital"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>胎次</span>
            </div>
            <el-select v-model="form.birth_count" placeholder>
              <el-option label="头胎" :value="1"></el-option>
              <el-option label="二胎" :value="2"></el-option>
              <el-option label="三胎" :value="2"></el-option>
              <el-option label="四胎" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>预产期</span>
            </div>
            <el-date-picker
              v-model="form.predict_at"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>入住日期</span>
            </div>
            <el-date-picker
              v-model="form.in_at"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-date-picker
              v-model="form.out_at"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col></el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Directional = false">取 消</el-button>
        <el-button type="primary" @click="addDirectional">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑按钮 弹框 -->
    <el-dialog title="编辑" :visible.sync="Directional_edit">
      <el-form :model="form1">
        <el-row>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>序号</span>
            </div>
            <el-input v-model="form1.no" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>日期</span>
            </div>
            <el-input v-model="form1.date" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>时间</span>
            </div>
            <div style="display: flex; align-items: center">
              <el-input
                v-model="form1.time1"
                autocomplete="off"
                style="width: 100px"
              ></el-input>
              <span>:</span>
              <el-input
                v-model="form1.time2"
                autocomplete="off"
                style="width: 100px"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>项目</span>
            </div>
            <el-select
              v-model="form1.project_region"
              placeholder
              style="width: 400px"
            >
              <el-option
                label="客户入住手续办理，楼层门禁卡录入"
                value="shanghai"
              ></el-option>
              <el-option
                label="客户入住手续办理，楼层门禁卡录入"
                value="beijing"
              ></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>内容</span>
            </div>
            <el-input
              v-model="form1.content"
              autocomplete="off"
              style="width: 300px"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <button class="slot_btn" @click="addDomain">新增</button>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>责任销售</span>
            </div>
            <el-select v-model="form1.people_region" placeholder>
              <el-option label="张大大" value="shanghai"></el-option>
              <el-option label="张大大" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>完成情况</span>
            </div>
            <el-input
              v-model="form1.is_do"
              autocomplete="off"
              style="width: 300px"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="edit_title">
              <span class="improtant">*</span>
              <span>备注</span>
            </div>
            <el-input
              v-model="form.note"
              autocomplete="off"
              style="width: 800px"
            ></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Directional_edit = false">取 消</el-button>
        <el-button type="primary" @click="Directional_edit = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 查看按钮对话框 -->
    <el-dialog title="查看" :visible.sync="directionalForm" width="70%">
      <el-form :model="form2">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form2.user_name"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form2.user_phone"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-select v-model="form2.user_room" placeholder="">
              <el-option label="305" value="shanghai"></el-option>
              <el-option label="305" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>套餐</span>
            </div>
            <el-select v-model="form2.user_food" placeholder="">
              <el-option label="悦·套餐" value="shanghai"></el-option>
              <el-option label="悦·套餐" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>生产医院</span>
            </div>
            <el-input v-model="form2.user_hospital"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>预产期</span>
            </div>
            <el-date-picker
              v-model="form2.user_Duetime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>入住日期</span>
            </div>
            <el-date-picker
              v-model="form2.user_Totim"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-date-picker
              v-model="form2.user_Leavetime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col> </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>胎次</span>
            </div>
            <el-select v-model="form2.user_Childnum" placeholder="">
              <el-option label="头胎" value="shanghai"></el-option>
              <el-option label="二胎" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-table :data="tableData1" border style="width: 100%">
          <el-table-column
            label="序号"
            type="index"
            width="100"
            :index="indexMethod"
          >
          </el-table-column>
          <el-table-column prop="project" label="项目" width="400">
          </el-table-column>
          <el-table-column prop="content" label="内容"> </el-table-column>
          <el-table-column prop="time" label="日期/时间"> </el-table-column>
          <el-table-column prop="people" label="责任销售" width="100">
          </el-table-column>
          <el-table-column prop="is_success" label="完成情况" width="100">
          </el-table-column>
          <el-table-column prop="note" label="备注"> </el-table-column>
        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="directionalForm = false">取 消</el-button>
        <el-button type="primary" @click="directionalForm = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import CommonTable from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { directList, addDirect, editDirect } from "../../api/manager/direct";
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
          user_phone: "15555828930",
          room_num: "305",
          due_food: "悦·套餐",
          baby_name: "张宝宝",
          baby_sex: "女",
          production_hospital: "省妇保",
          child_time: "顺产",
          due_date: "2020-4-30",
          check_in_date: "2020-4-30",
          leave_date: "2020-4-30",
        },
      ],
      tableLabel: [
        {
          prop: "customer_name",
          label: "客户姓名",
        },
        {
          prop: "mobile",
          label: "联系方式",
        },
        {
          prop: "room_id",
          label: "房间号",
          width: "100",
        },
        {
          prop: "product_id",
          label: "套餐",
          width:"100"
        },
        {
          prop: "baby_name",
          label: "宝宝姓名",
          width: "90",
        },
        {
          prop: "baby_gender",
          label: "宝宝性别",
        },
        {
          prop: "birth_hospital",
          label: "生产医院",
          width: "150",
        },
        {
          prop: "birth_count",
          label: "胎次",
          width: "80",
        },
        {
          prop: "predict_at",
          label: "预产期",
          width: "180",
        },
        {
          prop: "in_at",
          label: "入住日期",
          width: "180",
        },
        {
          prop: "out_at",
          label: "出所日期",
          width: "180",
        },
        {
          prop: "service_project",
          label: "服务项目",
          width:"200",
          type: 1,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      Directional: false,
      form: {
        customer_name: "", //客户姓名
        mobile: "", //联系方式
        room_id: "", //房间号
        product_id: "", //套餐
        baby_name: "", //宝宝姓名
        baby_gender: "", //宝宝性别
        birth_hospital: "", //生产医院
        birth_count: "", //胎次
        predict_at: "", //预产期
        in_at: "", //入住日期
        out_at: "", //出所日期
      },
      form1: {
        no: "",
        date: "",
        time1: "",
        time2: "",
        project_region: "",
        content: "",
        people_region: "",
        is_do: "",
        note: "",
      },
      form2: {
        user_name: "",
        user_phone: "",
        user_room: "",
        user_food: "",
        user_hospital: "",
      },
      formLabelWidth: "120px",
      Directional_edit: false,
      directionalForm: false,
      tableData1: [
        {
          project: "客户入住手续办理，楼层门禁卡录入",
          content: "",
          time: "2020-4-30.10:00",
          people: "前台",
          is_success: "是",
          note: "",
        },
      ],
      config1: {
        page: 1,
        total: 30,
        loading: false,
      },
    };
  },
  created() {
    this.getDirectList();
  },
  mounted() {},

  methods: {
    getDirectList() {
      directList()
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
    // 新增内向服务
    add_Directional() {
      this.Directional = true;
    },
    // 新增
    addDirectional() {
      console.log(this.form);
      addDirect(this.form)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            console.log(this.form);
            this.$message.success("新增成功");
            this.Directional = false;
            this.getDirectList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 编辑按钮事件
    edit_userMsg() {
      this.Directional_edit = true;
    },
    // 新增项目内容
    addDomain() {
      return;
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },
    // 查看内容
    look_userMsg() {
      this.directionalForm = true;
    },
    indexMethod(index) {
      return index * 2;
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
  margin: 0 5px;
}
.el-input,
.el-select {
  width: 202px;
}
.el-row {
  padding: 10px;
}
.el-row .el-col .label_title {
  padding: 5px 0;
}
.edit_title {
  padding: 5px 0;
}
</style>