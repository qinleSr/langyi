<template>
  <!-- 客房信息表 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle" @click="add_room">新增</div>
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
        <div class="first_row">
          <div class="Row_head">
            <div class="Row_title">杭州玺园阁/2楼</div>
          </div>
          <div class="Room_row">
            <div class="Room_items">
              <div class="Room_num">201</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">202</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">203</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">204</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">205</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
          </div>
        </div>
            <div class="first_row">
          <div class="Row_head">
            <div class="Row_title">杭州玺园阁/3楼</div>
          </div>
          <div class="Room_row">
            <div class="Room_items">
              <div class="Room_num">301</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">302</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">303</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">304</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">305</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
          </div>
        </div>
            <div class="first_row">
          <div class="Row_head">
            <div class="Row_title">杭州玺园阁/4楼</div>
          </div>
          <div class="Room_row">
            <div class="Room_items">
              <div class="Room_num">401</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">402</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">403</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">404</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
            <div class="Room_items">
              <div class="Room_num">405</div>
              <div class="Room_footer">
                <div class="copy">复制</div>
                <div class="del">删除</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增客房信息 -->
    <el-dialog
  title="提示"
  :visible.sync="dialogRoom"
  width="70%"
  >
  <div class="Room_box">
    <div class="Room_boxRow">
      <div class="room_boxitems">
        <div class="room_title">
          <span class="improtant">*</span>
          <span>楼层</span>
        </div>
        <el-input placeholder="请输入楼层"></el-input>
      </div>
      <div class="room_boxitems" style="margin-left: 50px;">
        <div class="room_title">
          <span class="improtant">*</span>
          <span>房间号</span>
        </div>
        <el-input placeholder="请输入房间号"></el-input>
      </div>
    </div>
    <div class="Room_boxRow">
      <div class="room_boxitems">
        <div class="room_title">
          <span class="improtant">*</span>
          <span>房间物品</span>
        </div>
        <span style="color:#999;font-size:12px;">此处添加该房间物品详细明细</span>
      </div>
    </div>
    <div class="Room_boxRow">
      <div class="room_boxitem" style="width:130px">
          <span>序号</span>
        <el-input placeholder="" :disabled="true"></el-input>
      </div>
      <div class="room_boxitem">
          <span>名称</span>
        <el-input placeholder=""></el-input>
      </div>
      <div class="room_boxitem" style="width:130px">
          <span>数量</span>
        <el-input placeholder=""></el-input>
      </div>
      <div class="room_boxitem" style="width:130px">
          <span>单位</span>
        <el-input placeholder=""></el-input>
      </div>
      <div class="room_boxitem" style="width:130px">
          <span >单价</span>
          <div class="money_box">
            <el-input placeholder=""></el-input>
            <span>元</span>
          </div>
      </div>
      <div class="room_boxitem" style="width:130px">
          <span >金额</span>
       <div class="money_box">
            <el-input placeholder=""></el-input>
            <span>元</span>
          </div>
      </div>
    </div>
    <button class="slot_btn">增加</button>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogRoom = false">取 消</el-button>
    <el-button type="primary" @click="dialogRoom = false">保 存</el-button>
  </span>
</el-dialog>
  </div>
</template>
<script>
export default {
  name: "customer",
  components: {},
  data() {
    return {
      dialogRoom:false
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 增加房间
    add_room(){
      this.dialogRoom=true
    }
  }
};
</script>
<style >
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
.Room_row {
  display: flex;
  align-items: center;
}
.Room_row .Room_items {
  width: 110px;
  height: 110px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px #eee;
  margin: 10px;
}
.Room_row .Room_items .Room_num {
  height: 60px;
  color: #fff;
  background: #7a6f69;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
.Room_row .Room_items .Room_footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c19a68;
  padding: 10px 0;
}
.Room_items .Room_footer .copy {
  margin: 0 5px 0 0;
}
.first_row .Row_head {
  background: #eee;
  padding: 10px;
  font-size: 14px;
}
.first_row .Row_head .Row_title {
  margin-left: 10px;
}
.Room_box .Room_boxRow{
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.improtant{
  color: red;
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
.room_boxitems .room_title{
  padding: 10px 0;
}
.Room_boxRow .room_boxitem{
  display: flex;
  align-items: center;
  margin: 0 20px;
}
.room_boxitem span{
   width: 50px;
}
.room_boxitem .money_box{
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 6px;
  width: 120px;
}
.room_boxitem .money_box .el-input .el-input__inner{
  border: none ;
}
</style>