<template>
    <el-form :model="form">
        <el-row>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>客户姓名</span>
                </div>
                <el-input v-model="form.username" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>年龄</span>
                </div>
                <el-input v-model="form.userage" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>生产医院</span>
                </div>
                <el-input v-model="form.hospital" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>入所日期</span>
                </div>
                <el-date-picker value-format="yyyy-MM-dd" v-model="form.toTime" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>出所日期</span>
                </div>
                <el-date-picker value-format="yyyy-MM-dd" v-model="form.leaveTime" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>出院小结</span>
                </div>
                 <el-select v-model="form.leavemsg" placeholder="">
                      <el-option label="无" value="shanghai"></el-option>
                      <el-option label="有" value="beijing"></el-option>
                 </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>宝宝姓名</span>
                </div>
                <el-input v-model="form.babyname" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>宝宝性别</span>
                </div>
                <el-input v-model="form.babysex" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>宝宝出生体重</span>
                </div>
                <el-input v-model="form.babyweight" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>出生孕周</span>
                </div>
                <el-input v-model="form.babybirth_day" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>孕</span>
                </div>
                <el-input v-model="form.mom_child" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>产</span>
                </div>
                <el-input v-model="form.baby_num" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>病史:(孕期)</span>
                </div>
                <el-select v-model="form.medical" placeholder="">
                      <el-option label="高血压" value="shanghai"></el-option>
                      <el-option label="高血压" value="beijing"></el-option>
                 </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col style="width:800px;word-wrap:break-word">
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>生产方式</span>
                </div>
                <el-checkbox-group v-model="checked" :min="1" :max="1">
                     <el-checkbox v-for="item in choose" :label="item" >{{item}}</el-checkbox>
                     <el-checkbox v-model="checked">剖宫产
                         <input placeholder="原因" style="border: none;border-bottom: 1px solid #333;width: 500px;outline: none;"></input>
                     </el-checkbox>
                </el-checkbox-group>
            </el-col>
            <el-col>
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>孕期用药</span>
                </div>
                <div style="display:flex;align-items: center;">  
                    <el-radio v-model="radio" label="1">无</el-radio>
                    <el-radio v-model="radio" label="2">有
                       <el-input placeholder="药物名称"></el-input>
                    </el-radio>   
                </div>
            </el-col>
             <el-col style="margin-left: 70px;">
                <div class="main_title">
                    <span class="improtant">*</span>
                    <span>产后用药</span>
                </div>
                <div style="display:flex;align-items: center;">  
                    <el-radio v-model="radio" label="1">无</el-radio>
                    <el-radio v-model="radio" label="2">有
                       <el-input placeholder="药物名称"></el-input>
                    </el-radio>   
                </div>
            </el-col>
        </el-row>
        <button class="slot_btn">保存</button>
    </el-form>
    
</template>
<script>
const Options = ['顺产', '剖宫产', '钳产', '吸引产','臀牵引产'];
export default {
    name:"recordOne",
    data(){
        return{
            form:{
                user_name:'',
                userage:'',
                hospital:'',
                toTime:'',
                leaveTime:'',
                
                
            },
            choose: Options,
            checked: [],
            radio:''
        }
    },
    component:{}
}
</script>
<style  scoped>
.el-row{
    margin-bottom: 20px;
}
.el-col{
    width: 202px;
    margin: 0 20px;
    font-size: 13px;
}
.el-col .main_title{
    padding: 5px;
}
.el-checkbox{
    width: 100px;
}
.slot_btn {
  border: 0;
  background: #c19a68;
  width: 150px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
  float: right;
}
</style>