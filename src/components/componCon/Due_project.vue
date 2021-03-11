<template>
  <!-- 产康项目管理 - 项目预约 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="add_due">
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
              style="width: 350px"
            ></el-date-picker>
          </div>
        </div>
        <Maintenance :tableData="tableData" :tableLabel="tableLabel" :config="config">
          <template v-slot:edit>
            <button class="slot_btn" @click="edit_due">编辑</button>
          </template>
          <template v-slot:look>
            <button class="slot_btn">预约</button>
          </template>
        </Maintenance>
      </div>
    </div>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="dialogDue">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>预约日期</span>
            </div>
            <el-date-picker
              v-model="form.rtime"
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
            <el-input v-model="form.cname" placeholder></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form.mobile" placeholder></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col></el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>预约项目</span>
            </div>
            <el-select v-model="form.projectid" placeholder>
              <el-option label="朗逸" :value="1"></el-option>
              <el-option label="话小猪" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产康房间</span>
            </div>
            <el-select v-model="form.room" placeholder>
              <el-option label="101" :value="101"></el-option>
              <el-option label="102" :value="102"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col></el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>项目类别</span>
            </div>
            <el-select v-model="form.status" placeholder>
              <el-option label="全服务" :value="1"></el-option>
              <el-option label="半服务" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产康师</span>
            </div>
            <el-select v-model="form.skill" placeholder>
              <el-option label="中技" :value="1"></el-option>
              <el-option label="次技" :value="2"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDue = false">取 消</el-button>
        <el-button type="primary" @click="adddialogDue">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑弹框 -->
    <!-- 客户基本信息 -->
    <el-dialog title="查看" :visible.sync="customer_msg" width="70%">
      <el-form :model="form1">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>签约日期</span>
            </div>
            <el-date-picker
              v-model="form1.sigin_date"
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
            <el-input v-model="form1.customer_name" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form1.customer_phone" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>房号</span>
            </div>
            <el-input
              v-model="form1.customer_room"
              autocomplete="off"
              style="width: 100px"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>套餐</span>
            </div>
            <el-input
              v-model="form1.customer_food"
              autocomplete="off"
              style="width: 100px"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>生产日期</span>
            </div>
            <el-date-picker
              v-model="form1.production_date"
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
            <el-input v-model="form1.to_date" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-input v-model="form1.leave_date" autocomplete="off"></el-input>
          </el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>胎次</span>
            </div>
            <el-input v-model="form1.child_num" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>区域</span>
            </div>
            <el-input v-model="form1.area" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form1.focus" placeholder>
              <el-option label="A：意向非常强，价格接受度高" value="shanghai"></el-option>
              <el-option label="A：意向非常强，价格接受度高" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>渠道</span>
            </div>
            <el-select v-model="form1.channel" placeholder>
              <el-option label="微信" value="shanghai"></el-option>
              <el-option label="大众点评" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>签约金额</span>
            </div>
            <el-input v-model="form1.sigin_money" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>折扣/优惠</span>
            </div>
            <el-input v-model="form1.discount" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>签约人员</span>
            </div>
            <el-input v-model="form1.sigin_people" autocomplete="off"></el-input>
          </el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <!-- 测试 -->
        <el-table
          class="table_b"
          :data="tableData00"
          border
          @selection-change="selectionChangeHandle"
          @cell-dblclick="celledit"
        >
          <el-table-column>
            <el-table-column type="index" width="85"></el-table-column>
            <el-table-column label="项目名称" prop="project_name" width="150">
              <template slot-scope="scope">
                <div>无痛乳腺疏</div>
                <div>手法</div>
                <div>45分钟</div>
              </template>
            </el-table-column>
            <el-table-column prop="first" label="第一次" width="150" edit="false">
              <template slot-scope="scope">
                <div>2020.9.29</div>
                <div>10:00-10:45</div>
                <div>已完成</div>
                <el-input
                  v-if="scope.row.first.edit"
                  ref="goods_name"
                  v-model="scope.row.first.value"
                  style="width: 100%"
                  @blur="scope.row.first.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.first.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="second" width="100" label="第二次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.second.edit"
                  ref="num"
                  v-model="scope.row.second.value"
                  style="width: 100%"
                  @blur="scope.row.second.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.second.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="third" width="100" label="第三次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.third.edit"
                  ref="note"
                  v-model="scope.row.third.value"
                  style="width: 100%"
                  @blur="scope.row.third.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.third.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="four" width="100" label="第四次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.four.edit"
                  ref="note"
                  v-model="scope.row.four.value"
                  style="width: 100%"
                  @blur="scope.row.four.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.four.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="five" width="100" label="第五次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.five.edit"
                  ref="note"
                  v-model="scope.row.five.value"
                  style="width: 100%"
                  @blur="scope.row.five.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.five.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="six" width="100" label="第六次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.six.edit"
                  ref="note"
                  v-model="scope.row.six.value"
                  style="width: 100%"
                  @blur="scope.row.six.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.six.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="seven" width="100" label="第七次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.seven.edit"
                  ref="note"
                  v-model="scope.row.seven.value"
                  style="width: 100%"
                  @blur="scope.row.seven.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.seven.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="eight" width="100" label="第八次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.eight.edit"
                  ref="note"
                  v-model="scope.row.eight.value"
                  style="width: 100%"
                  @blur="scope.row.eight.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.eight.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="nine" width="100" label="第九次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.nine.edit"
                  ref="note"
                  v-model="scope.row.nine.value"
                  style="width: 100%"
                  @blur="scope.row.nine.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.nine.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="ten" width="100" label="第十次">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.ten.edit"
                  ref="note"
                  v-model="scope.row.ten.value"
                  style="width: 100%"
                  @blur="scope.row.ten.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.ten.value }}</span>
              </template>
            </el-table-column>
            -->
          </el-table-column>
        </el-table>
        <!-- 编辑弹框 -->

        <!-- 编辑弹框 -->
        <!-- 测试 -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="customer_msg = false">取 消</el-button>
        <el-button type="primary" @click="customer_msg = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { projectReservList, addProjectReserv } from "../../api/production/project_admin";
export default {
  name: "customer",
  components: { Maintenance, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          due_date: "2020-4-30 10:00-10:45",
          user_name: "张毅",
          user_phone: "15555828930",
          project_type: "套内",
          due_project: "无痛乳腺疏通",
          room: "美容按摩室",
          teacher: "王一一",
        },
      ],
      tableLabel: [
        {
          prop: "rtime",
          label: "预约日期",
          width: "300",
        },
        {
          prop: "name",
          label: "客户姓名",
        },
        {
          prop: "mobile",
          label: "联系方式",
          width: "150",
        },
        {
          prop: "type",
          label: "项目类型",
        },
        {
          prop: "due_project",
          label: "预约项目",
          width: "200",
        },
        {
          prop: "room",
          label: "产康房间",
          width: "160",
        },
        {
          prop: "skill",
          label: "产康师",
        },
        {
          prop: "project_order",
          label: "项目消单",
          width: "160",
          type: 1,
        },
        {
          prop: "next_serve",
          label: "下次服务",
          width: "150",
          type: 2,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      dialogDue: false,
      form: {
        cname: "",
        mobile: "",
        rtime: "",
        room: "",
        projectid: "",
        skill: "",
        status: "",
      },
      customer_msg: false,
      form1: {
        sigin_date: "",
        customer_name: "",
        customer_phone: "",
        customer_room: "",
        customer_food: "",
        production_date: "",
        to_date: "",
        leave_date: "",
        child_num: "",
        area: "",
        focus: "",
        channel: "",
        sigin_money: "",
        discount: "",
        sigin_people: "",
      },
      temp: {},
      dialogFormVisible: false,
      tableData00: [
        {
          project_name: "无痛乳腺疏",
          first: "产康师：王老师",
          second: "预约",
          third: "预约",
          four: "预约",
          five: "预约",
          six: "预约",
          seven: "预约",
          eight: "预约",
          nine: "预约",
          ten: "预约",
          edit: false,
        },
        {
          project_name: "无痛乳腺疏",
          first: "产康师：王老师",
          second: "预约",
          third: "预约",
          four: "预约",
          five: "预约",
          six: "预约",
          seven: "预约",
          eight: "预约",
          nine: "预约",
          ten: "预约",
          edit: false,
        },
        {
          project_name: "无痛乳腺疏",
          first: "产康师：王老师",
          second: "预约",
          third: "预约",
          four: "预约",
          five: "预约",
          six: "预约",
          seven: "预约",
          eight: "预约",
          nine: "预约",
          ten: "预约",
          edit: false,
        },
        {
          project_name: "无痛乳腺疏",
          first: "产康师：王老师",
          second: "预约",
          third: "预约",
          four: "预约",
          five: "预约",
          six: "预约",
          seven: "预约",
          eight: "预约",
          nine: "预约",
          ten: "预约",
          edit: false,
        },
      ],
      tableDataSelections00: [], //选中的表格数据

      calendarTypeOptions: [{ display_name: "123" }, { display_name: "456" }],
      text123: "",
      ccc: false,
    };
  },
  created() {
    this.getprojectReservList();
  },
  mounted() {
    this.formatData();
  },

  methods: {
    // 获取项目预约列表
    getprojectReservList() {
      projectReservList()
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
    // 新增预约
    add_due() {
      this.dialogDue = true;
    },
    // 确认新增
    adddialogDue() {
      console.log(this.form);
      addProjectReserv(this.form)
        .then((res) => {
          console.log(res);
          if (res.status == 1) {
            this.$message.success("新增成功");
            this.dialogDue = false;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    edit_due() {
      this.customer_msg = true;
    },
    handleUpdate(row) {
      console.log(row);
      this.temp = Object.assign({}, row); // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp);
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    // 测试
    formatData() {
      this.tableData00.forEach((item) => {
        for (let key in item) {
          item[key] = {
            value: item[key],
            edit: false,
          };
        }
      });
    },
    //表格新增行
    addRow() {
      console.log(123);
      this.tableData00.push({
        goods_name: { value: "", edit: true },
        num: { value: "", edit: true },
        note: { value: "", edit: true },
        do: {},
      });
    },
    // 多选
    selectionChangeHandle(val) {
      this.equipmentDataSelections00 = val;
    },
    //删除选中数据（单纯实现前端删除）
    batchDelete(selections) {
      if (selections.length > 0) {
        this.$confirm(`确定删除选中数据?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            for (let i = 0; i < selections.length; i++) {
              for (let y = 0; y < this.tableData00.length; y++) {
                if (this.tableData00[y] == selections[i]) {
                  this.tableData00.splice(y, 1);
                  break;
                }
              }
            }
          })
          .catch(() => {});
      }
    },
    //单元格双击事件
    celledit(row, column, cell, event) {
      console.log("我是哪一行", row);
      console.log("我是哪一列", column);
      console.log(cell);
      console.log(event);
      if (row[column.property]) {
        row[column.property].edit = true;
        this.ccc = true;
        // this.text123 = row.goods_name.value
        setTimeout(() => {
          this.$refs[column.property].focus();
        }, 20);
      }
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
  width: 70px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
  outline: none;
}
.el-row {
  margin-bottom: 15px;
}
.el-row .el-col {
  margin: 0 20px;
}
.el-col .label_title {
  padding: 5px 0;
}
.el-input,
.el-select {
  width: 202px;
}
</style>
