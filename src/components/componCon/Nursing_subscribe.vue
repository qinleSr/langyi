<template>
<!-- 专护士工资 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="add_dialog">
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
           <template v-slot:edit>
             <!-- <button class="slot_btn">编辑</button> -->
             
            <el-dropdown size="small" split-button type="primary"  @command="handleCommand">
              {{text}}
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">已完成</el-dropdown-item>
                    <el-dropdown-item command="b">已取消</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <!-- <el-tag v-else >{{text}}</el-tag> -->
          </template>
            </Maintenance> 
      </div>
    </div>
    <!-- 护理预约 弹框 -->
    <el-dialog title="新增" :visible.sync="dialogForm">
  <el-form :model="form">
    <el-row>
      <el-col>
        <div class="label_title">
          <span>预约客人</span>
        </div>
        <el-select v-model="form.region" placeholder="">
        <el-option label="张一一" value="shanghai"></el-option>
        <el-option label="张一一" value="beijing"></el-option>
      </el-select>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>客人房号</span>
        </div>
        <el-input v-model="form.room_num" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>联系方式</span>
        </div>
        <el-input v-model="form.user_phone" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>预约日期</span>
        </div>
        <el-input v-model="form.due_date" autocomplete="off"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="label_title">
          <span>预约项目(妈妈)</span>
        </div>
        <el-select v-model="form.mom_project" placeholder="">
        <el-option label="中药洗头" value="shanghai"></el-option>
        <el-option label="中药擦身" value="beijing"></el-option>
        <el-option label="会阴护理" value="beijing"></el-option>
        <el-option label="康复操" value="beijing"></el-option>
        <el-option label="红外线烤灯" value="beijing"></el-option>
        <el-option label="紫外线消毒" value="beijing"></el-option>
      </el-select>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>预约项目(宝宝)</span>
        </div>
        <el-select v-model="form.baby_project" placeholder="">
        <el-option label="宝宝用药" value="shanghai"></el-option>
        <el-option label="宝宝游泳" value="beijing"></el-option>
        <el-option label="宝宝排气操" value="beijing"></el-option>
        <el-option label="宝宝鱼肝油" value="beijing"></el-option>
        <el-option label="脐部护理" value="beijing"></el-option>
      </el-select>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>接待人员</span>
        </div>
        <el-select v-model="form.reception" placeholder="">
        <el-option label="王一一" value="shanghai"></el-option>
        <el-option label="王一一" value="beijing"></el-option>
        <el-option label="王一一" value="beijing"></el-option>
        <el-option label="王一一" value="beijing"></el-option>
      </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="label_title">
          <span>备注信息</span>
        </div>
       <el-input v-model="form.name" autocomplete="off"></el-input>
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
          user_phone: "15555828930",
          nursing_date:'2020-4-30 下午15:00',
          nursing_project_mom:'红外线烤灯',
          nursing_project_baby:'宝宝排气操',
          receptionist:'王二'
        }
      ],
      tableLabel: [
        {
          prop: "room_num",
          label: "房间号",
         
        },
        {
          prop: "user_name",
          label: "姓名",
          
        },
         {
          prop: "user_phone",
          label: "联系方式",
          width:'200'
        },
        {
          prop: "nursing_date",
          label: "预约日期/时间",
          width:'400'
        },
        {
          prop: "nursing_project_mom",
          label: "预约项目(妈妈)",
          width:'200'
        },
        {
          prop: "nursing_project_baby",
          label: "预约项目(宝宝)",
         width:'200'
        },
        {
          prop: "receptionist",
          label: "接待人员",
        },{
            prop:'status',
            label:'状态',
            width:'200',
            type:1 
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        dialogForm:false,
        text:'编辑'
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 新增孕期回访
    add_dialog(){
      this.dialogForm = true
    },
    handleCommand(command) {
      if(command=='a'){
        this.text='已完成'
      }else{
        this.text='已取消'
      }
        // this.$message('click on item ' + command);
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
.el-row{
margin-bottom: 10px;
}
.el-row .el-col{
  margin: 0 20px;
}
.el-row .el-col .label_title{
  padding:5px 0;
}
</style>