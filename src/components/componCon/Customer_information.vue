<template>
  <!-- 产康客户管理--产康客户信息管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <Bread style="margin-left: 20px"></Bread>
        <div class="Tab_Right">
          <div class="Right_items">
            <img src="../../assets/img/12.png" />
            <div class="Right_itemsTitle">项目预约</div>
          </div>
          <div class="Right_items" @click="add_dialog">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle">新增</div>
          </div>
          <div class="Right_items">
            <img src="../../assets/img/13.png" />
            <div class="Right_itemsTitle">查看</div>
          </div>
          <div class="Right_items" @click="body">
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
              <option>渠道</option>
              <option>微信</option>
              <option>网站</option>
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
              style="width: 350px"
            ></el-date-picker>
          </div>
        </div>
        <Maintenance
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        >
          <template v-slot:edit>
            <button class="slot_btn" @click="first_come">编辑</button>
          </template>
          <template v-slot:edit1>
            <button class="slot_btn" @click="first_call">编辑</button>
          </template>
          <template v-slot:edit2>
            <button class="slot_btn" @click="body">编辑</button>
          </template>
          <template v-slot:edit3="id">
            <button class="slot_btn" @click="sigin(id.id)">编辑</button>
          </template>
        </Maintenance>
      </div>
    </div>
    <!-- 新增弹框 -->
    <el-dialog title="新增" :visible.sync="dialogFormAdd">
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>建档日期</span>
            </div>
            <el-date-picker
              v-model="form.filingtime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form.cname" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>渠道</span>
            </div>
            <el-select v-model="form.sources" placeholder>
              <el-option label="大众点评" value="shanghai"></el-option>
              <el-option label="微信" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form.focus" placeholder>
              <el-option label value="shanghai"></el-option>
              <el-option label value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>区域</span>
            </div>
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormAdd = false">取 消</el-button>
        <el-button type="primary" @click="addDialogForm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 首次来电登记 -->
    <el-dialog title="首次来电" :visible.sync="FirstCome" width="60%">
      <el-form :model="form1">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>登记日期</span>
            </div>
            <el-date-picker
              v-model="form1.calltime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form1.cname" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form1.mobile" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>渠道</span>
            </div>
            <el-select v-model="form1.sources" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>生产日期</span>
            </div>
            <el-date-picker
              v-model="form1.childbirthtime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>生产医院</span>
            </div>
            <el-input
              v-model="form1.childbirthhospital"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>生产方式</span>
            </div>
            <el-input
              v-model="form1.childbirthtype"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form1.focus" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>区域</span>
            </div>
            <el-input v-model="form1.address" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>首次接听人员</span>
            </div>
            <el-select v-model="form1.answer_people" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>是否来访</span>
            </div>
            <el-select v-model="form1.ex_arrive_store" placeholder>
              <el-option label="是" :value="1"></el-option>
              <el-option label="否" :value="0"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>接待人</span>
            </div>
            <el-select v-model="form1.receptionist" placeholder>
              <el-option label="阿斯asd顿" value="撒旦"></el-option>
              <el-option label="的asd 风格" value="asd "></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>跟踪情况</span>
            </div>
            <el-input v-model="form1.track" autocomplete="off"></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FirstCome = false">取 消</el-button>
        <el-button type="primary" @click="registerFirstCome">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 首次来访登记 -->
    <el-dialog title="首次来电" :visible.sync="FirstCall" width="60%">
      <el-form :model="form2">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>登记日期</span>
            </div>
            <el-date-picker
              v-model="form2.registertime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form2.cname" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form2.mobile" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>来访渠道</span>
            </div>
            <el-select v-model="form2.sources" placeholder="请选择来访渠道">
              <el-option label="微信" :value="1"></el-option>
              <el-option label="QQ" :value="0"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>生产日期</span>
            </div>
            <el-date-picker
              v-model="form2.childbirthtime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>生产方式</span>
            </div>
            <el-input
              v-model="form2.childbirthtype"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>胎次</span>
            </div>
            <el-input
              v-model="form2.childbirthparity"
              autocomplete="off"
            ></el-input>
          </el-col>

          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form2.focus" placeholder>
              <el-option label="这个" :value="1"></el-option>
              <el-option label="那个" :value="2"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>区域</span>
            </div>
            <el-input v-model="form2.address" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>是否体验</span>
            </div>
            <el-select v-model="form2.ex_project" placeholder>
              <el-option label="是" :value="1"></el-option>
              <el-option label="否" :value="0"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>体验项目</span>
            </div>
            <el-select v-model="form2.projectid" placeholder>
              <el-option label="推油" :value="1"></el-option>
              <el-option label="按摩" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col> </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>首次报价</span>
            </div>
            <el-input v-model="form2.offer" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>意向价位</span>
            </div>
            <el-input v-model="form2.ioffer" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>来访区域</span>
            </div>
            <el-input v-model="form2.visitarea" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>客户意向</span>
            </div>
            <el-input v-model="form2.cidea" autocomplete="off"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>接待人员</span>
            </div>
            <el-select v-model="form2.receptionist" placeholder>
              <el-option label="张一一" value="shanghai"></el-option>
              <el-option label="张二二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>首次接待情况</span>
            </div>
            <el-input
              v-model="form2.case"
              autocomplete="off"
              style="width: 430px"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col> </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>备注</span>
            </div>
            <el-input
              v-model="form2.note"
              autocomplete="off"
              style="width: 430px"
            ></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FirstCall = false">取 消</el-button>
        <el-button type="primary" @click="visitFirstCall">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 签单明细 -->
    <el-dialog title="签单明细" :visible.sync="SignBill" width="60%">
      <el-form :model="form3">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>签约日期</span>
            </div>
            <el-date-picker
              v-model="form3.signtime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form3.cname" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form3.mobile" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>房号</span>
            </div>
            <el-input
              v-model="form3.room"
              autocomplete="off"
              style="width: 100px"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>套餐</span>
            </div>
            <el-input
              v-model="form3.set_meal"
              autocomplete="off"
              style="width: 100px"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>生产日期</span>
            </div>
            <el-date-picker
              v-model="form3.production"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>入所日期</span>
            </div>
            <el-date-picker
              v-model="form3.in_the_time"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>出所日期</span>
            </div>
            <el-date-picker
              v-model="form3.out_the_time"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>胎次</span>
            </div>
            <el-input v-model="form3.childNum" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>区域</span>
            </div>
            <el-input v-model="form3.area" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form3.focus" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>渠道</span>
            </div>
            <el-select v-model="form3.channel" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col> </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>项目内容</span>
            </div>
            <el-select v-model="form3.projectid" placeholder>
              <el-option label="网易云" :value="1"></el-option>
              <el-option label="给我唱" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>开单次数</span>
            </div>
            <el-input
              v-model="form3.order_number"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>签单日期</span>
            </div>
            <el-date-picker
              v-model="form3.sigin_order"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col> </el-col>
          <el-col> </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>签约金额</span>
            </div>
            <el-input v-model="form3.money" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>折扣/优惠</span>
            </div>
            <el-input v-model="form3.discount" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>签约人员</span>
            </div>
            <el-input
              v-model="form3.signed_people"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col> </el-col>
          <el-col> </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>备注</span>
            </div>
            <el-input
              v-model="form3.note"
              autocomplete="off"
              style="width: 430px"
            ></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="SignBill = false">取 消</el-button>
        <el-button type="primary" @click="SignBillBut">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import Bread from "../Business/Bread";
// 过滤时间
import { formatDate } from "../../util/date";
import {
  productionClientList,
  addProductionClient,
  registerProductionClient,
  productionSignBillBut,
  visitProductionClient,
} from "../../api/production/productionClient";
export default {
  name: "customer",
  components: { Maintenance, Search, Bread },
  data() {
    return {
      active: false,
      value: "",
      value1: "",
      tableData: [
        {
          document_date: "2020-4-30",
          user_name: "张一二",
          user_phone: "15555828930",
          production_date: "2020-4-30",
          channel: "大众点评",
          Focus_on: "A-意向非常强，价格接受度高",
          area: "钱江新城",
        },
      ],
      tableLabel: [
        {
          prop: "filingtime",
          label: "建档日期",
          width: "200",
        },
        {
          prop: "cname",
          label: "客户姓名",
          width: "110",
        },
        {
          prop: "mobile",
          label: "联系方式",
        },
        {
          prop: "production_date",
          label: "生产日期",
        },
        {
          prop: "sources",
          label: "渠道",
        },
        {
          prop: "focus",
          label: "关注点",
          width: "250",
        },
        {
          prop: "address",
          label: "区域",
        },
        {
          prop: "first_call",
          label: "首次来电登记",
          type: 1,
        },
        {
          prop: "first_come",
          label: "首次来访登记",

          type: 3,
        },
        {
          prop: "physical_assessment",
          label: "身体评估",

          type: 4,
        },
        {
          prop: "order",
          label: "产康签单",

          type: 5,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      dialogFormAdd: false,
      // 新增
      form: {
        filingtime: "",
        cname: "",
        mobile: "",
        sources: "",
        focus: "",
        address: "",
      },
      newDate: new Date(),
      formLabelWidth: "120px",
      FirstCome: false,
      form1: {
        calltime: "", // 来电登记时间
        cname: "", //客户名
        mobile: "", //联系方式
        sources: "", //来源渠道
        address: "", //地址区域
        focus: "", //关注点
        childbirthtime: "", //生产时间
        childbirthtype: "", //生产方式
        childbirthhospital: "", //生产医院
        answer_people: "", //接听人
        ex_arrive_store: "", //是否来访
        receptionist: "", //接待人
        track: "", //跟踪情况
      },
      value: "",
      FirstCall: false,
      form2: {
        registertime: "", //到店时间
        cname: "", //客户名
        mobile: "", //联系方式
        sources: "", //来源渠道
        address: "", //地址区域
        focus: "", //关注点
        childbirthtime: "", //生产时间
        childbirthtype: "", //生产方式
        childbirthparity: "", //胎次
        ex_project: "", //是否体验
        projectid: "", //项目id
        offer: "", //报价
        ioffer: "", //意向价位
        visitarea: "", //来访区域
        cidea: "", //客户意向
        receptionist: "", //接待人
        case: "", //接待情况
        note: "", //备注
        ex_arrive_store: "", //是否来访
      },
      SignBill: false,
      form3: {
        signtime: "", //签约时间
        room: "", //房间号
        set_meal: "", //套餐
        in_the_time: "", //入所时间
        out_the_time: "", //出所时间
        projectid: "", //项目id
        order_number: '', //开单次数
        money: "", //金额
        discount: '', //折扣优惠
        signed_people: "", //签约人
        note: "", //备注
        cname: "", //客户名
        mobile: "", //联系方式
        sigin_order: "",
        sigin_money: "",
        discount: "",
        sigin_people: "",
      },
      SignId: "",
    };
  },
  created() {
    this.getCustomerInformationList();
  },
  mounted() {},

  filters: {
    // 评论时间格式化
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  methods: {
    // 获取列表
    getCustomerInformationList() {
      productionClientList()
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            // this.$message.success("获取成功");
            this.tableData = res.data.data.data;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 提交新增表单
    addDialogForm() {
      addProductionClient(this.form)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("新增成功");
            this.dialogFormAdd = false;
            this.getCustomerInformationList();
            // const date = new Data();
            console.log(this.newDate);
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 来电访问
    registerFirstCome() {
      registerProductionClient(this.form1)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("编辑成功");
            this.FirstCome = false;
            this.getCustomerInformationList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    add_dialog() {
      this.dialogFormAdd = true;
    },
    // 首次来电弹框
    first_come() {
      console.log(123);
      this.FirstCome = true;
    },
    // 首次来访弹框
    first_call() {
      this.FirstCall = true;
    },
    // 到访登记
    visitFirstCall() {
      visitProductionClient(this.form2)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("编辑成功");
            this.FirstCall = false;
            this.getCustomerInformationList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 签单
    sigin(id) {
      // console.log(id);
      this.SignId = id;
      this.SignBill = true;
    },
    // 签单
    SignBillBut() {
      console.log(this.form3);
      productionSignBillBut(this.form3, this.SignId)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("编辑成功");
            this.SignBill = false;
            this.getCustomerInformationList();
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
    // 身体评估
    body() {
      this.$router.push("/BodyAss");
    },
  },
};
</script>
<style  scoped>
.CustmerBox {
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  border-radius: 3px;
}
.Tab .Tab_Right {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.Tab_Right .Right_items {
  width: 116px;
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
.el-row {
  margin-bottom: 10px;
}
.el-row .el-col {
  margin: 0 20px;
}
.el-row .el-col .label_title {
  padding: 5px;
}
.el-input,
.el-select {
  width: 202px;
}
</style>