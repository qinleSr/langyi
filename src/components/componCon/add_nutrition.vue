<template>

<el-container>
    <el-header>
      <div class="Tab_Right">
        <div class="Right_items">
          <img src="../../assets/img/13.png" />
          <div class="Right_itemsTitle">查看</div>
        </div>
        <div class="Right_items">
          <img src="../../assets/img/14.png" />
          <div class="Right_itemsTitle">导出</div>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form.customer_name"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form.customer_phone"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>年龄</span>
            </div>
            <el-input v-model="form.customer_age"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>房间号</span>
            </div>
            <el-input v-model="form.customer_room"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>套餐</span>
            </div>
            <el-select v-model="form.food" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>生产日期</span>
            </div>
            <el-date-picker
              v-model="form.production_date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>入住日期</span>
            </div>
            <el-date-picker
              v-model="form.live_date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-date-picker
              v-model="form.leave_date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>宝宝性别</span>
            </div>
            <el-select v-model="form.baby_sex" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>民族</span>
            </div>
            <el-input v-model="form.national"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>宗教信仰</span>
            </div>
            <el-input v-model="form.religious"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出生地</span>
            </div>
            <el-input v-model="form.birth_adres"></el-input>
          </el-col>
        </el-row>
        <el-header>孕期分娩情况</el-header>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>身高</span>
            </div>
            <el-input placeholder v-model="form.height">
              <i slot="suffix" class="el-input__icon">CM</i>
            </el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>孕前体重</span>
            </div>
            <el-input placeholder v-model="form.weight">
              <i slot="suffix" class="el-input__icon">KG</i>
            </el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>孕前体重增长</span>
            </div>
            <el-input placeholder v-model="form.add_weight">
              <i slot="suffix" class="el-input__icon">KG</i>
            </el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产次</span>
            </div>
            <el-select v-model="form.child_num" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>生产方式</span>
            </div>
            <el-select v-model="form.birth_type" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>会阴伤口</span>
            </div>
            <el-select v-model="form.wound" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>喂养方式</span>
            </div>
            <el-select v-model="form.eat_type" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col style="width: 100%;">
            <div class="label_title">
              <span class="improtant">*</span>
              <span>孕期(产后并发症或合并症)</span>
            </div>
            <el-checkbox-group v-model="form.symptoms" @change="handleChange">
              <el-checkbox v-for="item in symptomsArr" :label="item" :key="item">{{item}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-header>营养相关情况</el-header>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>乳房状况</span>
            </div>
            <el-select v-model="form.RF_status" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>乳房分泌情况</span>
            </div>
            <el-select v-model="form.RF_FM" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
           <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>胃肠道功能</span>
            </div>
            <el-select v-model="form.stomach" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>皮肤情况</span>
            </div>
            <el-select v-model="form.skin" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>食物过敏</span>
            </div>
            <el-select v-model="form.allergy" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>口唇颜色</span>
            </div>
            <el-select v-model="form.mouth_color" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>精神状况</span>
            </div>
            <el-select v-model="form.spirit_status" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>活动情况</span>
            </div>
            <el-select v-model="form.active_status" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
           <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>睡眠情况</span>
            </div>
            <el-select v-model="form.sleep" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>营养补充剂</span>
            </div>
            <el-select v-model="form.supplements" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col style="width: 600px;">
            <div class="label_title">
              <span class="improtant">*</span>
              <span>其他表现症状</span>
            </div>
            <el-input v-model="form.other_status" style="width: 600px;"></el-input>
          </el-col>
          <el-col style="width: 600px;">
            <div class="label_title">
              <span class="improtant">*</span>
              <span>饮食口味/习惯</span>
            </div>
            <el-input v-model="form.eat_status" style="width: 600px;"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col style="width: 600px;">
            <div class="label_title">
              <span class="improtant">*</span>
              <span>医嘱禁忌</span>
            </div>
            <el-input v-model="form.doctor" style="width: 600px;"></el-input>
          </el-col>
          <el-col style="width: 600px;">
            <div class="label_title">
              <span class="improtant">*</span>
              <span>目前服用的药物</span>
            </div>
            <el-input v-model="form.eat_drug" style="width: 600px;"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>记录人</span>
            </div>
            <el-input v-model="form.note_people"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>日期</span>
            </div>
            <el-input v-model="form.date "></el-input>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        symptoms: []
      },
      symptomsArr: [
        "糖尿病",
        "高血压",
        "甲减/亚临床甲减",
        "甲亢",
        "无特殊",
        "其他"
      ]
    };
  },
  methods: {
    handleChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style  scoped>
.el-container{
    height: 800px;
}
.Tab_Right {
  display: flex;
  align-items: center;
  float: right;
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
.el-row {
  margin-bottom: 15px;
}
.el-row .el-col {
  margin: 0 20px;
  width: 202px;
}
.el-col .label_title {
  padding: 5px 0;
}
.el-input,
.el-select {
  width: 202px;
}
</style>