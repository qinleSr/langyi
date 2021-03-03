<template>
  <div class="guest_room">
    <el-card class="box-card">
      <div class="guest_header">
        <!-- 面包屑 -->
        <div class="bread">
          <Bread></Bread>
        </div>
        <!-- 功能操作 -->
        <div class="operation">
          <div class="operation_smile">
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
      <div class="guest_content">
        <div style="width: 100%; height: 600px; margin: 30px auto">
          <ele-calendar
            :render-content="renderContent"
            :data="datedef"
            :prop="prop"
            @pick="datePick"
            @date-change="getMonth"
          ></ele-calendar>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Bread from "../Business/Bread";
// 引入
import eleCalendar from "ele-calendar";
import "ele-calendar/dist/vue-calendar.css";
export default {
  name: "ElementTest",
  data() {
    return {
      datedef: [
        { date: "2020-03-30", content: null, cid: null },
        { date: "2020-03-26", content: null, cid: null },
      ],
      prop: "date", //对应日期字段名
    };
  },
  components: {
    eleCalendar,
    Bread,
  },
  methods: {
    // 通过render-content的渲染Function 自定义日历显示内容
    renderContent(h, parmas) {
      // 自定义样式,我返回的是小点(橘黄色)
      const loop = (data) => {
        return data.defvalue.value
          ? h("div", [
              h("div", data.defvalue.text),
              h(
                "div",
                {
                  style: {
                    width: "4px",
                    height: "4px",
                    margin: "0 auto",
                    borderRadius: "4px",
                    backgroundColor: "red",
                  },
                },
                ""
              ),
            ])
          : h("div", [h("div", data.defvalue.text)]);
      };
      return h(
        "div",
        {
          // 给div绑定样式
          style: {
            minHeight: "45px",
          },
          click() {},
        },
        [loop(parmas)]
      );
    },
    // 获取点击的日期 返回为标准格式 使用date.get方法获取想要的数据
    datePick(date, event, row, dome) {
      console.log(date); // Tue Mar 03 2020 00:00:00 GMT+0800 (中国标准时间)
      var d = new Date(date);
      console.log(d.getDate()); //  点击日
      console.log(d.getMonth() + 1); // 点击月
    },
    // 点击切换月/年按钮时返回的数据 格式为标准格式
    getMonth(data) {
      console.log(data); // Fri Apr 03 2020 00:00:00 GMT+0800 (中国标准时间)
      var d = new Date(data); // 点击月
      console.log(d.getMonth() + 1);
      //d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' +
      //d.getSeconds()		// 标准时间转化       方法
    },
  },
};
</script>
<style>
.guest_header {
  display: flex;
  justify-content: space-between;
}
.operation {
  display: flex;
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
/* .operation_smile img {
 width: 16px;
 height: 16px;
} */
.guest_room {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e7e7e7;
}
.el-date-table-calendar td.current[data-v-55be3324]:not(.disabled) {
   color: #fff;
      background-color: #5cadff;
      border-radius: 50%;
}

.el-date-picker-calendar table   {
  	padding: 10px;
    box-sizing: border-box;
    table-layout: fixed;
    width: 100%;
} 
 
</style>