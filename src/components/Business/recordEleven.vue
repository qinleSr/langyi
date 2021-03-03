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
              <span class="improtant">*</span>
              <span>开药日期/时间</span>
            </div>
            <el-date-picker
              value-format="yyyy-MM-dd"
              v-model="form.prescribing_date"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
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
              <span>宝宝姓名</span>
            </div>
            <el-input v-model="form.baby_name" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>用药情况(药名)</span>
            </div>
            <el-input v-model="form.drug" autocomplete="off" style="width:430px"></el-input>
          </el-col>
          <el-col style="width:120px">
            
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>执行情况(执行日期)</span>
            </div>
             <el-date-picker
              value-format="yyyy-MM-dd"
              v-model="form.situation"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>护士签名</span>
            </div>
            <el-input v-model="form.nurse" autocomplete="off"></el-input>
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
  components: { Maintenance, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          prescribing_date: "2020-4-30",
          room_num: "201",
          mom_name: "张一二",
          baby_name:'张一一/张二二',
          brith_days: "30",
          drug: "",
          situation: "",
          nurse: "",
        }
      ],
      tableLabel: [
        {
          prop: "prescribing_date",
          label: "开药日期/时间"
        },
        {
          prop: "room_num",
          label: "房间号"
        },
        {
          prop: "mom_name",
          label: "妈妈姓名"
        },{
          prop: "baby_name",
          label: "宝宝姓名"
        },
        {
          prop: "brith_days",
          label: "出生天数",
          width: "280"
        }, 
        {
          prop: "drug",
          label: "用药情况(药名)",
          width:'250'
        },
        {
          prop: "situation",
          label: "执行情况(执行时间)",
          width:'200px'
        },
       
        {
          prop: "nurse",
          label: "护士签名"
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      dialogMom: false,
      form: {
         prescribing_date: "",
          room_num: "2",
          mom_name: "",
          baby_name:'',
          brith_days: "",
          drug: "",
          situation: "",
          nurse: "",
      },
      formLabelWidth: "120px"
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 新增妈妈护理记录单
    add_order() {
      this.dialogMom = true;
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
.el-row {
  margin-bottom: 10px;
}
.el-col .label_title {
  padding: 5px;
}
.el-input,
.el-select {
  width: 202px;
}
</style>