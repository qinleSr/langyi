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
                  <span>出生天数</span>
              </div>
              <el-input v-model="form.birth_days" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>体温(08:00)</span>
              </div>
              <el-input v-model="form.body_C" autocomplete="off"></el-input>℃
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>体温(20:00)</span>
              </div>
              <el-input v-model="form.body_C2" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>体重(g)</span>
              </div>
              <el-input v-model="form.weight" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>喂水(ml)</span>
              </div>
              <el-input v-model="form.Drink" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>母乳(次+ml)</span>
              </div>
              <el-input v-model="form.breast_milk" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>配方(ml)</span>
              </div>
              <el-input v-model="form.formula" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>总量(次+ml)</span>
              </div>
              <el-input v-model="form.total" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>吐奶(次)</span>
              </div>
              <el-input v-model="form.Spit_milk" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>五官</span>
              </div>
              <el-input v-model="form.features" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>黄疸</span>
              </div>
              <el-input v-model="form.jaundice" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>脐部</span>
              </div>
              <el-input v-model="form.belly" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>臀部</span>
              </div>
              <el-input v-model="form.hip" autocomplete="off" ></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>皮肤</span>
              </div>
              <el-input v-model="form.skin" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>大便次数</span>
              </div>
              <el-input v-model="form.db_num" autocomplete="off"></el-input>
          </el-col>
           <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>大便性质</span>
              </div>
              <el-input v-model="form.db_type" autocomplete="off"></el-input>
          </el-col>
           <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>游泳</span>
              </div>
              <el-input v-model="form.swimming" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              
          </el-col>
          <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>小便次数</span>
              </div>
              <el-input v-model="form.xb_num" autocomplete="off"></el-input>
          </el-col>
           <el-col>
              <div class="label_title">
                  <span class="improtant">*</span>
                  <span>小便性质</span>
              </div>
              <el-input v-model="form.xb_type" autocomplete="off"></el-input>
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
          birth_days: "25",
          body_C:'',
           body_C2:'',
          weight:'',
          breast_milk:'',
          formula:'',
          total:'',
          Drink:'',
          Spit_milk:'',
          features:'',
          jaundice:'',
          belly:'',
          hip:"",
          skin:'',
          db_num:'',
          db_type:'',
          xb_num:'',
          xb_type:'',
          swimming:'',
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
          prop: "birth_days",
          label: "出生天数",
          
        },
         {
          prop: "body_C",
          label: "体温08:00(℃)",
          
        },
        {
          prop: "body_C2",
          label: "体温20:00(℃)",
          
        },
        {
          prop: "weight",
          label: "体重(g)",
          
        },
        {
          prop: "breast_milk",
          label: "母乳(次+ml)",
          
        },
        {
          prop: "formula",
          label: "配方(ml)",
       
        },
        {
            prop:'total',
            label:'总量(次+ml)',
            
            
        },{
            prop:'Drink',
            label:'喂水(ml)',
            
        },{
            prop:'Spit_milk',
            label:'吐奶(次)',
            
        },{
            prop:'features',
            label:'五官',
            
        },{
            prop:'jaundice',
            label:'黄疸',
            
        },{
            prop:'belly',
            label:'脐部',
            
        },{
            prop:'hip',
            label:'臀部',
            
        },{
            prop:'skin',
            label:'皮肤',
            
        },{
             prop:'db_num',
            label:'大便次数',
        },{
             prop:'db_type',
            label:'大便性质',
        },{
             prop:'xb_num',
            label:'小便次数',
        },{
             prop:'xb_type',
            label:'小便性质',
        },{
             prop:'swimming',
            label:'游泳',
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
         date: "",
          room_num: "",
          mom_name: "",
          birth_days: "",
          body_C:'',
           body_C2:'',
          weight:'',
          breast_milk:'',
          formula:'',
          total:'',
          Drink:'',
          Spit_milk:'',
          features:'',
          jaundice:'',
          belly:'',
          hip:"",
          skin:'',
          db_num:'',
          db_type:'',
          xb_num:'',
          xb_type:'',
          swimming:'',
          sigin:''
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