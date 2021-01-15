<template>
  <div class="All_Main">
    <div class="All_head">
      <Search class="Search"></Search>
      <div class="All_headRight">
        <select>
          <option>全部状态</option>
          <option>跟进中</option>
          <option>已签约</option>
          <option>暂停</option>
          <option>审核中</option>
        </select>
        <select>
          <option>渠道来源</option>
          <option>老客户推荐</option>
          <option>新用户签约</option>
        </select>
        <select>
          <option>销售人员</option>
          <option>王会敏</option>
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
        ></el-date-picker>
      </div>
    </div>
    <div class="All_Content">
        <tr>
            <th>姓名</th>
            <th>联系方式</th>
            <th>家庭地址</th>
            <th>生产医院</th>
            <th>预产期</th>
            <th>渠道</th>
            <th>销售员</th>
            <th>建档日期</th>
            <th>状态</th>
        </tr>
        <tr>
            <td>张一二</td>
            <td>15555828930</td>
            <td>钱江新城某某小区</td>
            <td>省妇保医院</td>
            <td>2020-4-30</td>
            <td>老客户推荐</td>
            <td>王会敏</td>
            <td>2020-4-30</td>
            <td>跟进中</td>
        </tr>
         <tr>
            <td>张一二</td>
            <td>15555828930</td>
            <td>钱江新城某某小区</td>
            <td>省妇保医院</td>
            <td>2020-4-30</td>
            <td>老客户推荐</td>
            <td>王会敏</td>
            <td>2020-4-30</td>
            <td>跟进中</td>
        </tr>
         <tr>
            <td>张一二</td>
            <td>15555828930</td>
            <td>钱江新城某某小区</td>
            <td>省妇保医院</td>
            <td>2020-4-30</td>
            <td>老客户推荐</td>
            <td>王会敏</td>
            <td>2020-4-30</td>
            <td>跟进中</td>
        </tr>
        <div class="Allcontent_Footer">
             <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="12"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
        </div>
    </div>
  </div>
</template>
<script>
import Search from "../Conpontool/Search.vue";
export default {
  name: "CustomerAll",
  components: {
    Search
  },
  data() {
    return {
      value1: "",
      currentPage4: 4
    };
  },
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>
<style  scoped>
.All_Main {
  padding: 10px 0;
}
.All_Main .All_head {
  display: flex;
  align-items: center;
}
.All_Main .All_head .Search {
  flex: 1;
}
.All_Main .All_head .All_headRight {
  flex: 1;
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
}
.All_head .Choos_Time .Time_title {
  font-size: 20px;
  margin: 0 10px;
}
.All_headRight .el-date-picker:active {
  outline: 0;
  border-color: none;
}
.All_Content{
    margin:  20px 0;
}
.All_Content th{
    width: 180px;
    padding: 20px 0;
   
    background: #E7E7E6;
}
.All_Content td{
    width: 180px;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;

}
.All_Content .Allcontent_Footer{
    margin: 10px;
}
</style>