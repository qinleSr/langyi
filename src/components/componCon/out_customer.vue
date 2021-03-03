<template>
  <!-- 产康项目管理 - 产康增值服务-->
  <div class="CustmerBox">
    <div class="serve_Box">
      <!-- 左侧区域 -->
      <div class="project_box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>消费日期</span>
              </div>
                <el-date-picker v-model="form.consumption_date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>表单编号</span>
              </div>
              <el-input v-model="form.form_no" autocomplete="off"></el-input>
            </el-col>
            <el-col></el-col>
            <el-col></el-col>
          </el-row>
          <el-row>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>客户姓名</span>
              </div>
              <el-select v-model="form.customer_name" disabled placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-col>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>房间号</span>
              </div>
              <el-select v-model="form.customer_name" disabled placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-col>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>合同套餐</span>
              </div>
              <el-select v-model="form.customer_name" disabled placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-col>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>联系方式</span>
              </div>
              <el-select v-model="form.customer_name" disabled placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-col>
          </el-row>
          <div>
            <tr>
              <th>
                <div class="label_title">
                <span class="improtant">*</span>
                <span>消费项目</span>
              </div>
              </th>
              <th>
                <div class="label_title">
                <span class="improtant">*</span>
                <span>单价</span>
              </div>
              </th>
              <th>
                <div class="label_title">
                <span class="improtant">*</span>
                <span>数量</span>
              </div>
              </th>
              <th></th>
            </tr>
            <tr>
              <td>
                <el-input v-model="form.project"></el-input>
                
              </td>
              <td>
                <el-input placeholder=""v-model="form.price">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
              </td>
              <td>
                <el-input placeholder=""v-model="form.num">
                   <i slot="suffix" class="el-input__icon ">次</i>
                </el-input>
              </td>
              <td class="bnt_box">
                <div class="btn_item">+</div>
                <div class="btn_item">-</div>
              </td>
            </tr>
            <tr>
              <td>
                <el-input v-model="form.project"></el-input>
                
              </td>
              <td>
                <el-input placeholder=""v-model="form.price">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
              </td>
              <td>
                <el-input placeholder=""v-model="form.num">
                   <i slot="suffix" class="el-input__icon ">次</i>
                </el-input>
              </td>
              <td class="bnt_box">
                <div class="btn_item">+</div>
                <div class="btn_item">-</div>
              </td>
            </tr>
            <tr>
              <td>
                <el-input v-model="form.project"></el-input>
                
              </td>
              <td>
                <el-input placeholder=""v-model="form.price">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
              </td>
              <td>
                <el-input placeholder=""v-model="form.num">
                   <i slot="suffix" class="el-input__icon ">次</i>
                </el-input>
              </td>
              <td class="bnt_box">
                <div class="btn_item">+</div>
                <div class="btn_item">-</div>
              </td>
            </tr>
            <tr>
              <td>
                <el-input v-model="form.project"></el-input>
                
              </td>
              <td>
                <el-input placeholder=""v-model="form.price">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
              </td>
              <td>
                <el-input placeholder=""v-model="form.num">
                   <i slot="suffix" class="el-input__icon ">次</i>
                </el-input>
              </td>
              <td class="bnt_box">
                <div class="btn_item">+</div>
                <div class="btn_item">-</div>
              </td>
            </tr>
            <tr>
              <td>
                <el-input v-model="form.project"></el-input>
                
              </td>
              <td>
                <el-input placeholder=""v-model="form.price">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
              </td>
              <td>
                <el-input placeholder=""v-model="form.num">
                   <i slot="suffix" class="el-input__icon ">次</i>
                </el-input>
              </td>
              <td class="bnt_box">
                <div class="btn_item">+</div>
                <div class="btn_item">-</div>
              </td>
            </tr>
          </div>
          <el-row>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>套餐金额</span>
              </div>
              <el-input placeholder=""v-model="form.money">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
            </el-col>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>押金金额</span>
              </div>
              <el-input placeholder=""v-model="form.deposit">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
            </el-col>
             <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>支付方式</span>
              </div>
              <el-select v-model="form.pay_type" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-col>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>应扣金额</span>
              </div>
              <el-input placeholder=""v-model="form.kou_money">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
            </el-col>
            <el-col>
              <div class="label_title">
                <span class="improtant">*</span>
                <span>余额</span>
              </div>
              <el-input placeholder=""v-model="form.balance">
                   <i slot="suffix" class="el-input__icon ">元</i>
                </el-input>
            </el-col>
          </el-row>
          <el-row style="float: right;margin:20px">
            <el-button  type="primary" @click="onSubmit">保存</el-button>
    <el-button>取消</el-button>
          </el-row>
      
        </el-form>
        
      </div>
      <!-- 右侧区域 -->
      <div class="order_list">
        <div class="footer">
          <button class="solt_btn" style="background-color: #7a6f69;">所外客户</button>
          <button class="solt_btn" style="background-color: #c19a68;">在住客户</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "../Conpontool/Search.vue";
export default {
  name: "customer",
  components: { Search },
  data() {
    return {
     form:{
       consumption_date:'',
       form_no:'',
       project:'暖宫散寒',
       price:'2980',
       num:'10'
     }
    };
  },
  created() {},
  mounted() {},

  methods: {
    onSubmit() {
        console.log('submit!');
      }
   
  }
};
</script>
<style  scoped>
.CustmerBox {
  margin: 10px;
  box-shadow: 2px 2px 2px #eee;
  border-radius: 3px;
}
.serve_Box {
  display: flex;

}
.serve_Box .order_list {
  height: 740px;
  width: 350px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  position: relative;
}
.serve_Box .project_box {
      width: 100%;
    margin-left: 20px;
    font-size: 13px;
    color: #999;
}
.project_box .project_ConBox {
  display: flex;
}

.el-row{
  margin: 20px 0;
}
.el-row .el-col{
  margin: 0 20px;
}
.el-col .label_title{
  padding: 5px 0;
}
.el-input,.el-select{
  width: 202px;
}
th{
  padding: 5px 0;
}
th .label_title{
  width: 100px;
  margin: 0 20px;
    text-align: left;
}
td .el-input{
  margin:5px 20px;
      width: 100px;
  
}
.bnt_box{
  display: flex;
  align-items: center;
}
td .btn_item{
  border-radius: 50%;
  background: #c19a68;
  outline: none;
  border: none;
  margin: 0 5px;
  width: 15px;
  height: 15px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  line-height: 15px;
}
td .el-input .el-input__inner{
text-align: center;
}
</style>