<template>
<!-- 客户营养评估 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="add_nutrition">
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
          style="width: 350px;"
        ></el-date-picker>
      </div>
    </div>
           <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config"></common-table>
      </div>
    </div>
  </div>
</template>
<script>
import CommonTable from "../Business/table.vue";
import Search from "../Conpontool/Search.vue";
export default {
  name: "customer",
  components: { CommonTable, Search},
  data() {
    return {
      active: false,
      value1:'',
        tableData: [
        { 
          user_name: "张一二",
          user_phone: "15555828930",
          production_date: "2020-4-30",
          to_date: "2020-4-30",
          leave_date: "2020-4-30",
          in_days:'28',
          food:'悦·套餐',
          room_num:'208',
           baby_sex:'女',
           national:'汉',
         religious:'无',
          production_mode:'顺产',
          feeding_way:"母乳",
        }
      ],
      tableLabel: [
          {
          prop: "user_name",
          label: "姓名",
          
        },
          {
          prop: "user_phone",
          label: "联系方式",
          
        },
       {
          prop: "production_date",
          label: "生产日期",
          
        },{
            prop:"to_date",
            label:"入所日期",
            width:'150'
        },
        {
          prop: "leave_date",
          label: "出所日期",
         width:'150'
        },{
          prop: "in_days",
          label: "入住天数",
          width:'100'
        },
          {
          prop: "food",
          label: "套餐",
          
        },{
           prop: "room_num",
          label: "房间号",
        },
         {
          prop: "baby_sex",
          label: "宝宝性别",
          width:'100'
        }, 
         {
          prop: "national",
          label: "民族",
          
        },
      
         {
          prop: "religious",
          label: "宗教信仰",
          width:'100'
        },
        
         {
          prop: "production_mode",
          label: "生产方式",
          
        },
         {
          prop: "feeding_way",
          label: "喂养方式",
          
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      }
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 新增营养评价
    add_nutrition(){
      this.$router.push('/AddNutrition')
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
  border-bottom: 2px solid #eee
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