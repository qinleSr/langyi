<template>
  <!-- 客户跟踪管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <ul class="tabs">
          <li v-for="(tab,index) in tabsName">
            <div class="tab-link" @click="tabsSwitch(index)" :class="{active:tab.isActive}">
              <div class="TabName">{{tab.name}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cards">
        <div class="tab-card" style="display: block;">
          <div class="All_head">
            <Search class="Search"></Search>
            <div class="All_headRight">
              <select>
                <option>全部状态</option>
                <option>跟进中</option>
                <option>已签约</option>
                <option>暂停</option>
                <option>审核中</option>
              </select>
              <select>
                <option>渠道来源</option>
                <option>老客户推荐</option>
                <option>新用户签约</option>
              </select>
              <select>
                <option>销售人员</option>
                <option>王会敏</option>
              </select>
            </div>
            <div class="Choos_Time">
              <div class="Time_title">建档日期</div>
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
          <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config"  @look="lookUser" @add="addUser">
            <!-- <template v-slot:edit>
              <button class="slot_btn" @click="add(scope.row.id)" >新增{{scope.row.id}}</button>
            </template>
            <template v-slot:look>
              <button class="slot_btn" @click="look(scope.row.id)">查看{{scope.row.id}}</button>
            </template> -->
          </common-table>
        </div>
        <div class="tab-card" style="display: none;">我是有效</div>
        <div class="tab-card" style="display: none;">我是暂停</div>
        <div class="tab-card" style="display: none;">我是审核中</div>
      </div>
    </div>
    <!-- 新增对话框 -->
    <el-dialog title="新增" :visible.sync="isShow" width="50%" >
      <el-form>
        <div class="row">
          <div class="row_item">
            <div class="item_title">
              <span class="improtant">*</span>
              <span>首次跟进:</span>
            </div>
            <el-date-picker v-model="tack_time" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="row_item" style="margin-left: 80px;">
            <div class="item_title">
              <span class="improtant">*</span>
              <span>当日是否到店:</span>
            </div>
            <el-select v-model="selectvalue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
         <div class="_title">
              <span class="improtant">*</span>
              <span>沟通信息:</span>
            </div>
            <el-input v-model="msg" placeholder="请输入沟通信息"></el-input>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="get_form">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 查看对话框 -->
    <el-dialog title="查看" :visible.sync="isShow2" width="50%" >
     <common-table :tableData="tableData1" :tableLabel="tableLabel1" :config="config1"></common-table>
    </el-dialog>
  </div>
</template>
<script>
import CommonTable from "../Business/table_Track.vue";
import {listUser,addUserTrack} from '../../api/user_list'
import Search from "../Conpontool/Search.vue";
export default {
  name: "customer",
  components: { CommonTable, Search },
  data() {
    return {
      tabsName: [
        {
          name: "全部",
          isActive: true
        },
        {
          name: "有效",
          isActive: false
        },
        {
          name: "暂停",
          isActive: false
        },
        {
          name: "审核中",
          isActive: false
        }
      ],
      active: false,
      value1: "",
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "mobile",
          label: "联系方式"
        },
        {
          prop: "msg",
          label: "沟通信息",
          width: "200"
        },
        {
          prop: "status",
          label: "状态"
        },
        {
          prop: "hospital",
          label: "生产医院"
        },
        {
          prop: "predict_at",
          label: "预产期"
        },
        {
          prop: "know_source",
          label: "渠道"
        },
        {
          prop: "answer",
          label: "销售员"
        },
        {
          prop: "question_at",
          label: "建档日期"
        },
        {
          label: "操作",
          type: 1
        },
        {
          label: "操作",
          type: 2
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      isShow: false,
      isShow2:false,
      options: [
        {
          value: "是",
          label: "是"
        },
        {
          value: "否",
          label: "否"
        }
      ],
      selectvalue: "",
      msg:'',
       tableLabel1: [
        {
          prop: "name",
          label: "姓名",
          width:'90'
        },
        {
          prop: "answer",
          label: "销售员",
          width:'90'
        },{
          prop: "msg",
          label: "沟通信息",
          width:'200'
        },{
          prop: "to_shop",
          label: "客户是否到店",
          
        },
        {
          prop: "is_siging",
          label: "客户是否签约",
          
        },
        {
          prop: "to_time",
          label: "到访时间",
          width:'120'
        },
        {
          prop: "status",
          label: "跟踪状况",
           
        },
        ],
         tableData1: [
        {
          user_name: "张一二",
          salesman: "王慧明",
          msg: "客户第一次到店",
          to_shop: "否",
          is_siging: "未签约",
          to_time: "2020-4-30",
          status: "有效",
        }
      ],
       config1: {
        page: 1,
        total: 30,
        loading: false,
        
      },
      tack_time:'',
      operateType:'',
      edit_id:'',
      look_id:''
    };
  },
  created() {},
  mounted() {
    this.getList()
  },

  methods: {
    tabsSwitch: function(tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-card"),
        len = tabCardCollection.length;
      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
    },
    // 新增用户
    add() {
      this.isShow = true;
    },
     addUser(row) {
        this.operateType = 'add'
        this.isShow = true
        this.edit_id= row
            },
            lookUser(row) {
                this.operateType = 'look'
                this.isShow2 = true
                this.look_id= row
               
            },
    // 查看用户信息
    look(){
      this.isShow2=true
    },
    // 查询客户信息
    getList() {
    listUser().then(res => {
      console.log(res.data.data)
      this.config.page = res.data.data.current_page
         this.tableData = res.data.data.data
          // this.result = res;//保存请求下来的数据
        })
    },
    // 提交新增表单
    get_form(){
      var form_track ={
       is_comming:this.selectvalue,
       content:this.msg,
       track_at:this.tack_time,
       customer_id:this.edit_id
     }
addUserTrack(form_track).then(res => {
  console.log(res)
  console.log(res.config.data.content)
 return
     if(res.data.status == 0){
       this.tableData.push(res.config.content)
           this.$message.success('恭喜您创建成功!');
           this.isShow = false
          //  location.reload()
        }else{
           this.$message.error(res.data.message);
        }
      }).catch(res=>{
         this.$message.success(res.data.message);
    
        })
    }
  }
};
</script>
<style  scoped>
.el-dialog th{
  padding:0 20px;
}
.el-form .row {
  display: flex;
  align-items: center;
}
.row .row_item .item_title {
  padding: 10px 0;
}
._title{
  padding: 10px 0;
}
.improtant {
  color: red;
}
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
.CustmerBox_Head .Tab ul {
  display: flex;
  align-items: center;
}
.CustmerBox_Head .Tab ul li {
  list-style: none;
  width: 100px;
  text-align: center;
  cursor: pointer;
}
.tabs .tab-link.active {
  border-bottom: 3px solid #7a6f69;
}
.CustmerBox_Head .CustmerBox_Right {
  display: flex;
  align-content: center;
}
.tabs .tab-link .TabName {
  padding: 10px 0;
}
.cards .tab-card {
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 1px 1px 1px #eee;
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
}
.Tab_Right .Right_items .Right_itemsTitle {
  padding: 0 10px;
}
.slot_btn {
  border: 0;
  background: #c19a68;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
  outline: none;
}
</style>