<template>
  <!-- 产康客户管理--产康客户信息管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="add_dialog">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle">项目预约</div>
          </div>
          <div class="Right_items">
            <img src="../../assets/img/12.png" />
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
            <button class="slot_btn" @click="first_come">编辑1</button>
          </template>
          <template v-slot:edit1>
            <button class="slot_btn" @click="first_call">编辑2</button>
          </template>
          <template v-slot:edit2>
            <button class="slot_btn" @click="body">编辑3</button>
          </template>
          <template v-slot:edit3>
            <button class="slot_btn" @click="sigin">编辑4</button>
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
              v-model="form.jd_date"
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
            <el-input
              v-model="form.customer_name"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input
              v-model="form.customer_phone"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>渠道</span>
            </div>
            <el-select v-model="form.channel" placeholder>
              <el-option label="大众点评" value="shanghai"></el-option>
              <el-option label="微信" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form.concerns" placeholder>
              <el-option label value="shanghai"></el-option>
              <el-option label value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>区域</span>
            </div>
            <el-input v-model="form.area" autocomplete="off"></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormAdd = false"
          >确 定</el-button
        >
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
              v-model="form1.registration"
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
            <el-input
              v-model="form1.customer_name"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input
              v-model="form1.customer_phone"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>渠道</span>
            </div>
            <el-select v-model="form1.channel" placeholder="请选择活动区域">
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
              v-model="form1.production"
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
            <el-input v-model="form1.hospital" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>生产方式</span>
            </div>
            <el-input v-model="form1.type" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form1.concerns" placeholder>
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
            <el-input v-model="form1.area" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>首次接听人员</span>
            </div>
            <el-select v-model="form1.answer" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>是否转来访</span>
            </div>
            <el-select v-model="form1.is_come" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form1.concerns" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>跟踪情况</span>
            </div>
            <el-input v-model="form1.status" autocomplete="off"></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FirstCome = false">取 消</el-button>
        <el-button type="primary" @click="FirstCome = false">确 定</el-button>
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
              v-model="form2.registration"
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
            <el-input
              v-model="form2.customer_name"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input
              v-model="form2.customer_phone"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>来访渠道</span>
            </div>
            <el-select v-model="form2.channel" placeholder="请选择活动区域">
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
              v-model="form2.production"
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
            <el-input v-model="form2.type" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>胎次</span>
            </div>
            <el-input v-model="form2.childNum" autocomplete="off"></el-input>
          </el-col>

          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>关注点</span>
            </div>
            <el-select v-model="form2.concerns" placeholder>
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
            <el-input v-model="form2.area" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>是否体验</span>
            </div>
            <el-select v-model="form2.experience" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>体验项目</span>
            </div>
            <el-select v-model="form2.project" placeholder>
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
              <span>首次报价</span>
            </div>
            <el-input v-model="form2.money" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>意向价位</span>
            </div>
            <el-input v-model="form2.want_money" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>来访区域</span>
            </div>
            <el-input v-model="form2.adres" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>客户意向</span>
            </div>
            <el-input
              v-model="form2.customer_think"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>接待人员</span>
            </div>
            <el-select v-model="form2.people" placeholder>
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
              v-model="form2.reception_stauts"
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
        <el-button type="primary" @click="FirstCall = false">确 定</el-button>
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
              v-model="form3.sigin_date"
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
            <el-input
              v-model="form3.customer_name"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input
              v-model="form3.customer_phone"
              autocomplete="off"
            ></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>房号</span>
            </div>
            <el-input
              v-model="form3.room_num"
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
              v-model="form3.food"
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
              v-model="form3.to_date"
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
              v-model="form3.leave_date"
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
            <el-select v-model="form3.project" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="imprtant">*</span>
              <span>开单次数</span>
            </div>
            <el-input v-model="form3.open_order" autocomplete="off"></el-input>
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
            <el-input v-model="form3.sigin_money" autocomplete="off"></el-input>
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
              v-model="form3.sigin_people"
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
        <el-button type="primary" @click="SignBill = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { productionClientList } from "../../api/production/productionClient";
export default {
  name: "customer",
  components: { Maintenance, Search },
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
          prop: "document_date",
          label: "建档日期",
          width: "110",
        },
        {
          prop: "user_name",
          label: "客户姓名",
          width: "110",
        },
        {
          prop: "user_phone",
          label: "联系方式",
        },
        {
          prop: "production_date",
          label: "生产日期",
        },
        {
          prop: "channel",
          label: "渠道",
        },
        {
          prop: "Focus_on",
          label: "关注点",
          width: "300",
        },
        {
          prop: "area",
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
      form: {
        jd_date: "",
        customer_name: "",
        customer_phone: "",
        customer_phone: "",
        delivery: false,
        channel: "",
        concerns: "",
        area: "",
      },
      formLabelWidth: "120px",
      FirstCome: false,
      form1: {
        registration: "",
        customer_name: "",
        customer_phone: "",
        channel: "",
        production: "",
        hospital: "",
        type: "",
        concerns: "",
        area: "",
        answer: "",
        is_come: "",
        concerns: "",
        status: "",
      },
      value: "",
      FirstCall: false,
      form2: {
        registration: "",
        customer_name: "",
        customer_phone: "",
        channel: "",
        production: "",
        type: "",
        childNum: "",
        concerns: "",
        area: "",
        experience: "",
        project: "",
        money: "",
        want_money: "",
        adres: "",
        customer_think: "",
        people: "",
        reception_stauts: "",
        note: "",
      },
      SignBill: false,
      form3: {
        sigin_date: "",
        customer_name: "",
        customer_phone: "",
        room_num: "",
        food: "",
        production: "",
        to_date: "",
        leave_date: "",
        childNum: "",
        area: "",
        channel: "",
        project: "",
        open_order: "",
        sigin_order: "",
        sigin_money: "",
        discount: "",
        sigin_people: "",
      },
    };
  },
  created() {
    this.getCustomerInformationList();
  },
  mounted() {},

  methods: {
   async getCustomerInformationList() {
      const res =await productionClientList();
      console.log(res)
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
    // 签单
    sigin() {
      this.SignBill = true;
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