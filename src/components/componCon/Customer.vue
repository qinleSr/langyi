<template>
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
        <div class="Tab_Right">
          <div class="Right_items" @click="Add_user">
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
        <div class="tab-card" style="display: block;">
          <CustmerAll></CustmerAll>
        </div>
        <div class="tab-card" style="display: none;">我是有效</div>
        <div class="tab-card" style="display: none;">我是暂停</div>
        <div class="tab-card" style="display: none;">我是审核中</div>
      </div>
    </div>
    <!-- 添加用户对话框 -->
    <el-dialog title="新增客户信息" :visible.sync="adduserdialog" width="70%">
      <!-- 内容主题区域 -->
      <div class="Dialog_box" style="min-width: 800px;">
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>咨询日期</span>
            </div>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>探店日期</span>
            </div>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>咨询顾问</span>
            </div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="user_name" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>客户电话</span>
            </div>
            <el-input v-model="user_phone" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>客户年龄</span>
            </div>
            <el-input v-model="user_age" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>产检医院</span>
            </div>
            <el-input v-model="check_hospital" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>客户地址</span>
            </div>
            <el-input v-model="user_name" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>建卡社区</span>
            </div>
            <el-input v-model="user_phone" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>建卡情况</span>
            </div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>末次月经</span>
            </div>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>孕周期</span>
            </div>
            <el-input v-model="user_phone" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>预产期</span>
            </div>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>头胎/二胎</span>
            </div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>知晓途径(可多选)</span>
            </div>
            <el-checkbox-group v-model="know_me" :min="1">
              <el-checkbox v-for="channel_name in channel" :label="channel_name" :key="channel_name">{{channel_name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>参观过的月子会所</span>
            </div>
            <el-input v-model="look_club" placeholder="请输入内容"></el-input>
          </div>
        </div>
         <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>比较重视的内容</span>
            </div>
            <el-checkbox-group v-model="content" :min="1">
              <el-checkbox v-for="content_name in important_content" :label="content_name" :key="content_name">{{content_name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
         <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>是否试吃</span>
            </div>
            <el-input v-model="is_eat" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>意向套餐</span>
            </div>
            <el-input v-model="want_package" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>意向价格</span>
            </div>
            <el-input v-model="want_price" placeholder="请输入内容"></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>首次报价</span>
            </div>
            <el-input v-model="first_offer" placeholder="请输入内容"></el-input>
          </div>
        </div>
         <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>意向程度</span>
            </div>
             <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span>*</span>
              <span>当前状况</span>
            </div>
            <el-input v-model="first_offer" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adduserdialog = false">取 消</el-button>
        <el-button type="primary" @click="adduserdialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import CustmerAll from "../Business/CustomerAll.vue";
export default {
  name: "customer",
  components: { CustmerAll },
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
      adduserdialog: false,
      options: [
        {
          value: "选项1",
          label: "宋美女"
        },
        {
          value: "选项2",
          label: "王美女"
        }
      ],
      value: "",
      value1: "",
      user_name: "",
      user_phone: "",
      user_age: "",
      check_hospital: "",
      know_me: [],
      channel: [
        "大众点评",
        "微信",
        "论坛",
        "小红书",
        "抖音",
        "微博",
        "关键字搜索",
        "省妇保广告",
        "市妇保广告",
        "小区广告",
        "街面广告",
        "医生介绍",
        "妈咪课堂",
        "朋友推荐",
        "宣传单页",
        "孕妇活动",
        "路过",
        "合作渠道介绍",
        "其他"
      ],
      look_club:'',
      content: [],
      important_content: [
        "独栋物业",
        "连锁品牌",
        "服务模式",
        "距离近",
        "月子餐",
        "装修风格/环境",
        "房间面积/格局",
        "性价比",
        "产后恢复",
        "医疗保障",
        "妈咪课堂",
        "其他方式"
      ],
      is_eat:'',
      want_package:'',
      want_price:'',
      first_offer:''
    };
  },
  created() {},
  mounted() {},

  methods: {
    // tab标签切换事件
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
    // 新增用户事件
    Add_user() {
      this.adduserdialog = true;
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
.Dialog_row {
  display: flex;
  align-items: center;
}
.Dialog_row .Dialog_items {
  margin: 10px 20px;
}
</style>