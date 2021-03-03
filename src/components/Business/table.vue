<template>
  <div class="common-table">
    <div class="All_Content">
      <el-table :data="tableData" height="90%">
        <el-table-column
          v-for="item in tableLabel"
          :key="item.prop"
          :label="item.label"
          :width="item.width ? item.width : 130"
        >
          <template slot-scope="scope">
            <span>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pager"
        layout="total, sizes, prev, pager, next, jumper"
        :total="config.total"
        :current-page.sync="config.page"
        @current-change="changePage"
        :page-size="20"
      ></el-pagination>
    </div>

    <!--分页-->
  </div>
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
      this.$emit("edit", row);
    },
    //删除
    handleDelete(row) {
      this.$emit("del", row);
    },
    //分页
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style >
.All_Content {
  min-width: 1200px;
  height: 600px;
}
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
  background: #eee;
}
.el-table th.is-leaf {
  border-bottom: none;
}
.el-pagination {
  padding: 10px;
}
</style>