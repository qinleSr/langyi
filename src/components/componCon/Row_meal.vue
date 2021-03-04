<template>
  <!-- 月子排餐 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div @click="addFootMeal" class="Right_items">
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
              style="width: 350px"
            ></el-date-picker>
          </div>
        </div>
        <Maintenance
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        >
          <template v-slot:edit>
            <button class="slot_btn">编辑</button>
            <button class="slot_btn">查看</button>
          </template>
        </Maintenance>
      </div>
    </div>
    <!-- 月子新增对话框 -->
    <el-dialog title="新增月子餐" :visible.sync="addDialogVisible">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>客户姓名</span>
              </div>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>客户姓名</span>
              </div>
              <el-input style="margin-right:20px;" v-model="form.user_name" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>客户姓名</span>
              </div>
              <el-input v-model="form.user_name" autocomplete="off"></el-input>
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
              <el-select v-model="form.food_region" placeholder="">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>套餐</span>
              </div>
              <el-select v-model="form.food_region" placeholder="">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col>
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>客户姓名</span>
              </div>
              <el-input v-model="form.user_name" autocomplete="off"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addFootMealup">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { confinementList } from "../../api/food/confinement";
export default {
  name: "customer",
  components: { Maintenance, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          user_name: "张毅",
          user_phone: "15555828930",
          production_date: "2020-4-30",
          in_date: "2020-4-30",
          out_date: "2020-4-30",
          in_days: "28",
          package: "淑·套餐",
          room_num: "201",
        },
      ],
      tableLabel: [
        {
          prop: "user_name",
          label: "客户姓名",
        },
        {
          prop: "user_phone",
          label: "联系方式",
        },
        {
          prop: "production_date",
          label: "生产日期",
          width: "200",
        },
        {
          prop: "in_date",
          label: "入所日期",
          width: "200",
        },
        {
          prop: "out_date",
          label: "出所日期",
          width: "200",
        },
        {
          prop: "in_days",
          label: "入住天数",
        },
        {
          prop: "package",
          label: "套餐",
        },
        {
          prop: "room_num",
          label: "房间号",
        },
        {
          prop: "row_meal",
          label: "月子排餐",
          width: "300",
          type: 1,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      // 控制新增对话框
      addDialogVisible: true,
      form: {},
    };
  },
  created() {
    this.getconfinementList();
  },
  mounted() {},

  methods: {
    // 获取月子排餐列表
    getconfinementList() {
      confinementList()
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
    addFootMeal() {
      this.addDialogVisible = true;
    },
    addFootMealup() {
      this.addDialogVisible = false;
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
  width: 70px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
}
</style>