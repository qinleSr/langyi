<template>
  <div class="body">
    <el-form :model="form" ref="form">
      <el-row :gutter="30">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span class="improtant">*</span>
            <span class="title">建档日期</span>
            <el-date-picker
              v-model="form.filing_date"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span class="improtant">*</span>
            <span>合同编号</span>
            <el-input v-model="form.contract_id"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span class="improtant">*</span>
            <span>入住日期</span>
            <el-date-picker
              v-model="form.live_date"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <span class="improtant">*</span>
            <span>出住日期</span>
            <el-date-picker
              v-model="form.leave_date"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <span class="improtant">*</span>
            <span>预定天数</span>
            <el-input v-model="form.due_day"></el-input>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="4">
          <div>
            <span class="improtant">*</span>
            <span>客户姓名</span>
            <el-input v-model="form.customerName"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>客户电话</span>
          <el-input v-model="form.customerPhone"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>客户年龄</span>
          <el-input v-model="form.customerAge"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>身份证号</span>
          <el-input v-model="form.IdCard"></el-input>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>套餐</span>
          <el-input v-model="form.food"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>房间号</span>
          <el-input v-model="form.roomNo"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>预产期</span>
          <el-input v-model="form.due_day"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>生产日期</span>
          <el-date-picker
            v-model="form.production_date"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="8">
          <span class="improtant">*</span>
          <span>生产医院</span>
          <el-input v-model="form.hospital"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>生产方式</span>
          <el-select v-model="form.type" placeholder="请选择生产方式">
            <el-option label="剖腹产" value="剖腹产"></el-option>
            <el-option label="顺产" value="顺产"></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>宝宝胎数</span>
          <el-select v-model="form.childNum" placeholder="请选择宝宝胎数">
            <el-option label="一胎" value="一胎"></el-option>
            <el-option label="双胞胎" value="双胞胎"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>宝宝姓名</span>
          <el-input v-model="form.BabyName"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>宝宝性别</span>
          <el-input v-model="form.BabySex"></el-input>
        </el-col>
        <el-col :span="16"></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>家属姓名</span>
          <el-input v-model="form.familyName"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>家属电话</span>
          <el-input v-model="form.familyPhone"></el-input>
        </el-col>
        <el-col :span="8">
          <span class="improtant">*</span>
          <span>家庭地址</span>
          <el-input v-model="form.familyAdres"></el-input>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>总金额</span>
          <el-input v-model="form.money"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>已交定金</span>
          <el-input v-model="form.deposit"></el-input>
        </el-col>
        <el-col :span="4">
          <span class="improtant">*</span>
          <span>入住尾款</span>
          <el-input v-model="form.end_money"></el-input>
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>
      <el-button @click="addNotice">提交</el-button>
      <el-button>重置</el-button>
    </el-form>
  </div>
</template>
<script>
import { addPreparation } from "../../api/contract/preparation";
export default {
  name: "customer",
  data() {
    return {
      form: {
        id:1,
        filing_date: "",
        contract_id: "",
        live_date: "",
        leave_date: "",
        due_day: "",
        customerName: "",
        customerPhone: "",
        customerAge: "",
        IdCard: "",
        food: "",
        roomNo: "",
        due_day: "",
        production_date: "",
        hospital: "",
        type: "",
        childNum: "",
        BabyName: "",
        BabySex: "",
        familyName: "",
        familyPhone: "",
        familyAdres: "",
        money: "",
        deposit: "",
        end_money: "",
      },
    };
  },
  created() {},
  mounted() {},

  methods: {
    add_notice() {
      this.$router.push("/NoticeForm");
    },
    addNotice() {
      const id = this.$route.query.id;
      console.log(id);
      console.log(this.form);
      addPreparation(this.form)
        .then((res) => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("恭喜您创建成功!");
            this.adduserdialog = false;
            location.reload();
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
<style  scoped>
.el-row {
  padding: 10px 0;
}
</style>