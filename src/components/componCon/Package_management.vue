<template>
  <!--合同管理-套餐管理 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" @click="add_package">
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
        <div class="contract_box">
          <div class="contract_items">
            <div class="img">
              <img src="../../assets/img/24.jpg" style="width:210px;height:160px;margin:5px;" />
            </div>
            <div class="contract_title">贴心特惠·套餐合同附件</div>
            <button class="edit" @click="edit_contract">修改</button>
          </div>
          <div class="contract_items">
            <div class="img">
              <img src="../../assets/img/24.jpg" style="width:210px;height:160px;margin:5px;" />
            </div>
            <div class="contract_title">淑·套餐合同附件</div>
            <button class="edit">修改</button>
          </div>
          <div class="contract_items">
            <div class="img">
              <img src="../../assets/img/24.jpg" style="width:210px;height:160px;margin:5px;" />
            </div>
            <div class="contract_title">悦·套餐合同附件</div>
            <button class="edit">修改</button>
          </div>
          <div class="contract_items">
            <div class="img">
              <img src="../../assets/img/24.jpg" style="width:210px;height:160px;margin:5px;" />
            </div>
            <div class="contract_title">荣·套餐合同附件</div>
            <button class="edit">修改</button>
          </div>
          <div class="contract_items">
            <div class="img">
              <img src="../../assets/img/24.jpg" style="width:210px;height:160px;margin:5px;" />
            </div>
            <div class="contract_title">御·套餐合同附件</div>
            <button class="edit">修改</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 修改合同对话框 -->
    <el-dialog title="提示" :visible.sync="dialogContract" width="70%" >
      <div class="dialogBox">
        <div class="dialog_row">
          <div class="left_row">入住预定合同</div>
          <div class="right_row">
            <div class="row_items">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>合同套餐名称</span>
              </div>
              <el-input v-model="contract_name" placeholder="请输入您的合同套餐名称"></el-input>
            </div>
            <div class="row_items">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>合同套餐原价</span>
              </div>
              <el-input v-model="contract_oldprice" placeholder="请输入您的合同套餐原价"></el-input>
            </div>
            <div class="row_items" style="margin-left:50px;">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>房型</span>
              </div>
              <div style="display:flex;">
                <el-input v-model="room_no" style="width:100px;"></el-input>
                <el-input v-model="room_peoplenum" style="width:100px;margin: 0 10px;"></el-input>
                <el-input v-model="room_floor" style="width:100px;margin: 0 10px;"></el-input>
              </div>
              <button class="dialogBtn">增加</button>
            </div>
          </div>
        </div>
        <div class="dialog_row">
          <div class="left_row">套餐合同附件</div>
          <div class="right_box">
            <div class="row_itemss">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>妈妈赠送礼包</span>
              </div>
              <span style="color:#eee">此处添加该类别详细明细</span>
              <div style="display:flex;">
                <div style="display:flex;width: 500px;">
                  <span style="width: 40px;">品名</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
                <div style="display:flex;margin-left:70px">
                  <span style="width: 40px;">数量</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
              </div>
              <button class="dialogBtn">增加</button>
            </div>
            <div class="row_itemss">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>宝宝赠送礼包</span>
              </div>
              <span style="color:#eee">此处添加该类别详细明细</span>
              <div style="display:flex;">
                <div style="display:flex;width: 500px;">
                  <span style="width: 40px;">品名</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
                <div style="display:flex;margin-left:70px">
                  <span style="width: 40px;">数量</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
              </div>
              <button class="dialogBtn">增加</button>
            </div>
            <div class="row_itemss">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>高档补品</span>
              </div>
              <span style="color:#eee">此处添加该类别详细明细</span>
              <div style="display:flex;">
                <div style="display:flex;width: 500px;">
                  <span style="width: 40px;">品名</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
                <div style="display:flex;margin-left:70px">
                  <span style="width: 40px;">数量</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
              </div>
              <button class="dialogBtn">增加</button>
            </div>
            <div class="row_itemss">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>产后恢复</span>
              </div>
              <span style="color:#eee">此处添加该类别详细明细</span>
              <div style="display:flex;">
                <div style="display:flex;width: 500px;">
                  <span style="width: 40px;">品名</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
                <div style="display:flex;margin-left:70px">
                  <span style="width: 40px;">数量</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
              </div>
              <button class="dialogBtn">增加</button>
            </div>
            <div class="row_itemss">
              <div class="row_itemstitle">
                <span class="important">*</span>
                <span>增值服务</span>
              </div>
              <span style="color:#eee">此处添加该类别详细明细</span>
              <div style="display:flex;">
                <div style="display:flex;width: 500px;">
                  <span style="width: 40px;">品名</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
                <div style="display:flex;margin-left:70px">
                  <span style="width: 40px;">数量</span>
                  <el-input v-model="contract_name"></el-input>
                </div>
              </div>
              <button class="dialogBtn">增加</button>
            </div>
            <span>备注</span>
            <span>(以上配套和赠送服务仅限客户本人使用，补课抵价或转做他用)</span>
          </div>
           
        </div>
        
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogContract = false">取 消</el-button>
        <el-button type="primary" @click="save">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {addManage} from '../../api/customer'
export default {
  name: "customer",
  components: {},
  data() {
    return {
      dialogContract: false,
      contract_name: "", //合同名称
      contract_oldprice: "", //合同原价
      room_no: "", //房间号
      room_peoplenum: "", //房间可住人数
      room_floor: "", //房间楼层
      flag:0,
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 修改合同
    edit_contract() {
      this.flag=2
      this.dialogContract = true;
    },
    // 新增套餐按钮
    add_package(){
      this.flag=1
      this.dialogContract = true;
    },
    // 新增保存套餐
    save(){
      console.log(this.room_floor)
      var cc=this.room_floor
      var bb = this.room_peoplenum
      var aa = this.room_no
      var form={
        name :this.contract_name, //合同名称
        price:this.contract_oldprice, //合同原价
        room_type:[aa,bb,cc],
        cover:''
      }
      addManage(form).then(res=>{
        console.log(res)
        return
        if(res.data.status == 0){
           this.$message.success('恭喜您创建成功!');
           this.adduserdialog = false
           location.reload()
        }else{
           this.$message.error(res.data.message);
        }
      }).catch(res=>{
         this.$message.success(res.data.message);
      })
    }
  }
};
</script>
<style  scoped>
.right_box {
  display: flex;
  flex-flow: column;
  margin: 0 50px;
}
.right_box .row_itemss{
  margin-bottom: 40px;
}
.dialogBox .dialog_row {
  display: flex;
}
.dialogBox .dialog_row .right_row {
  display: flex;
}
.dialog_row .left_row {
  font-size: 16px;
  color: #7a6f69;
  font-weight: bold;
}
.dialog_row .right_row .row_items {
  margin: 0 50px;
}
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
.contract_box {
  display: flex;
  align-items: center;
}
.contract_items {
  width: 220px;
  height: 250px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  margin: 20px;
}
.contract_items .contract_title {
  margin-left: 20px;
  font-size: 14px;
  color: #7a6f69;
}
.contract_items .edit {
  border: none;
  outline: none;
  background: #c19a68;
  color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  float: right;
  margin: 10px;
}
.Tab {
  border-bottom: 5px solid #eee;
}
.dialogBtn {
  border: 0;
  background: #c19a68;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  margin: 0 5px;
  outline: none;
  margin: 10px 0;
}
.row_itemstitle {
  padding-bottom: 10px;
}
.important {
  color: red;
}
</style>