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
    <el-dialog title="新增" :visible.sync="dialogMom">
  <el-form :model="form">
      <el-row>
          <el-col>
              <div class="label_title">
                  <span>日期</span>
              </div>
              <el-date-picker value-format="yyyy-MM-dd" v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>房间号</span>
              </div>
              <el-input v-model="form.room_num" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>妈妈姓名</span>
              </div>
              <el-input v-model="form.mom_name" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>入住天数</span>
              </div>
              <el-input v-model="form.live_days" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span>产后天数</span>
              </div>
              <el-input v-model="form.postpartum_days" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>体温</span>
              </div>
              <el-input v-model="form.body_C" autocomplete="off" ></el-input>℃
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>血压</span>
              </div>
              <el-input v-model="form.blood_pressure" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>宫口</span>
              </div>
              <el-input v-model="form.GK" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span>切口</span>
              </div>
              <el-input v-model="form.incision" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>恶露情况</span>
              </div>
              <el-input v-model="form.E_L_status" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>乳头(左侧)</span>
              </div>
              <el-input v-model="form.RT_left" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>乳头(右侧)</span>
              </div>
              <el-input v-model="form.RT_right" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span>乳管(左侧)</span>
              </div>
              <el-input v-model="form.RG_left" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>乳管(右侧)</span>
              </div>
              <el-input v-model="form.RG_right" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>乳汁(左侧)</span>
              </div>
              <el-input v-model="form.RZ_left" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>乳汁(右侧)</span>
              </div>
              <el-input v-model="form.RZ_right" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span>饮食</span>
              </div>
              <el-input v-model="form.eat" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>睡眠</span>
              </div>
              <el-input v-model="form.sleep" autocomplete="off" ></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>大便</span>
              </div>
              <el-input v-model="form.DB" autocomplete="off"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>小便</span>
              </div>
              <el-input v-model="form.XB" autocomplete="off"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">
                  <span>客户主诉</span>
              </div>
              <el-input v-model="form.C_C" autocomplete="off" style="width:430px"></el-input>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <div class="label_title">  
                  <span>处理意见</span>
              </div>
              <el-input v-model="form.avice" autocomplete="off" style="width:430px"></el-input>
          </el-col>
          <el-col>
              <div class="label_title">
                  <span>签名</span>
              </div>
              <el-input v-model="form.sigin" autocomplete="off" ></el-input>
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
          live_days:'30',
          postpartum_days: "25",
          body_C:'',
          blood_pressure:'',
          GD:'',
          incision:'',
          E_L_status:'',
          RT_left:'',
          RT_right:'',
          RG_left:'',
          RG_right:'',
          RZ_left:'',
          RZ_right:"",
          eat:'',
          sleep:'',
          DB:'',
          XB:'',
          C_C:'',
          avice:'',
          sigin:'',
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
          prop: "live_days",
          label: "入住天数",
          
        },
         {
          prop: "postpartum_days",
          label: "产后天数",
          width:'70'
        },
        {
          prop: "body_C",
          label: "体温",
          
        },
        {
          prop: "blood_pressure",
          label: "血压",
          
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
            prop:'E_L_status',
            label:'恶露情况',
            
            
        },{
            prop:'RT_left',
            label:'乳头(左侧)',
            width:'90'
        },{
            prop:'RT_right',
            label:'乳头(右侧)',
             width:'90'
        },{
            prop:'RG_left',
            label:'乳管(左侧)',
            
        },{
            prop:'RG_right',
            label:'乳管(右侧)',
            
        },{
            prop:'RZ_left',
            label:'乳汁(左侧)',
            
        },{
            prop:'RZ_right',
            label:'乳汁(右侧)',
            
        },{
            prop:'eat',
            label:'饮食',
            
        },{
            prop:'sleep',
            label:'睡眠',
            
        },{
            prop:'DB',
            label:'大便',
            
        },{
            prop:'XB',
            label:'小便',
            
        },{
            prop:'C_C',
            label:'客户主诉',
            
        },{
            prop:'avice',
            label:'处理意见',
            
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
          baby_name: '',
          medication: '',
          status: '',
          sigin:'',

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