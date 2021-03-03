<template>
<!-- 专护士信息 -->
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
             <button class="slot_btn">查看</button>
          </template>
            </Maintenance> 
      </div>
    </div>
    <!-- 新增护士信息弹框 -->
    <el-dialog title="收货地址" :visible.sync="dialogCare" width="70%">
  <el-form :model="form">
    <el-row>
      <el-col>
        <div class="label_title">
          <span>房间号</span>
        </div>
        <el-select v-model="form.roomNum" placeholder="请选择活动区域">
        <el-option label="305" value="shanghai"></el-option>
        <el-option label="305" value="beijing"></el-option>
      </el-select>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>专护师姓名</span>
        </div>
        <el-input v-model="form.user_name" autocomplete="off"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>联系方式</span>
        </div>
        <el-input v-model="form.user_phone" autocomplete="off"></el-input>
      </el-col>
      <el-col style="width:202px">
        <div class="label_title">
          <span>籍贯</span>
        </div>
        <el-input v-model="form.native_place" autocomplete="off" style="width:100px"></el-input>
      </el-col>
      <el-col>
        <div class="label_title" >
          <span>年龄</span>
        </div>
        <el-input v-model="form.user_age" autocomplete="off" style="width:100px"></el-input>
      </el-col>
      <el-col>
        <div class="label_title" >
          <span>上单总单数</span>
        </div>
        <el-input v-model="form.do_order" autocomplete="off" style="width:100px"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="label_title">
          <span>客人姓名</span>
        </div>
        <el-select v-model="form.customer_name" placeholder="请选择活动区域">
        <el-option label="张一一" value="shanghai"></el-option>
        <el-option label="张二二" value="beijing"></el-option>
      </el-select>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>到所日期</span>
        </div>
      <el-date-picker v-model="form.to_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col>
        <div class="label_title">
          <span>上单日期</span>
        </div>
        <el-date-picker v-model="form.do_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>

      </el-col>
      <el-col>
        <div class="label_title">
          <span>下单日期</span>
        </div>
              <el-date-picker v-model="form.down_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>

      </el-col>
      <el-col>
        <div class="label_title">
          <span>有无医院陪护</span>
        </div>
       <el-select v-model="form.is_hospital" placeholder="请选择活动区域">
        <el-option label="有" value="shanghai"></el-option>
        <el-option label="无" value="beijing"></el-option>
      </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="width:100%">
        <div class="label_title" >
          <span>客户投诉记录</span>
        </div>
        <el-input v-model="form.C_C" autocomplete="off" style="width:100%"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="width:100%">
        <div class="label_title" >
          <span>护士长评语</span>
        </div>
        <el-input v-model="form.SAY" autocomplete="off" style="width:100%"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="width:100%">
        <div class="label_title" >
          <span>备注信息</span>
        </div>
        <el-input v-model="form.note" autocomplete="off" style="width:100%"></el-input>
      </el-col>
    </el-row>
  </el-form>
   <el-row>
      <el-col style="width:100%">
        <div class="label_title" style="display:flex;align-items: center;">
          <span>上传证件照(最多10张，每张≤100KB)</span>
          <span>例：身份证/健康证/专护师证等</span>
        </div>
        <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove" style="margin: 20px 0;">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
      </el-col>
    </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogCare = false">取 消</el-button>
    <el-button type="primary" @click="dialogCare = false">确 定</el-button>
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
          width: "200"
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
          width: "200"
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
            type:1
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      form: {
          roomNum: '',
          user_name: '',
          user_phone: '',
          native_place: '',
          user_age: '',
          do_order: '',
          customer_name: '',
          to_time: '',
          do_time:'',
          down_time:'',
          is_hospital:'',
          C_C:'',
          SAY:'',
          note:''
        },
        formLabelWidth: '120px',
        dialogCare:false,
         dialogImageUrl: '',
        dialogVisible: false
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 新增信息弹框
    add_dialog(){
      this.dialogCare = true
    },
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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
  width: 60px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
}
.el-col{
  margin: 0 20px;
  width:202px;
}
.label_title{
  padding: 5px 0;
}
.el-input,.el-select{
  width: 202px;
}

</style>