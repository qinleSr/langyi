<template>
<!-- 妈妈每日护理记录 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
          <div class="Tab_Right">
          <div class="Right_items" @click="add_order">
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
      
          <Maintenance :tableData="tableData" :tableLabel="tableLabel" :config="config">
             <template v-slot:edit>
             <button class="slot_btn">查看</button>
          </template>
            </Maintenance> 
      </div>
    </div>
    <!-- 新增妈妈记录弹框 -->
    <el-dialog title="收货地址" :visible.sync="dialogMom">
  <el-form :model="form">
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>日期</span>
              </div>
              <el-date-picker value-format="yyyy-MM-dd" v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
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
                  <span>妈妈姓名</span>
              </div>
              <el-input v-model="form.mom_name" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>产后天数</span>
              </div>
              <el-input v-model="form.postpartum_days" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>体温</span>
              </div>
              <el-input v-model="form.body_C" autocomplete="off"></el-input>℃
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>乳房左侧</span>
              </div>
              <el-input v-model="form.breast_left" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>乳房右侧</span>
              </div>
              <el-input v-model="form.breast_right" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>宫底</span>
              </div>
              <el-input v-model="form.GD" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>切口</span>
              </div>
              <el-input v-model="form.incision" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>恶露量</span>
              </div>
              <el-input v-model="form.E_L_L" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>恶露颜色</span>
              </div>
              <el-input v-model="form.E_L_color" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>会阴护理</span>
              </div>
              <el-input v-model="form.H_y" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>康复操</span>
              </div>
              <el-input v-model="form.rehabilitation" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>紫外线</span>
              </div>
              <el-input v-model="form.UV" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>主诉</span>
              </div>
              <el-input v-model="form.C_C" autocomplete="off" style="width:450px"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>建议</span>
              </div>
              <el-input v-model="form.advice" autocomplete="off" style="width:430px"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>签名</span>
              </div>
              <el-input v-model="form.sigin" autocomplete="off"></el-input>
          </el-col>
      </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogMom = false">取 消</el-button>
    <el-button type="primary" @click="dialogMom = false">确 定</el-button>
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
          date: "2020-4-30",
          room_num: "201",
          mom_name: "张一二",
          postpartum_days: "25",
          body_C:'',
          breast_left:'',
          breast_right:'',
          GD:'',
          incision:'',
          E_L_L:'',
          E_L_color:'',
          H_y:'',
          rehabilitation:'',
          UV:'',
          C_C:"",
          advice:'',
          sigin:''
        }
      ],
      tableLabel: [
        {
          prop: "date",
          label: "日期",
         
        },
        {
          prop: "room_num",
          label: "房间号",
          width:'70'
        },
        {
          prop: "mom_name",
          label: "妈妈姓名",
          
        },
        {
          prop: "postpartum_days",
          label: "产后天数",
          
        },
         {
          prop: "body_C",
          label: "体温",
          width:'70'
        },
        {
          prop: "breast_left",
          label: "乳房左侧",
          
        },
        {
          prop: "breast_right",
          label: "乳房右侧",
          
        },
        {
          prop: "GD",
          label: "宫底",
          width:'70'
        },
        {
          prop: "incision",
          label: "切口",
          width:'70'
        },
        {
            prop:'E_L_L',
            label:'恶露量',
            
            
        },{
            prop:'E_L_color',
            label:'恶露颜色',
            width:'100'
        },{
            prop:'H_y',
            label:'会阴护理',
            
        },{
            prop:'rehabilitation',
            label:'康复操',
            
        },{
            prop:'UV',
            label:'紫外线',
            
        },{
            prop:'C_C',
            label:'主诉',
            
        },{
            prop:'advice',
            label:'建议',
            
        },{
            prop:'sigin',
            label:'签名',
            
        }
        
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      dialogMom:false,
       form: {
          date: '',
          room_num:'',
          mom_name: '',
          postpartum_days: '',
          body_C: '',
          breast_left: '',
          breast_right:'',
          GD: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 新增妈妈护理记录单
    add_order(){
        this.dialogMom = true
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




.el-button--primary {
  background: #c19a68;
  color: #fff;
  border-color: #c19a68;
}
.Dialog_row {
  display: flex;
  align-items: center;
}
.Dialog_row .Dialog_items {
  margin: 10px 20px;
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
  width: 60px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
}
.el-row{
    margin-bottom: 10px;
}
.el-col .label_title{
    padding: 5px;
}
.el-input,.el-select{
    width: 202px;
}
</style>