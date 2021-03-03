<template>
  <!-- 退签管理-->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle" @click="add">新增</div>
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
          <div class="Choos_Time">
            <div class="Time_title">申请日期</div>
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
            <button class="slot_btn" @click="edit">编辑</button>
          </template>
        </Maintenance>
      </div>
    </div>
    <!-- 新增功能对话框 -->
    <el-dialog title="提示" :visible.sync="dialogBack" width="70%">
      <div class="back_row">
        <div class="back_rowitems">
          <div class="back_itemtitle">
            <span>申请日期</span>
          </div>
          <el-date-picker
            v-model="application_date"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <div class="back_rowitems">
          <div class="back_itemtitle">
            <span class="improtant">*</span>
            <span>合同编号</span>
          </div>
          <el-input v-model="contract_num"></el-input>
        </div>
        <div class="back_rowitems">
          <div class="back_itemtitle">
            <span class="improtant">*</span>
            <span>客户姓名</span>
          </div>
          <el-select v-model="customer_name" placeholder="请选择">
            <el-option
              v-for="item in customer_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="back_rowitems">
          <div class="back_itemtitle">
            <span class="improtant">*</span>
            <span>联系方式</span>
          </div>
          <el-input v-model="customer_phone" placeholder="请输入电话号码" maxlength="11"></el-input>
        </div>
      </div>
      <div class="back_row">
        <div class="back_rowitems">
          <div class="back_itemtitle" style="width: 460px;">
            <span>退订原因</span>
          </div>
          <el-input v-model="back_why" placeholder="请输入退订原因"></el-input>
        </div>
        <div class="back_rowitems">
          <div class="back_itemtitle">
            <span>已交定金</span>
          </div>
          <div style="display:flex;">
            <el-input v-model="money_small" placeholder="人民币小写金额"></el-input>
            <el-input v-model="money_big" placeholder="人民币大写金额" style="margin-left:20px;"></el-input>
          </div>
          <div class="back_itemtitle">
            <span>退还金额</span>
          </div>
          <div style="display:flex;">
            <el-input v-model="back_money_small" placeholder="人民币小写金额"></el-input>
            <el-input v-model="back_money_big" placeholder="人民币大写金额" style="margin-left:20px;"></el-input>
          </div>
          <div class="back_itemtitle">
            <span>
              资料附件上传
              <span>(签约客户的身份证复印件、银行卡复印件、开户行及账号、医院的诊断证明、退订情况说明并有客户的签名)</span>
            </span>
            <span>文件格式PDF,JPG 大小≤3M</span>
          </div>
          <div style="display:flex;">
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogBack = false">取 消</el-button>
        <el-button type="primary" @click="getSave">提交审批</el-button>
      </span>
    </el-dialog>
    <!-- 编辑功能对话框 -->
    <el-dialog title="提示" :visible.sync="dialogedit" width="70%" :before-close="handleClose">
      <div class="editBox">
        <div class="editBox_row">
          <div class="editBox_items">
            <div class="editBox_title">
              <span>申请部门</span>
            </div>
            <el-select v-model="department" placeholder="请选择">
              <el-option
                v-for="item in department_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="editBox_items">
            <div class="editBox_title">
              <span>申请日期</span>
            </div>
            <el-date-picker v-model="department_time" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="editBox_items" style="width:500px;">
            <div class="editBox_title">
              <span>付款内容</span>
            </div>
            <el-input placeholder="请输入付款内容"></el-input>
          </div>
        </div>
        <div class="editBox_row">
          <div class="editBox_items">
            <div class="editBox_title">
              <span>申请金额</span>
            </div>
            <div style="display:flex;align-items: center;">
              <el-input placeholder="人民币小写金额"></el-input>
              <el-input placeholder="人民币大写金额" style="margin-left: 110px;"></el-input>
            </div>
          </div>
          <div class="editBox_items" style="margin-left:70px;">
            <div class="editBox_title">
              <span>收款信息</span>
            </div>
            <div style="display:flex;align-items: center;;">
              <el-input placeholder="公司名称" style="width:150px;"></el-input>
              <el-input placeholder="公司开户行" style="width:150px;margin-left:25px"></el-input>
              <el-input placeholder="公司账号" style="width:150px;margin-left:25px"></el-input>
            </div>
          </div>
        </div>
        <div class="editBox_row">
          <div class="editBox_items">
            <div class="editBox_title">
              <span>付款方式</span>
            </div>
            <el-select v-model="pay_type" placeholder="请选择">
              <el-option
                v-for="item in type_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="editBox_items" style="margin-left:20px;">
            <div class="editBox_title">
              <span>发票类型</span>
            </div>
            <el-select v-model="invoice" placeholder="请选择">
              <el-option
                v-for="item in invoice_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="editBox_items" style="margin-left:20px;">
            <div class="editBox_title">
              <span>截止付款日期</span>
            </div>
            <el-date-picker v-model="department_time" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="editBox_items" style="margin-left:20px;width:270px;">
            <div class="editBox_title">
              <span>备注</span>
            </div>
            <el-input></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogedit = false">取 消</el-button>
        <el-button type="primary" @click="dialogedit = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Maintenance from "../Business/table_Track.vue";
import Search from "../Conpontool/Search.vue";
import { addSign } from "../../api/customer";
export default {
  name: "customer",
  components: { Maintenance, Search },
  data() {
    return {
      active: false,
      value1: "",
      tableData: [
        {
          application_date: "2020-4-30",
          contract_num: "HZCLYGX20200522025",
          user_name: "张一二",
          user_phone: "15555828930",
          back_why: "妈妈流产，取消订单",
          deposit: "189000.00",
          back_money: "35000.00",
          status: "审核中"
        }
      ],
      tableLabel: [
        {
          prop: "application_date",
          label: "申请日期"
        },
        {
          prop: "contract_num",
          label: "合同编号",
          width: "250"
        },
        {
          prop: "user_name",
          label: "姓名"
        },
        {
          prop: "user_phone",
          label: "联系方式",
          width: "200"
        },
        {
          prop: "back_why",
          label: "退订原因",
          width: "250"
        },
        {
          prop: "deposit",
          label: "已交定金"
        },
        {
          prop: "back_money",
          label: "退还金额",
          width: "200"
        },
        {
          prop: "status",
          label: "状态"
        },
        {
          prop: "payment_request",
          label: "付款申请",
          type: 1
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      dialogBack: false,
      application_date: "", //申请日期
      contract_num: "HZCLYGX20200522025", //合同编号
      customer_name: "", //客户姓名
      customer_phone: "", //客户电话
      back_why: "", //退订原因
      money_small: "", //人民币小写
      money_big: "", //人民币大写
      back_money_small: "", //退还人民币小写
      back_money_big: "", //退还人民币大写
      pay_type: "", //付款方式
      invoice: "", //发票类型
      invoice_options: [
        {
          value: "选项1",
          label: "专票"
        },
        {
          value: "选项2",
          label: "专票"
        },
        {
          value: "选项2",
          label: "专票"
        }
      ],
      type_options: [
        {
          value: "选项1",
          label: "银行卡"
        },
        {
          value: "选项2",
          label: "支付宝"
        },
        {
          value: "选项2",
          label: "微信"
        }
      ],
      customer_options: [
        {
          value: "宋美女",
          label: "宋美女"
        },
        {
          value: "王美女",
          label: "王美女"
        }
      ],
      dialogedit: false,
      department: "",
      department_time: "",
      department_options: [
        {
          value: "宋美女",
          label: "宋美女"
        },
        {
          value: "王美女",
          label: "王美女"
        }
      ],
      imageUrl: ""
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 新增功能
    add() {
      this.dialogBack = true;
    },
    // 编辑功能
    edit() {
      this.dialogedit = true;
    },
    // 提交审核
    getSave() {
      var form = {
        request_at: this.application_date, //申请日期
        contract_id: this.contract_num, //合同编号
        customer_id: this.customer_name, //客户姓名
        mobile: this.customer_phone, //客户电话
        reason: this.back_why, //退订原因
        paid_amount_lower: this.money_small, //人民币小写
        paid_amount_upper: this.money_big, //人民币大写
        refund_amount_lower: this.back_money_small, //退还人民币小写
        refund_amount_upper: this.back_money_big, //退还人民币大写
        attachs: "123"
      };
      addSign(form).then(res => {
        console.log(res);
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    }
  }
};
</script>
<style  scoped>
.back_row {
  display: flex;
}
.back_row .back_rowitems {
  margin: 0 20px 20px 20px;
}
.back_itemtitle {
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
  outline: none;
}
.avatar-uploader {
  margin: 0 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 1px dashed #eee;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.editBox .editBox_row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.editBox .editBox_row .editBox_items {
  margin: 0 50px;
}
.editBox_title {
  padding: 10px 0;
}
</style>