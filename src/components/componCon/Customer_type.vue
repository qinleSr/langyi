<template>
  <!-- 产康客户管理--客户分类 -->
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
              <option>客户类别</option>
              <option>总裁</option>
              <option>员工</option>
            </select>
          </div>
          <div class="Choos_Time">
            <div class="Time_title">建档日期</div>
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
        <Maintenance
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        >
          <template v-slot:look>
            <button class="slot_btn" @click="look_msg">查看</button>
          </template>
          <template v-slot:edit>
            <button class="slot_btn">编辑</button>
          </template>
          <template v-slot:edit>
            <button class="slot_btn">编辑</button>
          </template>
        </Maintenance>
      </div>
    </div>
    <!-- 客户基本信息 -->
    <el-dialog title="查看" :visible.sync="customer_msg" width="70%">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>签约日期</span>
            </div>
            <el-date-picker
              v-model="form.sigin_date"
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
            <el-input
              v-model="form.customer_phone"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>房号</span>
            </div>
            <el-input
              v-model="form.customer_room"
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
              v-model="form.customer_food"
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
              v-model="form.production_date"
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
            <el-input v-model="form.to_date" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-input v-model="form.leave_date" autocomplete="off"></el-input>
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
            <el-input v-model="form.child_num" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>区域</span>
            </div>
            <el-input v-model="form.area" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form.focus" placeholder>
              <el-option
                label="A：意向非常强，价格接受度高"
                value="shanghai"
              ></el-option>
              <el-option
                label="A：意向非常强，价格接受度高"
                value="beijing"
              ></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>渠道</span>
            </div>
            <el-select v-model="form.channel" placeholder>
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
            <el-input v-model="form.sigin_money" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>折扣/优惠</span>
            </div>
            <el-input v-model="form.discount" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>签约人员</span>
            </div>
            <el-input v-model="form.sigin_people" autocomplete="off"></el-input>
          </el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
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
            <el-table-column
              prop="first"
              label="第一次"
              width="150"
              edit="false"
            >
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="customer_msg = false">取 消</el-button>
        <el-button type="primary" @click="customer_msg = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bread from "../Business/Bread";
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { productionClientTypeList } from "../../api/production/productionClient";
export default {
  name: "customer",
  components: { Maintenance, Search, Bread },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          signing_date: "2020-4-30",
          user_name: "张一二",
          user_phone: "15555828930",
          production_date: "2020-4-30",

          Focus_on: "A-意向非常强，价格接受度高",
          siging_money: "1800.00",
          preferential: "1800.00",
          channel: "大众点评",
          customer_type: "拓展签约",
        },
      ],
      tableLabel: [
        {
          prop: "signtime",
          label: "签约日期",
          width: "110",
        },
        {
          prop: "name",
          label: "客户姓名",
          width: "90",
        },
        {
          prop: "mobile",
          label: "联系方式",
        },
        {
          prop: "childbirthtime",
          label: "生产日期",
        },
        {
          prop: "project_con",
          label: "项目内容",
          type: 2,
        },
        {
          prop: "focus",
          label: "关注点",
          width: "220",
        },
        {
          prop: "money",
          label: "签约金额",
        },
        {
          prop: "discount",
          label: "折扣/优惠",
        },
        {
          prop: "public_comments",
          label: "大众点评",
        },
        {
          prop: "return_visit",
          label: "回访跟踪",
          type: 1,
        },
        {
          prop: "due_Production",
          label: "产康预约",
          type: 1,
        },
        {
          prop: "ctype",
          label: "客户类别",
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },

      customer_msg: false,
      form: {
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
      row: "",
    };
  },
  created() {
    this.getCustomerType();
  },
  mounted() {
    this.formatData();
  },

  methods: {
    // 获取列表
    getCustomerType() {
      productionClientTypeList()
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
    // 查看用户基本信息
    look_msg() {
      this.customer_msg = true;
    },
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
    selectionChangeHandle() {},
    //单元格双击事件
    celledit(row, column, cell, event) {
      console.log("我是哪一行", row);
      console.log("我是哪一列", column);
      console.log(cell);
      console.log(event);
      if (row[column.property]) {
        row[column.property].edit = true;

        // this.text123 = row.goods_name.value
        setTimeout(() => {
          this.$refs[column.property].focus();
        }, 20);
      }
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
  margin-bottom: 20px;
}
.el-row .el-col {
  margin: 0 15px;
}
.el-row .el-col .label_title {
  padding: 5px 0;
}
.el-col .el-input,
.el-select {
  width: 202px;
}
</style>