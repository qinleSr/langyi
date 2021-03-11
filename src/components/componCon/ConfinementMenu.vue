<template>
  <div class="confinement_menu">
    <el-card class="box-card">
      <div class="confinement_menu_header">
        <!-- 面包屑 -->
        <div class="confinement_menu_bread">
          <Bread></Bread>
        </div>
        <!-- 功能操作 -->
        <div class="operation">
          <div @click="addConfinementMenu" class="operation_smile">
            <img src="../../assets/img/11.png" />
            <p>新增</p>
          </div>
          <div class="operation_smile">
            <img src="../../assets/img/13.png" />
            <p>查看</p>
          </div>
          <div class="operation_smile">
            <img src="../../assets/img/14.png" />
            <p>导出</p>
          </div>
        </div>
      </div>
      <!-- 搜索 -->
      <el-row class="confinement_row_search">
        <el-col :span="6">
          <div class="search_input">
            <el-input
              class="confinement_row_input"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
            <el-button type="primary">搜索</el-button>
          </div>
        </el-col>
      </el-row>
      <div class="confinement_menu_content">
        <template>
          <el-table
            :data="tableData"
            :span-method="objectSpanMethod"
            border
            style="width: 100%; margin-top: 20px"
          >
            <el-table-column prop="name" label="餐食" width="120">
            </el-table-column>
            <el-table-column prop="type" label="类别" width="100">
            </el-table-column>
            <el-table-column prop="greens_name" label="菜名" width="350">
            </el-table-column>
            <el-table-column prop="ingredient" label="食材"> </el-table-column>
            <el-table-column prop="effect" label="作用" width="350">
            </el-table-column>
          </el-table>
        </template>
      </div>
    </el-card>
    <!-- 新增月子菜单对话框 -->
    <el-dialog title="新增月子餐" :visible.sync="addConfinementMenuDialog">
      <el-form :model="mealsForm">
        <el-row>
          <el-col :span="7">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>套餐</span>
              </div>
              <el-select
                style="100px"
                v-model="food_region"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>类别：</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>名称：</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="15">
            <div style="400px" class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>食材/作用：</span>
              </div>
              <el-input v-model="user_name" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_items">
              <span style="color: #fff">a</span>
            </div>
            <div class="confinement_but">
              <i class="el-icon-circle-plus"></i>
              <i class="el-icon-remove"></i>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7"></el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>类别：</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>名称：</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="15">
            <div style="400px" class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>食材/作用：</span>
              </div>
              <el-input v-model="user_name" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_items">
              <span style="color: #fff">a</span>
            </div>
            <div class="confinement_but">
              <i class="el-icon-circle-plus"></i>
              <i class="el-icon-remove"></i>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7"></el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>类别：</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>名称:</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="15">
            <div style="400px" class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>食材/作用：</span>
              </div>
              <el-input v-model="user_name" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_items">
              <span style="color: #fff">a</span>
            </div>
            <div class="confinement_but">
              <i class="el-icon-circle-plus"></i>
              <i class="el-icon-remove"></i>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7"></el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>类别：</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>名称：</span>
              </div>
              <el-input
                style="margin-right: 20px"
                v-model="user_name"
                autocomplete="off"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="15">
            <div style="400px" class="col_items">
              <div class="head_items">
                <span class="improtant">*</span>
                <span>食材/作用：</span>
              </div>
              <el-input v-model="user_name" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="head_items">
              <span style="color: #fff">a</span>
            </div>
            <div class="confinement_but">
              <i class="el-icon-circle-plus"></i>
              <i class="el-icon-remove"></i>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addConfinementMenuDialog = false">取 消</el-button>
        <el-button type="primary" @click="addConfinementMenuSub">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bread from "../Business/Bread";
export default {
  components: {
    Bread,
  },
  data() {
    return {
      input: "",
      tableData: [
        {
          name: "早餐",
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          name: "早点",
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          name: "午餐",
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          name: "下午点",
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          name: "晚餐",
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          name: "晚点",
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
        {
          type: "",
          greens_name: "",
          ingredient: "",
          effect: null,
        },
      ],
      // 新增月子菜单对话框
      addConfinementMenuDialog: false,
      mealsForm: {},
      mealsFormRules: {},
      value1: "",
      user_name: "",
      food_region: "",
      options: [
        {
          value: "选项1",
          label: "早餐",
        },
        {
          value: "选项2",
          label: "午餐",
        },
        {
          value: "选项3",
          label: "晚餐",
        },
      ],
    };
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 3 === 0) {
          return {
            rowspan: 3,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
    // 新增月子菜单
    addConfinementMenu() {
      console.log("1");
      this.addConfinementMenuDialog = true;
    },
    addConfinementMenuSub(){
      this.addConfinementMenuDialog=false
    }
  },
};
</script>
<style scoped>
.confinement_menu {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e7e7e7;
}
.confinement_menu_bread {
  padding: 0 10px;
  height: 55px;
  border-bottom: 5px solid #bb956f;
}
.confinement_menu_header {
  height: 50px;
  line-height: 50px;
  border-bottom: 5px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.operation_smile {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.operation_smile p {
  font-size: 18px;
  color: #b3965c;
  margin-left: 5px;
}
.search_input {
  display: flex;
}
.confinement_row_search {
  margin: 20px 0;
}
.confinement_row_input {
  margin-right: 10px;
}
.el-table__row {
  height: 40px;
}
.confinement_but {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.el-row {
  margin: 30px 0;
}
.col_items {
  margin: 0 5px;
}
.el-select {
  width: 130px;
}
.head_items {
  margin-bottom: 5px;
}
.confinement_but >i{
  font-size: 20px;
  color: #BD9B6F;
}
</style>