<template>
  <!-- 客户信息管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <ul class="tabs">
          <li v-for="(tab, index) in tabsName" :key="index">
            <div
              class="tab-link"
              @click="tabsSwitch(index)"
              :class="{ active: tab.isActive }"
            >
              <div class="TabName">{{ tab.name }}</div>
            </div>
          </li>
        </ul>
        <div class="Tab_Right">
          <div class="Right_items" @click="Add_user">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle">新增</div>
          </div>
          <!-- <div class="Right_items">
            <img src="../../assets/img/12.png" />
            <div class="Right_itemsTitle">修改</div>
          </div>
          <div class="Right_items">
            <img src="../../assets/img/13.png" />
            <div class="Right_itemsTitle">查看</div>
          </div> -->
          <div class="Right_items">
            <img src="../../assets/img/14.png" />
            <div class="Right_itemsTitle">导出</div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="tab-card" style="display: block">
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
                v-model="head_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 350px"
              ></el-date-picker>
              <el-button style="margin: 0 20px" type="primary">确定</el-button>
            </div>
          </div>
          <common-table
            :tableData="tableData"
            :tableLabel="tableLabel"
            :config="config"
            @toChangePage="tapChangePage"
            @changeSize="changeSize"
            @add="editCustomer"
          >
            <!-- <template v-slot:edit>
              <button class="slot_btn" @click="editCustomer">编辑</button>
              <button class="slot_btn" @click="first_come">查看</button>
            </template> -->
          </common-table>
        </div>
        <div class="tab-card" style="display: none">
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
                v-model="head_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 350px"
              ></el-date-picker>
              <el-button style="margin: 0 20px" type="primary">确定</el-button>
            </div>
          </div>
          <common-table
            :tableData="tableData"
            :tableLabel="tableLabel"
            :config="config"
            @toChangePage="tapChangePage"
            @changeSize="changeSize"
            @add="tableLabel(row)"
          ></common-table>
        </div>
        <div class="tab-card" style="display: none">
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
                v-model="head_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 350px"
              ></el-date-picker>
              <el-button style="margin: 0 20px" type="primary">确定</el-button>
            </div>
          </div>
          <common-table
            :tableData="tableData"
            :tableLabel="tableLabel"
            :config="config"
            @add="tableLabel(row)"
          ></common-table>
        </div>
        <div class="tab-card" style="display: none">
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
                v-model="head_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 350px"
              ></el-date-picker>
              <el-button style="margin: 0 20px" type="primary">确定</el-button>
            </div>
          </div>
          <common-table
            :tableData="tableData"
            :tableLabel="tableLabel"
            :config="config"
            @toChangePage="tapChangePage"
            @changeSize="changeSize"
            @add="tableLabel(row)"
          ></common-table>
        </div>
      </div>
    </div>
    <!-- 添加用户对话框 -->
    <el-dialog title="新增客户信息" :visible.sync="adduserdialog" width="70%">
      <!-- 内容主题区域 -->
      <div class="Dialog_box" style="min-width: 800px">
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>咨询日期</span>
            </div>
            <el-date-picker
              :disabled="true"
              value-format="yyyy-MM-dd"
              v-model="talk_time"
              type="date"
              placeholder=""
            ></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>探店日期</span>
            </div>
            <el-date-picker
              :disabled="true"
              value-format="yyyy-MM-dd"
              v-model="come_time"
              type="date"
              placeholder=""
            ></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>咨询顾问</span>
            </div>
            <el-select v-model="consulting" :disabled="true" placeholder="">
              <el-option
                v-for="item in consulting_options"
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
              <span class="important">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="user_name" placeholder=""></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>客户电话</span>
            </div>
            <el-input
              v-model="user_phone"
              placeholder=""
              maxlength="11"
            ></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>客户年龄</span>
            </div>
            <el-input v-model="user_age" placeholder=""></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>产检医院</span>
            </div>
            <el-input v-model="check_hospital" placeholder=""></el-input>
          </div>
        </div>
        <div class="Dialog_row">
          <div style="width: 90%" class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>客户地址：</span>
            </div>
            <el-input v-model="user_adres" placeholder=""></el-input>
          </div>
          <div style="width: 55%" class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>建卡社区：</span>
            </div>
            <el-input v-model="user_community" placeholder=""></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>建卡情况：</span>
            </div>

            <el-select :disabled="true" v-model="inputting" placeholder="">
              <el-option
                v-for="item in inputting_options"
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
              <span class="important">*</span>
              <span>末次月经：</span>
            </div>
            <el-date-picker
              :disabled="true"
              value-format="yyyy-MM-dd"
              v-model="end_time"
              type="date"
              placeholder=""
            ></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>孕周期</span>
            </div>
            <el-input
              :disabled="true"
              v-model="user_week"
              placeholder="6"
            ></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>预产期</span>
            </div>
            <el-date-picker
              :disabled="true"
              value-format="yyyy-MM-dd"
              v-model="due_time"
              type="date"
              placeholder=""
            ></el-date-picker>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>头胎/二胎：</span>
            </div>
            <el-select :disabled="true" v-model="born" placeholder="">
              <el-option
                v-for="item in born_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_item">
            <div class="items_title">
              <span class="important">*</span>
              <span>知晓渠道（可多选）</span>
            </div>
            <el-checkbox-group v-model="know_me" :min="1">
              <el-checkbox
                style="width: 120px"
                v-for="channel_name in channel"
                :label="channel_name"
                :key="channel_name"
                >{{ channel_name }}</el-checkbox
              >
              <el-checkbox @click="showElseInput" style="width: 100px" label="其他方式：">
              </el-checkbox>
              <el-input
                v-if="showInput"
                size="mini"
                placeholder="请输入知晓渠道"
                style="width: 300px"
                type="text"
              ></el-input>
            </el-checkbox-group>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_item" style="width: 100%">
            <div class="items_title" style="margin: 10px 0">
              <span class="important">*</span>
              <span>参观过的月子会所：</span>
            </div>
            <el-input v-model="look_club" placeholder=""></el-input>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_item">
            <div class="items_title">
              <span class="important">*</span>
              <span>比较重视的内容（可多选）</span>
            </div>
            <el-checkbox-group v-model="content" :min="1">
              <el-checkbox
                style="width: 120px"
                v-for="content_name in important_content"
                :label="content_name"
                :key="content_name"
                >{{ content_name }}</el-checkbox
              >
              <el-checkbox label="其他方式："></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>是否试吃</span>
            </div>
            <el-select v-model="is_eat" placeholder="请选择">
              <el-option label="是" :value="1"></el-option>
              <el-option label="否" :value="0"></el-option>
            </el-select>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>意向套餐</span>
            </div>
            <el-select v-model="want_package" placeholder="请选择">
              <el-option label="淑·套餐" :value="1"></el-option>
              <el-option label="悦·套餐" :value="2"></el-option>
              <el-option label="荣·套餐" :value="3"></el-option>
              <el-option label="御·套餐" :value="4"></el-option>
            </el-select>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>意向价格</span>
            </div>
            <el-input v-model="want_price" placeholder=""></el-input>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>是否首次报价</span>
            </div>
            <el-select v-model="first_offer" placeholder="请选择">
              <el-option label="是" :value="1"></el-option>
              <el-option label="否" :value="0"></el-option>
            </el-select>
          </div>
        </div>
        <div class="Dialog_row">
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>意向程度</span>
            </div>
            <el-select :disabled="true" v-model="intention" placeholder="">
              <el-option
                v-for="item in intention_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="Dialog_items">
            <div class="items_title">
              <span class="important">*</span>
              <span>当前状况</span>
            </div>
            <el-select v-model="now_status" placeholder="请选择">
              <el-option
                v-for="item in status_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adduserdialog = false">取 消</el-button>
        <el-button type="primary" @click="save_form">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import CommonTable from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { listUser, addUser } from "../../api/user_list";
export default {
  name: "customer",
  components: { CommonTable, Search },
  data() {
    return {
      stateIndex: 0,
      tabsName: [
        {
          id: 0,
          name: "全部",
          isActive: true,
        },
        {
          id: 1,
          name: "有效",
          isActive: false,
        },
        {
          id: 2,
          name: "暂停",
          isActive: false,
        },
        {
          id: 3,
          name: "审核中",
          isActive: false,
        },
      ],
      active: false,
      adduserdialog: false,
      consulting: "王美女", //客户咨询
      consulting_options: [
        {
          value: "王美女",
          label: "王美女",
        },
        {
          value: "宋美女",
          label: "宋美女",
        },
      ],
      born: "头胎", //头胎/二胎选择
      born_options: [
        {
          value: "头胎",
          label: "头胎",
        },
        {
          value: "二胎",
          label: "二胎",
        },
      ],
      intention: "A-需求与我们产品相符意向强", //意向程度
      intention_options: [
        {
          value: "A-需求与我们产品相符意向强",
          label: "A-需求与我们产品相符意向强",
        },
        {
          value: "B-明确住月子中心，多家对比中",
          label: "B-明确住月子中心，多家对比中",
        },
        {
          value: "C-对选月子会所或价格犹豫",
          label: "C-对选月子会所或价格犹豫",
        },
        {
          value: "D-疑似同行",
          label: "D-疑似同行",
        },
      ],
      // 添加状态选项
      status_options: [
        {
          value: 0,
          label: "跟进中",
        },
        {
          value: 1,
          label: "已签约",
        },
        {
          value: 2,
          label: "暂停",
        },
        {
          value: 3,
          label: "审核中",
        },
      ],
      inputting: "大卡", //建卡情况
      inputting_options: [
        {
          value: "大卡",
          label: "大卡",
        },
        {
          value: "小卡",
          label: "小卡",
        },
      ],
      value: "",
      talk_time: "", //咨询日期
      come_time: "", //到店日期
      end_time: "", //末次月经日期
      due_time: "", //预产期
      head_time: "", //建档日期
      user_adres: "", //用户地址
      user_community: "", //用户建卡社区
      user_week: "6", //用户孕周期
      user_name: "",
      user_phone: "",
      user_age: "",
      check_hospital: "",
      now_status: "", //当前状况
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
      ],
      look_club: "",
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
        "其他方式：",
      ],
      is_eat: "",
      want_package: "",
      want_price: "",
      first_offer: "",
      tableData: [],
      tableLabel: [
        {
          prop: "id",
          label: "id",
        },
        {
          prop: "name",
          label: "姓名",
          width: "80",
        },
        {
          prop: "mobile",
          label: "联系方式",
          width: "150",
        },
        {
          prop: "address",
          label: "家庭地址",
          width: "180",
        },
        {
          prop: "hospital",
          label: "生产医院",
          width: "180",
        },
        {
          prop: "predict_at",
          label: "预产期",
          width: "180",
        },
        {
          prop: "know_source",
          label: "渠道",
          width: "180",
        },
        {
          prop: "answer",
          label: "销售员",
          width: "180",
        },
        {
          prop: "question_at",
          label: "建档日期",
          width: "180",
        },
        {
          label: "状态",
          width: "180",
          type: 10,
        },
        {
          label: "操作",
          width: "180",
          type: 11,
        },
      ],
      config: {
        page: 1,
        total: 0,
        size: 10,
        loading: false,
      },
      type: 0,
      showInput:false
    };
  },
  created() {},

  mounted() {
    this.getList();
    this.getTime();
  },
  methods: {
    showElseInput(){
      console.log(1234)
      this.showInput=true
    },
    // 自动获取时间
    getTime() {
      const myDate = new Date();
      const Y = myDate.getFullYear();
      const M = myDate.getMonth() + 1;
      const D = myDate.getDate();
      const curDay = Y + "-" + M + "-" + D;
      // console.log(curDay);
      this.talk_time = curDay;
      this.come_time = curDay;
      this.end_time = curDay;
      this.due_time = curDay;
    },
    // 点击页数切换
    tapChangePage(page) {
      this.config.page = page;
      this.getList();
    },
    // 点击切换条数
    changeSize(size) {
      // console.log(size);
      this.config.size = size;
      this.getList();
    },
    // tab标签切换事件
    tabsSwitch: function (tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-card"),
        len = tabCardCollection.length;
      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
      this.type = this.tabsName[tabIndex].id;
      console.log(this.type);
      this.getList();
    },
    // 新增用户事件
    Add_user() {
      this.adduserdialog = true;
    },
    /** 获取列表 */
    getList() {
      const data = {
        type: this.type,
        page: this.config.page,
        size: this.config.size,
      };
      console.log(data);
      listUser(data)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message.success("获取成功");
            this.tableData = res.data.data.data;
            // 总条数
            this.config.total = res.data.data.total;
            // // 每页显示条数
            // this.config.size = res.data.data.per_page;
            // // 显示页数
            // this.config.page = res.data.data.current_page;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 创建用户信息
    save_form() {
      var from = {
        question_at: this.talk_time,
        comming_at: this.come_time,
        hospital: this.check_hospital,
        answer: this.consulting,
        name: this.user_name,
        mobile: this.user_phone,
        age: this.user_age,
        address: this.user_adres,
        comunity: this.user_community,
        card_type: this.inputting,
        special_month_at: this.end_time,
        belly_cycle: this.user_week,
        predict_at: this.due_time,
        baby_type: this.born,
        know_source: this.know_me,
        know_source_other: "",
        is_saw: this.look_club,
        focus_points: this.content,
        focus_point_other: "",
        is_ate: this.is_eat,
        wish_product: this.want_package,
        wish_price: this.want_price,
        first_price: this.first_offer,
        wish_level: this.intention,
        current_state: this.now_status,
      };
      console.log(from);
      addUser(from)
        .then((res) => {
          if (res.data.status == 0) {
            this.$message.success("恭喜您创建成功!");
            this.adduserdialog = false;
            // location.reload();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    editCustomer(row) {
      console.log(row);
    },
    first_come() {
      console.log("123", a);
    },
  },
};
</script>
<style>
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
.el-checkbox-group {
  border: 1px solid #eee;
  margin: 10px 0;
}
.el-checkbox {
  width: 130px;
  padding: 10px;
}
.Dialog_row {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.Dialog_row .Dialog_items {
  margin: 10px 20px;
  width: 280px;
}
.Dialog_item {
  margin: 0 20px;
}
.el-dialog {
  max-height: calc(100% - 60px);
  max-width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  margin-top: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 !important;
  transform: translate(-50%, -50%);
}
.el-dialog__body {
  overflow: auto;
}
.All_head {
  display: flex;
  align-items: center;
  padding: 10px 0;
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
.items_title {
  padding: 10px 0;
}
.items_title .important {
  color: red;
}
.common-table {
  height: 600px;
}
</style>
