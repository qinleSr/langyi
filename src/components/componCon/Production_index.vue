
<template>
  <!-- 产康首页 -->

  <div class="CustmerBox">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta> -->
    <div class="head_box">
      <img src="../../assets/img/18.jpg" class="head_img" />
      <div class="left_Con">
        <img src="../../assets/img/19.png" />
        <div class="Con_Box">
          <div class="Con_title">钱塘左畔，越秀之江</div>
          <div class="Con_text">杭州 HANGZHOU</div>
        </div>
      </div>
      <div class="right_Con">
        <div class="Right_items" style="border-left: none">
          <img src="../../assets/img/20.png" />
          <div class="items_text">项目预约</div>
        </div>
        <div class="Right_items">
          <img src="../../assets/img/21.png" />
          <div class="items_text">产康项目</div>
        </div>
      </div>
    </div>
    <div class="Con_tips">
      <div class="tips_items" style="margin-right: 30px">
        <div class="tips_head">
          <div class="tips_title">客户服务完成记录</div>
          <div class="tips_right">
            <div class="tips_time">2020-4-10</div>
            <div class="a"></div>
            <div class="tips_text">详情</div>
            <img
              src="../../assets/img/22.png"
              style="width: 20px; height: 15px"
            />
          </div>
        </div>
        <div class="items_Con">
          <div class="Con_items">
            <div class="user_name">陈女士</div>
            <div class="user_phone">18917828888</div>
            <div class="user_project">子宫修复套餐</div>
            <div class="user_time">2020.4.20 上午11:30</div>
            <div class="user_teacher">王老师</div>
            <div class="user_operation" @click="visit">回访</div>
          </div>
        </div>
      </div>
      <div class="tips_items">
        <div class="tips_head">
          <div class="tips_title">预约提醒</div>
          <div class="tips_right">
            <div class="tips_time">2020-4-10</div>
            <div class="a"></div>
            <div class="tips_text" @click="Inform">详情</div>
            <img
              src="../../assets/img/22.png"
              style="width: 20px; height: 15px"
            />
          </div>
        </div>
        <div class="items_Con">
          <div class="Con_items">
            <div class="user_name">陈女士</div>
            <div class="user_phone">18917828888</div>
            <div class="user_project">孕期古方养发</div>
            <div class="user_time">2020.4.20 上午11:30</div>
            <div class="user_teacher">王老师</div>
            <div class="user_operation" @click="open">通知</div>
          </div>
        </div>
      </div>
    </div>
    <div class="status_statistical">
      <div class="status_title">产康房间状态与统计</div>
      <div class="status_Con">
        <div class="status_items">
          <div class="statistical_head">
            <div class="statistical_title">洗头室</div>
            <div class="statistical_right">
              <div class="statistical_time">2020-4-30</div>
              <div class="b"></div>
              <div class="statistical_text">详情</div>
              <img
                src="../../assets/img/22.png"
                style="width: 20px; height: 15px"
              />
            </div>
          </div>
          <div class="text_Con">
            <div class="text_time">10:30-11:30</div>
            <div class="text_name">陈女士</div>
            <div class="text_pproject">产后养发</div>
            <div class="text_teacher">小于</div>
          </div>
        </div>
        <div class="status_items">
          <div class="statistical_head">
            <div class="statistical_title">美容按摩</div>
            <div class="statistical_right">
              <div class="statistical_time">2020-4-30</div>
              <div class="b"></div>
              <div class="statistical_text">详情</div>
              <img
                src="../../assets/img/22.png"
                style="width: 20px; height: 15px"
              />
            </div>
          </div>
          <div class="text_Con">
            <div class="text_time">10:30-11:30</div>
            <div class="text_name">陈女士</div>
            <div class="text_pproject">产后养发</div>
            <div class="text_teacher">小于</div>
          </div>
        </div>
        <div class="status_items">
          <div class="statistical_head">
            <div class="statistical_title">熏蒸室</div>
            <div class="statistical_right">
              <div class="statistical_time">2020-4-30</div>
              <div class="b"></div>
              <div class="statistical_text">详情</div>
              <img
                src="../../assets/img/22.png"
                style="width: 20px; height: 15px"
              />
            </div>
          </div>
          <div class="text_Con">
            <div class="text_time">10:30-11:30</div>
            <div class="text_name">陈女士</div>
            <div class="text_pproject">产后养发</div>
            <div class="text_teacher">小于</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "customer",
  components: {},
  data() {
    return {
      Inform: false,
      form: {},
      VisitForm: false,
    };
  },
  created() {},
  mounted() {},

  methods: {
    open() {
      this.$router.push("/DueProject");
    },
    visit() {
      this.$router.push("/CustomerReturn");
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
.CustmerBox .head_box {
  position: relative;
}
.CustmerBox .head_img {
  width: 100%;
  height: 200px;
  /* object-fit: cover; */
}
.head_box .left_Con {
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  color: #fff;
}
.head_box .left_Con .Con_Box {
  margin: 0 10px;
}
.left_Con .Con_Box .Con_title {
  font-size: 20px;
}
.left_Con .Con_Box .Con_text {
  font-size: 13px;
}
.head_box .right_Con {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  color: #fff;
}
.head_box .right_Con .Right_items {
  background: rgba(51, 51, 51, 0.3);
  width: 150px;
  height: 200px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-bottom: none;
  border-top: none;
  border-right: none;
}
.right_Con .Right_items img {
  width: 50px;
  height: 50px;
}
.right_Con .Right_items .items_text {
  margin: 20px 0;
}
.Con_tips {
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.Con_tips .tips_items {
  width: 50%;
  height: 190px;
  border: 1px solid #eee;
  border-radius: 3px;
}
.Con_tips .tips_items .tips_head {
  background: #eee;
  display: flex;
  align-items: center;
  padding: 5px;
}
.tips_items .tips_head .tips_right {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.tips_head .tips_title {
  font-size: 20px;
  color: #b59461;
}
.tips_items .tips_head .a {
  height: 15px;
  width: 2px;
  background: #333;
  margin: 0 5px;
}
.tips_head .tips_right .tips_time {
  margin: 0 5px;
  font-size: 13px;
}
.tips_head .tips_right .tips_text {
  font-size: 12px;
}
.Con_items {
  margin: 2px 4px;
  display: flex;
  align-items: center;
  font-size: 13px;
  background: #eee;
}
.Con_items .user_name {
  /* width: 70px;
    flex: 1; */
  text-align: center;
  border-right: 1px solid #fff;
  padding: 3px;
}
.Con_items .user_phone {
  flex: 2;
  text-align: center;
  border-right: 1px solid #fff;
  padding: 3px;
}
.Con_items .user_project {
  flex: 3;
  text-align: center;
  border-right: 1px solid #fff;
  padding: 3px;
}
.Con_items .user_time {
  flex: 4;
  text-align: center;
  border-right: 1px solid #fff;
  padding: 3px;
}
.Con_items .user_teacher {
  flex: 2;
  text-align: center;
  border-right: 1px solid #fff;
  padding: 3px;
}
.Con_items .user_operation {
  cursor: pointer;
  flex: 5;
  text-align: right;
  color: #b59461;
}
.status_Con {
  display: flex;
  align-items: center;
  justify-content: center;
}
.status_Con .status_items {
  width: 33.3%;
  height: 300px;
  border: 1px solid #eee;
  border-radius: 3px;
  margin: 10px 30px;
}
.status_items .statistical_head {
  display: flex;
  align-items: center;
  background: #b59461;
  color: #fff;
  padding: 10px;
}
.status_items .statistical_head .b {
  width: 2px;
  height: 15px;
  background: #fff;
  margin: 0 10px;
}
.status_statistical .status_title {
  background: #eee;
  padding: 10px;
  font-size: 20px;
  color: #b59461;
}
.statistical_head .statistical_title {
  font-size: 20px;
  margin-left: 30px;
}
.statistical_head .statistical_right {
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 13px;
}
.statistical_right .statistical_time {
  margin: 0 5px;
}

.status_items .text_Con {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 3px;
  background: #eee;
}
.status_items .text_Con .text_time {
  flex: 2;
  border-right: 1px solid #fff;
  padding: 2px;
}
.status_items .text_Con .text_name {
  flex: 1;
  border-right: 1px solid #fff;
  padding: 2px;
}
.status_items .text_Con .text_pproject {
  flex: 3;
  border-right: 1px solid #fff;
  padding: 2px;
}
.status_items .text_Con .text_teacher {
  flex: 2;
  border-right: 1px solid #fff;
  padding: 2px;
}
</style>
