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
      <div class="confinement_menu_content">
        <el-table :data="tableData" style="width: 100%" :span-method="objectSpanMethod">
          <el-table-column prop="date" label="第一阶段餐食">
            <el-table-column prop="name" label="类别"> </el-table-column>
            <el-table-column label="2020-4-30">
              <el-table-column prop="province" label="星期一"> </el-table-column>
            </el-table-column>
            <el-table-column label="2020-5-1">
              <el-table-column prop="province" label="星期二"> </el-table-column>
            </el-table-column>
            <el-table-column label="2020-5-2">
              <el-table-column prop="province" label="星期三"> </el-table-column>
            </el-table-column>
            <el-table-column label="2020-5-3">
              <el-table-column prop="province" label="星期四"> </el-table-column>
            </el-table-column>
            <el-table-column label="2020-5-4">
              <el-table-column prop="province" label="星期五"> </el-table-column>
            </el-table-column>
            <el-table-column label="2020-5-5">
              <el-table-column prop="province" label="星期六"> </el-table-column>
            </el-table-column>
            <el-table-column label="2020-5-6">
              <el-table-column prop="province" label="星期日"> </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
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
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 5 === 0) {
          return {
            rowspan: 5,
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

.el-table__row {
  height: 40px;
}
.el-table {
  margin-top: 20px;
}
.el-table__header {
  background-color: red !important;
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
.confinement_but > i {
  font-size: 20px;
  color: #bd9b6f;
}
</style>
