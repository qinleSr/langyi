<template>
<!-- 客房检查 -->
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
          <Checkroom :tableData="tableData" :tableLabel="tableLabel" :config="config">
             <template v-slot:edit >
               <button class="slot_btn" @click="edit_check">编辑</button>
            </template>
          </Checkroom>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogForm" width="70%">
  <el-form :model="form">
    <el-row>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>合同编号</span>
        </div>
        <el-input v-model="form.contract_no" ></el-input>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>客户姓名</span>
        </div>
        <el-input v-model="form.user_name" ></el-input>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>宝宝姓名</span>
        </div>
        <el-input v-model="form.baby_name" ></el-input>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>入住日期</span>
        </div>
        <el-date-picker v-model="form.to_time" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>入住前房间检查人员</span>
        </div>
         <el-select v-model="form.check_people" placeholder="">
        <el-option label="王一一" value="shanghai"></el-option>
        <el-option label="王二二" value="beijing"></el-option>
      </el-select>
      </div>
    </el-row>
    <el-row>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>建档日期</span>
        </div>
        <el-date-picker v-model="form.inputting_time" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>联系方式</span>
        </div>
        <el-input v-model="form.user_phone" ></el-input>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>宝宝性别</span>
        </div>
        <el-input v-model="form.baby_sex" ></el-input>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>合同套餐</span>
        </div>
        <el-select v-model="form.food" placeholder="">
        <el-option label="淑·套餐" value="shu"></el-option>
        <el-option label="荣·套餐" value="rong"></el-option>
        <el-option label="悦·套餐" value="rong"></el-option>
      </el-select>
      </div>
      <div class="el_items">
        <div class="el_itemtile">
          <span class="improtant">*</span>
          <span>房间号</span>
        </div>
        <el-input v-model="form.room"  :disabled="true"></el-input>
      </div>
    </el-row>
    <el-row>
       <span></span>
      <el-table :data="gridData" :row-class-name="tableRowClassName" @row-click = "onRowClick">
       <el-table-column label="房间设施设备表" class="aaa">
          <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
       <el-table-column property="goods_name" label="物品名称" type="num" width="150"></el-table-column>
       <el-table-column  label="数量" width="200">
         <template slot-scope="scope">
          <input class="tableinput" type="number"  v-model="scope.numberscore" placeholder="请输入数量"  @blur="aaa(scope.$index,scope.numberscore)"/>
         </template>
       </el-table-column>
       <el-table-column property="unit" label="单位"></el-table-column>
       <el-table-column  label="单价(元)">
          <template slot-scope="scope">
          <input class="tableinput" type="number"  v-model="scope.unit_price" placeholder="请输入单价"  @blur="bbb(scope.$index,scope.unit_price)"/>
         </template>
       </el-table-column>
       <el-table-column label="金额(元)" property="money"></el-table-column>
       <el-table-column  label="备注">
         <template slot-scope="scope">
          <input class="tableinput"   v-model="scope.note" placeholder="备注"  @blur="ccc(scope.$index,scope.note)"/>
         </template>
       </el-table-column>
       <el-table-column property="" label="操作">
         <button class="slot_btn">操作</button>
       </el-table-column>
      <!-- <button>123</button> -->
    </el-table-column>
  </el-table>
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
import Checkroom from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
export default {
  name: "customer",
  components: { Checkroom,Search },
  data() {
    return {
      active: false,
      value1:'',
      tableData: [
        {
          check_in_date: "2020-4-30",
          leave_date: "2020-4-30",
          check_in_days: "28",
          user_name: "张一二",
          user_phone: "15555828930",
          due_food:'悦·套餐',
          due_room:'208',
          baby_name:'张宝宝',
          baby_sex:'女',
          is_damage:'有'
        }
      ],
      tableLabel: [
       {
          prop: "check_in_date",
          label: "入住日期",
          width:'160'
        },
        {
          prop: "leave_date",
          label: "出所日期",
           width:'160'
        },{
          prop: "check_in_days",
          label: "入住天数"
        },
        {
          prop: "user_name",
          label: "姓名"
          
        },
        {
          prop: "user_phone",
          label: "联系方式",
           width:'160'
        }, {
          prop: "due_food",
          label: "套餐"
        },
         {
          prop: "due_room",
          label: "房间号",
        },
         {
          prop: "baby_name",
          label: "宝宝姓名"
        },
         {
          prop: "baby_sex",
          label: "宝宝性别",
          
        },
         {
          prop: "check_guestRooms",
          label: "客房检查",
          type:1
        },
         {
          prop: "is_damage",
          label: "是否有损坏"
        },       
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      } ,
      dialogForm:false,
      form: { 
          contract_no: '',
          user_name: '',
          baby_name: '',
          to_time: '',
          check_people: '',
          inputting_time:'',
          user_phone:'',
          baba_sex:'',
          food:'',
          room:''
        },
        gridData: [{
          goods_name: '高尔夫布伞',
          unit: '个',
          money:''
        }, {
         goods_name: '浴袍',
          unit: '个',
          money:''
        }, {
          goods_name: '木制黑色裤夹',
          unit: '个',
          money:''
        }, {
         goods_name: '木质黑色外套衣架',
          unit: '个',
          money:''
        }, {
         goods_name: '黑色丝绸衣架',
          unit: '个',
          money:''
        }, {
         goods_name: '洗衣袋',
          unit: '个',
          money:''
        }, {
         goods_name: '婴儿黑白卡',
          unit: '个',
        }, {
         goods_name: '台面收纳架',
          unit: '个',
          money:''
        }, {
         goods_name: '男拖鞋(沐浴用)',
          unit: '个',
          money:''
        }, {
         goods_name: '女拖鞋(沐浴用)',
          unit: '个',
          money:''
        }, {
         goods_name: '定时器(固定时间10分钟)',
          unit: '个',
          money:''
        }],
        formLabelWidth: '120px',
        num_index:'',
        num_number:'',
        price_index:'',
        price_number:'',
        row_index:''
    };
  },
  created() {
    
  },
  mounted() {},

  methods: {
    // 编辑客房检查
    edit_check(){
      this.dialogForm = true
    },
     indexMethod(index) {
      
        return index+1 * 1;
      },
     aaa(index, number) {
        console.log(index)
      //  console.log(number)
       this.num_index=index
       this.num_number =number
       return
    },   
   bbb(index,number){
      //  console.log(index)
      //  console.log(number)
       this.price_index=index
       this.price_number =number
          this.gridData.forEach((v,k)=>{
           if(index = k){
             console.log(123)
             console.log(k)
             console.log(123)
             v.money[k] = this.num_number * number
           }
         })
       return
   },
   ccc(index,number){
      // console.log(index)
      //  console.log(number)
     
       return
   },
   tableRowClassName({row, rowIndex}) {
     row.row_index = rowIndex;
},
onRowClick (row, event, column) {
  this.currentRowIndex = row.row_index;
// console.log(row.row_index)
this.row_index =row.row_index
}
  }
};
</script>
<style  >
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
.slot_btn{
    border: 0;
    background: #C19A68;
    width: 60px;
    height: 30px;
    border-radius: 3px;
    color: #fff;
}
.el-row{
  display: flex;
    align-items: center;
    /* margin-bottom: 20px; */
}
.el-row .el_items{
  margin: 0 20px;
  width: 202px;
}
.el_items .el_itemtile{
  padding: 10px;
}
.el-table_2_column_12    {
text-align: left !important;
/* background: #7A6F69;color: #fff; */
}
.tableinput{
    height: 40px;
    border: 1px solid #eee;
    border-radius: 8px;
    line-height: 40px;
    text-align: center;
    outline: none;
    display:inline-block;
    width: 140px;
    
}
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
        -webkit-appearance:none;
	}	
input[type="number"]{
        -moz-appearance:none;
	}
</style>