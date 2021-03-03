<template>
  <!-- 入所准备 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
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
        <Innoticelist :tableData="tableData" :tableLabel="tableLabel" :config="config">
          <template v-slot:edit>
            <button class="slot_btn" @click="edit_notice">编辑</button>
          </template>
          <template v-slot:look>
            <button class="slot_btn">查看</button>
          </template>
        </Innoticelist>
      </div>
    </div>
    <el-dialog title="收货地址" :visible.sync="FormNotice" width="70%">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>合同编号</span>
            </div>
            <el-input v-model="form.contractNO" :disabled="true"></el-input>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form.user_name"></el-input>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>宝宝姓名</span>
            </div>
            <el-input v-model="form.baby_name"></el-input>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>入住日期</span>
            </div>
            <el-date-picker
              v-model="form.to_time"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>入住前房间检查人员</span>
            </div>
            <el-date-picker v-model="form.check_people" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>建档日期</span>
            </div>
            <el-date-picker v-model="form.make_time" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form.user_phone"></el-input>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>宝宝性别</span>
            </div>
            <el-input v-model="form.baby_sex"></el-input>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>合同套餐</span>
            </div>
            <el-select v-model="form.food_region" placeholder="请选择套餐">
              <el-option label="淑·套餐" value="shanghai"></el-option>
              <el-option label="荣·套餐" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="col_title">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-input v-model="form.room_num"></el-input>
          </el-col>
        </el-row>
        <el-table class="table_b" 
          :data="tableData00"
          border
          
          @selection-change="selectionChangeHandle"
          @cell-dblclick="celledit"
        >
          <el-table-column>
            <template slot="header" slot-scope="scope" >
              <span>房间设施设备表</span>
              <div class="right_btn">
                <div class="btn_items" @click="addRow()">
                  <img src="../../assets/img/11.png">
                  <button  >新增</button>
                </div>
                 <div class="btn_items" @click="batchDelete(tableDataSelections00)">
                  <img src="../../assets/img/11.png">
                  <button >删除</button>
                </div>
              </div>
            </template>
            <el-table-column type="index" width="85"></el-table-column>
            <el-table-column prop="goods_name" label="物品名称" width="300" edit="false">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.goods_name.edit"
                  ref="goods_name"
                  v-model="scope.row.goods_name.value"
                  style="width: 100%"
                  @blur="scope.row.goods_name.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.goods_name.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="num" width="240" label="数量">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.num.edit"
                  ref="num"
                  v-model="scope.row.num.value"
                  style="width: 100%"
                  @blur="scope.row.num.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.num.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="note" width="400" label="备注">
              <template slot-scope="scope">
                <el-input
                  v-if="scope.row.note.edit"
                  ref="note"
                  v-model="scope.row.note.value"
                  style="width: 100%"
                  @blur="scope.row.note.edit = false"
                ></el-input>
                <span v-else>{{ scope.row.note.value }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="do" width="260" label="操作">
              <template slot-scope="scope">
                <el-button>123</el-button>
                <!-- <span v-else>{{ scope.row.note.value }}</span> -->
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FormNotice = false">取 消</el-button>
        <el-button type="primary" @click="FormNotice = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Innoticelist from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
export default {
  name: "customer",
  components: { Innoticelist, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          Document_date: "2020-4-30",
          check_in_date: "2020-4-30",
          due_days: "28",
          user_name: "张一二",
          user_phone: "15555828930",
          due_food: "悦·套餐",
          due_room: "208",
          baby_name: "张宝宝",
          baby_sex: "女"
        }
      ],
      tableLabel: [
        {
          prop: "Document_date",
          label: "建档日期",
          width: "160"
        },
        {
          prop: "check_in_date",
          label: "入住日期",
          width: "160"
        },
        {
          prop: "due_days",
          label: "预定天数"
        },
        {
          prop: "user_name",
          label: "姓名"
        },
        {
          prop: "user_phone",
          label: "联系方式",
          width: "200"
        },
        {
          prop: "due_food",
          label: "套餐"
        },
        {
          prop: "due_room",
          label: "房间号"
        },
        {
          prop: "baby_name",
          label: "宝宝姓名"
        },
        {
          prop: "baby_sex",
          label: "宝宝性别"
        },
        {
          prop: "operation",
          label: "操作",
          type: 1
        },
        {
          prop: "Check-in",
          label: "入住办理",
          type: 2
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      FormNotice: false,
      form: {
        contractNO: "",
        user_name: "",
        baby_name: "",
        to_time: "",
        check_people: "",
        make_time: "",
        user_phone: "",
        baby_sex: "",
        food_region: "",
        room_num: ""
      },
      formLabelWidth: "120px",
      tableData00: [
        {
          goods_name: "王小虎",
          num: "10",
          note: "上海市普陀区金沙江路 1518 弄"
        },
        {
          goods_name: "王小虎",
          num: "10",
          note: "上海市普陀区金沙江路 1518 弄",
          edit: false
        }
      ],
      tableDataSelections00: [] //选中的表格数据
    };
  },
  created() {
    this.formatData();
  },
  mounted() {},

  methods: {
    // 编辑入所准备
    edit_notice() {
      this.FormNotice = true;
    },
    formatData() {
      this.tableData00.forEach(item => {
        for (let key in item) {
          item[key] = {
            value: item[key],
            edit: false
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
        do: {}
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
          type: "warning"
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
      if (row[column.property]) {
        row[column.property].edit = true;
        setTimeout(() => {
          this.$refs[column.property].focus();
        }, 20);
      }
    }
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
}

.el-row .el-col {
  margin: 0 20px;
}
.el-row .el-col .col_title,
.el-row {
  padding: 10px 0;
}
.el-row .el-col input,
.el-input {
  width: 202px;
}
.right_btn{
  display: flex;
  align-items: center;
      float: right;
}
.right_btn .btn_items{
  display: flex;
    align-items: center;
}
.right_btn .btn_items button{
  border: none;
    color: #c19a68;
    background: none;
    outline: none;
}
.el-table_6_column_46{
  text-align: left;
}    
</style>