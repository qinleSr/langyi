<template>
  <!-- 入所办理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle" @click="add_checkin">新增</div>
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
              style="width: 350px"
            ></el-date-picker>
          </div>
        </div>
        <common-table
          :tableData="tableData"
          :tableLabel="tableLabel"
          :config="config"
        ></common-table>
      </div>
    </div>
    <!-- 入住办理弹框 -->
    <el-dialog title="提示" :visible.sync="dialogCheckIn" width="65%">
      <div class="checkin_box">
        <div class="checkin_row">
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>合同编号</span>
            </div>
            <el-input v-model="contract_id" :disabled="false">11</el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="client_name" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="client_mobile" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>出生日期</span>
            </div>
            <el-date-picker
              v-model="birth_at"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </div>
        <div class="checkin_row">
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>建档日期</span>
            </div>
            <el-date-picker
              v-model="card_at"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>国家和地区</span>
            </div>
            <el-input v-model="country_region" placeholder=""></el-input>
          </div>
          <div class="checkin_items" style="margin-right: 20px">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>证件种类</span>
            </div>
            <div style="display: flex">
              <div>
                <el-select v-model="card_type" placeholder="请选择">
                  <el-option
                    v-for="item in certificate_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="right_items">
                <el-input
                  v-model="idno"
                  placeholder="证件号码"
                  style="margin-left: 10px"
                ></el-input>
              </div>
              <div class="right_items">
                <el-input
                  v-model="card_expired"
                  placeholder="证件有效期"
                ></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="checkin_row">
          <div class="checkin_items" style="width: 475px">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>地址</span>
            </div>
            <el-input v-model="address" style="width: 442px"></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>合同套餐</span>
            </div>
            <el-select v-model="contract_food" placeholder="请选择">
              <el-option
                v-for="item in food_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>套餐价格</span>
            </div>
            <el-input v-model="meal_price" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-select v-model="room_num" placeholder="请选择">
              <el-option
                v-for="item in room_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="checkin_row">
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>入住日期</span>
            </div>
            <el-date-picker
              v-model="in_at"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-date-picker
              v-model="out_at"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>押金</span>
            </div>
            <el-input v-model="deposit_amount" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>付款方式</span>
            </div>
            <el-select v-model="payment" placeholder="请选择">
              <el-option
                v-for="item in pay_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="checkin_row">
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>宝宝姓名</span>
            </div>
            <el-input v-model="baby_name" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>宝宝性别</span>
            </div>
             <el-radio v-model="baby_gender" label="1">男</el-radio>
            <el-radio v-model="baby_gender" label="2">女</el-radio>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>出生日期</span>
            </div>
            <el-date-picker
              v-model="baby_birth"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </div>
        <div class="checkin_row">
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>陪护人姓名</span>
            </div>
            <el-input v-model="relation_name" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>陪护人关系</span>
            </div>
            <el-input v-model="relationship" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>性别</span>
            </div>
            <el-radio v-model="relation_gender" label="1">男</el-radio>
            <el-radio v-model="relation_gender" label="2">女</el-radio>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>紧急联系人</span>
            </div>
            <el-input v-model="panic_name" placeholder=""></el-input>
          </div>
          <div class="checkin_items">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>联系电话</span>
            </div>
            <el-input v-model="panic_mobile" placeholder=""></el-input>
          </div>
        </div>
        <div class="checkin_row">
          <div class="checkin_items" style="width: 440px">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>国家和地区</span>
            </div>
            <el-input
              v-model="panic_country"
              placeholder=""
              style="width: 442px"
            ></el-input>
          </div>
          <div class="checkin_items" style="margin-right: 20px">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>证件种类</span>
            </div>
            <div style="display: flex">
              <div>
                <el-select v-model="panic_id_type" placeholder="请选择">
                  <el-option
                    v-for="item in escorter_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="right_items">
                <el-input
                  v-model="panic_id_no"
                  placeholder="证件号码"
                  style="margin-left: 10px"
                ></el-input>
              </div>
              <div class="right_items">
                <el-input
                  v-model="panic_card_expired"
                  placeholder="证件有效期"
                ></el-input>
              </div>
            </div>
          </div>
        </div>
        <div class="checkin_row">
          <div class="checkin_items" style="width: 100%">
            <div class="checkin_title">
              <span class="improtant">*</span>
              <span>特殊要求</span>
            </div>
            <el-input
              v-model="special_require"
              placeholder=""
              style="width: 100%"
            ></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCheckIn = false">取 消</el-button>
        <el-button type="primary" @click="addInHandleData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import CommonTable from "../Business/table.vue";
import Search from "../Conpontool/Search.vue";
import { addInHandle } from "../../api/contract/preparation";
export default {
  name: "customer",
  components: { CommonTable, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          check_in_date: "2020-4-30",
          leave_date: "2020-4-30",
          due_days: "28",
          user_name: "张一二",
          user_phone: "15555828930",
          baby_name: "张宝宝",
          baby_sex: "女",
          birth_date: "2020-4-30",
          due_food: "悦·套餐",
          due_room: "208",
          total_amount: "148000",
          deposit: "48000",
          pay_type: "现金",
          document_date: "2020-4-30",
        },
      ],
      tableLabel: [
        {
          prop: "check_in_date",
          label: "入住日期",
        },
        {
          prop: "leave_date",
          label: "出所日期",
        },
        {
          prop: "due_days",
          label: "预定天数",
          width: "100",
        },
        {
          prop: "user_name",
          label: "姓名",
        },
        {
          prop: "user_phone",
          label: "联系方式",
        },
        {
          prop: "baby_name",
          label: "宝宝姓名",
          width: "100",
        },
        {
          prop: "baby_sex",
          label: "宝宝性别",
          width: "100",
        },
        {
          prop: "birth_date",
          label: "出生日期",
        },
        {
          prop: "due_food",
          label: "套餐",
        },
        {
          prop: "due_room",
          label: "房间号",
          width: "100",
        },

        {
          prop: "total_amount",
          label: "套餐价格",
        },
        {
          prop: "deposit",
          label: "押金",
        },
        {
          prop: "pay_type",
          label: "付款方式",
        },
        {
          prop: "document_date",
          label: "建档日期",
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      dialogCheckIn: false,
      contract_id: "", //合同编号
      birth_at: "", //出生日期
      card_at: "", //建档日期
      country_region: "", //国家和地区
      card_type: "", //证件种类
      idno: "", //证件号码
      card_expired: "", //证件有效期
      address: "", //证件地址
      in_at: "", //入住日期
      out_at: "", //出所日期
      deposit_amount: "", //押金
      payment: "", //付款方式
      baby_name: "", //宝宝姓名
      baby_gender: "", //宝宝性别
      relation_name: "", //陪护人姓名
      relationship: "", //陪护人关系
      relation_gender: "", //陪护人性别
      panic_name: "", //紧急联系人
      panic_mobile: "", //紧急联系人电话
      panic_country: "", //紧急联系人地区
      panic_id_type: "", //紧急联系人证件类型
      panic_id_no: "", //证件号码
      panic_card_expired: "", //证件有效期
      special_require: "", //特殊需求

      client_name: "", //客户姓名
      client_mobile: "", //客户电话
      meal_price: "", //套餐价格
      baby_birth: "", //宝宝出生日期
      escorter: "", //陪护人证件
      contract_food: "", //合同套餐
      room_num: "", //房间号
      certificate_options: [
        {
          value: "选项1",
          label: "身份证",
        },
        {
          value: "选项2",
          label: "军官证",
        },
      ],
      food_options: [
        {
          value: "选项1",
          label: "淑·套餐",
        },
        {
          value: "选项2",
          label: "荣·套餐",
        },
      ],
      room_options: [
        {
          value: "选项1",
          label: "201",
        },
        {
          value: "选项3",
          label: "202",
        },
        {
          value: "选项4",
          label: "203",
        },
      ],
      pay_options: [
        {
          value: "选项1",
          label: "支票",
        },
        {
          value: "选项5",
          label: "转账",
        },
        {
          value: "选项6",
          label: "微信",
        },
      ],
      escorter_options: [
        {
          value: "选项1",
          label: "身份证",
        },
        {
          value: "7",
          label: "军官证",
        },
      ],
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 添加入住信息事件
    add_checkin() {
      this.dialogCheckIn = true;
    },
    addInHandleData() {
      const form = {
        contract_id: this.contract_id,
        birth_at: this.birth_at,
        card_at: this.card_at,
        country_region: this.country_region,
        card_type: this.card_type,
        idno: this.idno,
        card_expired: this.card_expired,
        address: this.address,
        in_at: this.in_at,
        out_at: this.out_at,
        deposit_amount: this.deposit_amount,
        payment: this.payment,
        baby_name: this.baby_name,
        baby_gender: this.baby_gender,
        relation_name: this.relation_name,
        relationship: this.relationship,
        relation_gender: this.relation_gender,
        panic_name: this.panic_name,
        panic_mobile: this.panic_mobile,
        panic_country: this.panic_country,
        panic_id_type: this.panic_id_type,
        panic_id_no: this.panic_id_no,
        panic_card_expired: this.panic_card_expired,
        special_require: this.special_require,
      };
      console.log(form);
      // console.log(addInHandle());
      addInHandle(form)
        .then((res) => {
          console.log(res);
          if (res.status == 0) {
            this.$message.success("恭喜创建成功");
            this.dialogCheckIn = false;
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$message.success(res.data.message);
        });
    },
  },
};
</script>
<style  scope>
.CustmerBox {
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  border-radius: 3px;
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
.checkin_box .checkin_row {
  display: flex;
  align-items: center;
}
.checkin_row .checkin_items {
  margin: 0 20px;
}
.checkin_row .checkin_items .checkin_title {
  padding: 10px 0;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 202px;
}
.checkin_items .el-input,
.el-select {
  width: 202px;
}
.right_items {
  margin: 0 20px;
}
</style>