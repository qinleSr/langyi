<template>
  <!-- 妈妈日志 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="add_momlog">
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
        >
          <template v-slot:edit="id">
            <button class="slot_btn" @click="edit_log(id.id)">编辑</button>
            <button class="slot_btn" @click="look_log">查看</button>
          </template>
        </MotherLog>
      </div>
    </div>
    <!-- 生活日志添加 -->
    <el-dialog title="生活日志" :visible.sync="FormMomlog">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>客户姓名</span>
              </div>
              <el-input v-model="form.cname" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>联系方式</span>
              </div>
              <el-input v-model="form.contact" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>出生日期</span>
              </div>
              <el-date-picker
                v-model="form.birth_at"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>套餐</span>
              </div>
              <el-select v-model="form.set_meal" placeholder="">
                <el-option label="区域一" value="区域一"></el-option>
                <el-option label="区域二" value="撒大的撒"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>房间号</span>
              </div>
              <el-select v-model="form.roomid" placeholder="">
                <el-option label="201" :value="201"></el-option>
                <el-option label="101" :value="101"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>入住日期</span>
              </div>
              <el-date-picker
                v-model="form.in_the_room"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>入住天数</span>
              </div>
              <el-select v-model="form.in_days" placeholder="">
                <el-option label="两天" :value="1"></el-option>
                <el-option label="一天" :value="2"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>生产方式</span>
              </div>
              <el-select v-model="form.production" placeholder="">
                <el-option :label="十大" value=""></el-option>
                <el-option :label="阿斯顿" value="阿斯顿"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>生产日期</span>
              </div>
              <el-date-picker
                v-model="form.production_at"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>出所日期</span>
              </div>
              <el-date-picker
                v-model="form.out_the_room"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>责任管家</span>
              </div>
              <el-select v-model="form.housekeeper" placeholder="">
                <el-option label="区域一" value="区域一"></el-option>
                <el-option label="区域二" value="区域二"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FormMomlog = false">取 消</el-button>
        <el-button type="primary" @click="addMomLog">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 生活日志编辑 -->
    <el-dialog title="生活日志" :visible.sync="FormEditMomlog">
      <el-form :model="form2">
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>入所天数</span>
              </div>
              <el-input v-model="form2.in_days" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>日期</span>
              </div>
              <el-date-picker
                v-model="form2.date"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>时间</span>
              </div>
              <el-row>
                <el-input
                  v-model="form2.s_time"
                  autocomplete="off"
                  style="width: 110px"
                ></el-input>
                <span style="margin: 0 20px">:</span>
                <el-input
                  v-model="form2.e_time"
                  autocomplete="off"
                  style="width: 110px"
                ></el-input>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>内容</span>
              </div>
              <el-input
                style="width: 100%"
                v-model="form2.content"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>交接部门</span>
              </div>
              <el-input v-model="form2.dept" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>是否完成</span>
              </div>
              <el-select v-model="form2.is_done" placeholder="是">
                <el-option label="是" :value="1"></el-option>
                <el-option label="否" :value="0"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>备注</span>
              </div>
              <el-input
                style="width: 100%"
                v-model="form2.remarks"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FormEditMomlog = false">取 消</el-button>
        <el-button type="primary" @click="edit_momlog">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 查看妈妈日志 -->
    <el-dialog title="妈妈日志" :visible.sync="dialogmomLog" width="70%">
      <el-row>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="customer_name" autocomplete="off"></el-input>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="customer_phone" autocomplete="off"></el-input>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>套餐</span>
            </div>
            <el-input v-model="customer_food" autocomplete="off"></el-input>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-input v-model="customer_room" autocomplete="off"></el-input>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>入住天数</span>
            </div>
            <el-input v-model="customer_toDays" autocomplete="off"></el-input>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>生产方式</span>
            </div>
            <el-input v-model="customer_type" autocomplete="off"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>出生日期</span>
            </div>
            <el-date-picker
              v-model="customer_birthdate"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>入住日期</span>
            </div>
            <el-date-picker
              v-model="customer_todate"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>生产日期</span>
            </div>
            <el-date-picker
              v-model="customer_productionDate"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-date-picker
              v-model="customer_leaveDte"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items">
              <span class="improtant">*</span>
              <span>责任管家</span>
            </div>
            <el-select v-model="customer_housekeeper" placeholder="">
              <el-option label="区域一" value="区域一"></el-option>
              <el-option label="区域二" value="区域二"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col>
          <div class="col_items">
            <div class="head_items"></div>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData1" border style="width: 100%">
        <el-table-column prop="tayIn_date" label="入住天数" width="180">
        </el-table-column>
        <el-table-column prop="tabel_date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="tabel_time" label="时间"> </el-table-column>
        <el-table-column prop="tabel_content" label="内容"> </el-table-column>
        <el-table-column prop="tabel_department" label="部门">
        </el-table-column>
        <el-table-column prop="tabel_isSuccess" label="是否完成">
        </el-table-column>
        <el-table-column prop="tabel_note" label="备注"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogmomLog = false">取 消</el-button>
        <el-button type="primary" @click="dialogmomLog = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import MotherLog from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { addMother, motherList, editMother } from "../../api/manager/mother";
export default {
  name: "customer",
  components: { MotherLog, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          user_name: "张一二",
          user_phone: "15555828930",
          due_room: "305",
          due_food: "悦·套餐",
          production_date: "2020-4-30",
          check_in_date: "2020-4-30",
          birth_date: "2020-4-30",
          check_in_days: "28",
          production_mode: "顺产",
          leave_date: "2020-4-30",
          housekeeper: "张三",
        },
      ],
      tableLabel: [
        {
          prop: "cname",
          label: "姓名",
        },
        {
          prop: "contact",
          label: "联系方式",
        },
        {
          prop: "roomid",
          label: "房间号",
          width: "90",
        },
        {
          prop: "set_meal",
          label: "套餐",
        },
        {
          prop: "production_at",
          label: "生产日期",
        },
        {
          prop: "in_the_room",
          label: "入住日期",
        },
        {
          prop: "birth_at",
          label: "出生日期",
        },
        {
          prop: "in_days",
          label: "入住天数",
          width: "90",
        },
        {
          prop: "production",
          label: "生产方式",
        },
        {
          prop: "out_the_room",
          label: "出所日期",
        },
        {
          prop: "housekeeper",
          label: "责任管家",
        },
        {
          prop: "life_log",
          label: "生活日志",
          width: "200",
          type: 1,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      FormMomlog: false,
      form: {
        cname: "", //客户姓名
        contact: "", //联系方式
        birth_at: "", //出生日期
        set_meal: "", //套餐
        roomid: "", //房间号
        in_the_room: "", //入住日期
        in_days: "", //入住天数
        production: "", //生产方式
        production_at: "", //生产日期
        out_the_room: "", //出所日期
        housekeeper: "", //责任管家
      },
      formLabelWidth: "120px",
      FormEditMomlog: false,
      editMotherId: "",
      form2: {
        in_days: "",
        date: "",
        s_time: "",
        e_time: "",
        content: "",
        dept: "",
        is_done: "",
        remarks: "",
        mother_log_id: 2,
      },
      dialogmomLog: false,
      customer_name: "",
      customer_phone: "",
      customer_room: "",
      customer_toDays: "",
      customer_type: "",
      customer_food: "",
      customer_birthdate: "",
      customer_todate: "",
      customer_productionDate: "",
      customer_leaveDte: "",
      customer_housekeeper: "",
      tableData1: [
        {
          tayIn_date: "第一天",
          tabel_date: "2020-01-02",
          tabel_time: "10:00",
          tabel_content: "检查物品是否齐全",
          tabel_department: "管家",
          tabel_isSuccess: "是",
          tabel_note: "",
        },
        {
          tayIn_date: "第二天",
          tabel_date: "2020-01-03",
          tabel_time: "10:00",
          tabel_content: "检查物品是否齐全",
          tabel_department: "管家",
          tabel_isSuccess: "是",
          tabel_note: "",
        },
        {
          tayIn_date: "第三天",
          tabel_date: "2020-01-04",
          tabel_time: "10:00",
          tabel_content: "检查物品是否齐全",
          tabel_department: "管家",
          tabel_isSuccess: "是",
          tabel_note: "",
        },
        {
          tayIn_date: "第四天",
          tabel_date: "2020-01-05",
          tabel_time: "10:00",
          tabel_content: "检查物品是否齐全",
          tabel_department: "管家",
          tabel_isSuccess: "是",
          tabel_note: "",
        },
      ],
    };
  },
  created() {
    this.getmotherList();
  },
  mounted() {},

  methods: {
    // 获取妈妈日志列表
    getmotherList() {
      motherList()
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
    // 新增妈妈日志
    add_momlog() {
      this.FormMomlog = true;
    },
    // 添加
    addMomLog() {
      addMother(this.form)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            console.log(this.form);
            this.$message.success("新增成功");
            this.FormMomlog = false;
            this.getmotherList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 妈妈日志编辑
    edit_log(id) {
      console.log(id);
      this.editMotherId = id;
      this.FormEditMomlog = true;
    },
    // 编辑
    edit_momlog() {
      editMother(this.form2, this.editMotherId)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("编辑成功");
            this.FormEditMomlog = false;
            this.getmotherList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 查看妈妈日志
    look_log() {
      this.dialogmomLog = true;
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

.col_items {
  margin: 0 20px;
}
.col_items .el-input,
.el-select,
.el-date-picker {
  width: 180px;
}
.col_items .head_items {
  padding: 10px 0;
}
</style>