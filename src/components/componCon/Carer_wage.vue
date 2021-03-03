<template>
<!-- 专护士工资 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" >
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
          <Maintenance :tableData="tableData" :tableLabel="tableLabel" :config="config">
             <template v-slot:look>
             <button class="slot_btn">审批</button>
          </template>
           <template v-slot:edit>
             <button class="slot_btn" @click="add_wage">发送审批</button>
          </template>
            </Maintenance> 
      </div>
    </div>
    <!-- 审批弹框 -->
    <el-dialog title="审批" :visible.sync="dialogForm" width="70%">
  <el-form :model="form">
    <el-row>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>客户姓名</span>
        </div>
        <el-input v-model="form.Customer_name" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>专护师姓名</span>
        </div>
        <el-input v-model="form.nursing_name" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>身份证号</span>
        </div>
        <el-input v-model="form.ID_card" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>编号</span>
        </div>
        <el-input v-model="form.no" autocomplete="off"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>房间号</span>
        </div>
        <el-input v-model="form.room_num" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>联系方式</span>
        </div>
        <el-input v-model="form.user_phone" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>出所日期</span>
        </div>
        <el-date-picker v-model="form.leave_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
      </el-col>
       <el-col>
        
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>付款信息</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
       
       <el-form-item label="派遣机构" :label-width="formLabelWidth">
      <el-select v-model="form.institutions" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
      </el-col>
      <el-col>
        <div class="label_title">
          
        </div>
       <el-form-item label="公司名称" :label-width="formLabelWidth">
      <el-input v-model="form.conpanyName" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
      <el-col>
        <div class="label_title"> 
        </div>
         <el-form-item label="联系方式" :label-width="formLabelWidth">
      <el-input v-model="form.conpany_phone" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
       <el-col>
        <div class="label_title"> 
        </div>
         <el-form-item label="账号" :label-width="formLabelWidth">
      <el-input v-model="form.conpany_num" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>考勤统计</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        
       <el-form-item label="到所日期" :label-width="formLabelWidth">
      <el-date-picker v-model="form.to_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
      
    </el-form-item>
      </el-col>
      <el-col>
        <div class="label_title">
          
        </div>
       <el-form-item label="上单日期" :label-width="formLabelWidth">
      <el-input v-model="form.do_time" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
      <el-col>
        <div class="label_title"> 
        </div>
         <el-form-item label="下单日期" :label-width="formLabelWidth">
      <el-input v-model="form.down_time" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
       <el-col>
        <div class="label_title"> 
        </div>
         <el-form-item label="上单总天数" :label-width="formLabelWidth">
      <el-input v-model="form.do_days" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>薪资核算</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
       <el-form-item label="薪资标准" :label-width="formLabelWidth">
<el-select v-model="form.salary" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>      
    </el-form-item>
      </el-col>
      <el-col>
       <el-form-item label="事假" :label-width="formLabelWidth">
      <el-input v-model="form.private_affair" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
      <el-col>
         <el-form-item label="病假" :label-width="formLabelWidth">
      <el-input v-model="form.sick_leave" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
       <el-col>
         <el-form-item label="客诉" :label-width="formLabelWidth">
      <el-input v-model="form.customer_C" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
       <el-form-item label="物品损坏" :label-width="formLabelWidth">
<el-input v-model="form.goods" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
      <el-col>
       <el-form-item label="补发奖金" :label-width="formLabelWidth">
      <el-input v-model="form.bonus" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>   
      <el-col>
         <el-form-item label="其他" :label-width="formLabelWidth">
      <el-input v-model="form.other" autocomplete="off"  style="width:430px"></el-input>
    </el-form-item>
      </el-col>
      <el-col style="width:380px">
      </el-col>
    </el-row>
    <el-row>
      <el-col>
       <el-form-item label="应发薪资" :label-width="formLabelWidth">
<el-input v-model="form.send_salary" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
      <el-col>
       <el-form-item label="实发薪资" :label-width="formLabelWidth">
      <el-input v-model="form.true_salary" autocomplete="off"></el-input>
    </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogForm = false">取 消</el-button>
    <el-button type="primary" @click="dialogForm = false">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
export default {
  name: "customer",
  components: { Maintenance,Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          room_num: "201",
          user_name: "张毅",
          carer_name: "张一二",
          user_phone: "15555828930",
          native_place:'上海',
          age:'35',
          to_date:'2020-4-30',
          single_date:'2020-4-30',
          order_date:'2020-4-30',
          single_date_day:'28'
        }
      ],
      tableLabel: [
        {
          prop: "room_num",
          label: "房间号",
         
        },
        {
          prop: "user_name",
          label: "客户姓名",
          
        },
        {
          prop: "carer_name",
          label: "专护师姓名",
          
        },
         {
          prop: "user_phone",
          label: "联系方式",
        },
        {
          prop: "native_place",
          label: "籍贯",
          
        },
        {
          prop: "age",
          label: "年龄",
          
        },
        {
          prop: "to_date",
          label: "到所日期",
         
        },
        {
          prop: "single_date",
          label: "上单日期",
        },{
          prop: "order_date",
          label: "下单日期",
        },
        {
            prop:'single_date_day',
            label:'上单总天数',
            
        },{
            prop:'status',
            label:'状态',
            type:2 
        },{
            prop:'operation',
            label:'操作',
            type:1
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      dialogForm:false,
       form: {
          Customer_name: '',
          nursing_name: '',
          ID_card: '',
          no: '',
          room_num: '',
          user_phone:'',
          leave_time: '',
          institutions: '',
          conpanyName:'',
          conpany_phone:'',
          conpany_num:'',
          to_time:'',
          do_time:'',
          down_time:'',
          do_days:'',
          salary:'',
          private_affair:'',
          sick_leave:'',
          customer_C:'',
          goods:'',
          bonus:'',
          other:'',
          send_salary:'',
          true_salary:'',
          
        },
        formLabelWidth: '90px'
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 薪资结算
    add_wage(){
      
      this.dialogForm = true
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
  width: 70px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
}
.label_title{
  padding: 5px;
}
.el-row{margin-bottom: 10px;}
.el-col{
  margin: 0 10px;
}
.el-input,.el-select{
  width: 202px;
}
</style>