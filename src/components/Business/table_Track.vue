<template>
  <div class="common-table">
    <!-- <div   class="All_Content"> -->
    <el-table :data="tableData" height="90%" stripe>
      <el-table-column type="selection"> </el-table-column>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 140"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
          <slot
            name="edit"
            :id="scope.row.id"
            v-if="item.type == 1"
            scope.row.id
          >
            <button class="slot_btn" @click="handleEdit(scope.row.id)">
              编辑{{ scope.row.id }}
            </button>
          </slot>
          <slot name="look" v-if="item.type == 2" scope.row.id>
            <button class="slot_btn" @click="handleLook(scope.row.id)">
              查看{{ scope.row.id }}
            </button>
          </slot>
          <slot name="edit1" v-if="item.type == 3" scope.row.id>
            <button class="slot_btn" @click="handleEdit(scope.row.id)">
              编辑{{ scope.row.id }}
            </button>
          </slot>
          <slot name="edit2" v-if="item.type == 4" scope.row.id>
            <button class="slot_btn" @click="handleEdit(scope.row.id)">
              编辑{{ scope.row.id }}
            </button>
          </slot>
          <slot
            name="edit3"
            :id="scope.row.id"
            v-if="item.type == 5"
            scope.row.id
          >
            <button class="slot_btn" @click="handleEdit(scope.row.id)">
              编辑{{ scope.row.id }}
            </button>
          </slot>
          <slot name="look1" v-if="item.type == 6" scope.row.id>
            <button class="slot_btn" @click="handleLook(scope.row.id)">
              查看{{ scope.row.id }}
            </button>
          </slot>
          <slot name="look2" v-if="item.type == 7" scope.row.id>
            <button class="slot_btn" @click="handleLook(scope.row.id)">
              查看{{ scope.row.id }}
            </button>
          </slot>
          <slot name="look3" v-if="item.type == 8" scope.row.id>
            <button class="slot_btn" @click="handleLook(scope.row.id)">
              查看{{ scope.row.id }}
            </button>
          </slot>

          <slot name="look4" v-if="item.type == 10" scope.row.current_state>
            <span v-show="scope.row.current_state == 0" style="color: #72635c"
              >跟进中</span
            >
            <span v-show="scope.row.current_state == 1" style="color: #bf9874"
              >已签约</span
            >
            <span v-show="scope.row.current_state == 2" style="color: #b0b2b5"
              >暂停</span
            >
            <span v-show="scope.row.current_state == 3" style="color: #72635c"
              >审核中</span
            >
          </slot>
          <slot name="look4" v-if="item.type == 11" scope.row>
            <button class="slot_btn" @click="handleEdit(scope.row)">
              修改
            </button>
            <button class="slot_btn" @click="handleLook(scope.row.id)">
              查看
            </button>
          </slot>
          <!-- <slot name="look1"  v-if="item.type==3" scope.row.id></slot>
          <slot name="look2"  v-if="item.type==4" scope.row.id>{{scope.row.id}}</slot>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="total, sizes, prev, pager, next, jumper"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="config.size"
      :page-sizes="[3, 5, 10, 15, 20]"
      @size-change="changeSize"
    ></el-pagination>
  </div>

  <!--分页-->
</template>
<script>
// config分页数据，这里面至少包括当前页码 总数量
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  methods: {
    //更新
    handleEdit(row) {
      // console.log(row);
      this.$emit("add", row);
    },
    //查看
    handleLook(row) {
      console.log(row);
      this.$emit("look", row);
    },
    //删除
    handleDelete(row) {
      this.$emit("look", row);
    },
    //页数
    changePage(page) {
      this.$emit("toChangePage", page);
    },
    // 条数
    changeSize(size) {
      this.$emit("changeSize", size);
    },
  },
};
</script>
<style >
.el-table th {
  text-align: center;
  font-size: 16px;
  color: #333333;
}
.el-table td {
  text-align: center;
  font-size: 14px;
}
.el-table__header-wrapper {
  border-bottom: 1px solid #ebeef5;
}
.el-table th.is-leaf {
  border-bottom: none;
  background: #eee;
}
.All_head {
  display: flex;
  align-items: center;
  padding: 10px 0;
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
</style>