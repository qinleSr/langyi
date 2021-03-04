<template>
  <!-- 首页 -->
  <div class="Main_Box">
    <div class="Main_Left">
      <div class="Room_status_title">房间状态与统计</div>
      <div class="Room_chooseItem">
        <div class="choose_tips">
          <div class="tips_text">杭州玺园阁/2楼</div>
          <span class="bottom"></span>
        </div>
        <div class="choose_row">
          <div
            @click="detailRoom"
            class="choos_Box"
            style="background: #c19a68"
          >
            <div class="Room_left">
              <div class="Room_num">201</div>
              <div class="Room_username">陈女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <img src="../../assets/img/2.png" />
            </div>
          </div>
          <div class="choos_Box">
            <div class="Room_left">
              <div class="Room_num">202</div>
              <div class="Room_username">空房</div>
              <img class="search_icon" src="../../assets/img/4.png" />
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <!-- <img src="../assets/img/2.png" /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="Room_chooseItem">
        <div class="choose_tips">
          <div class="tips_text">杭州玺园阁/3楼</div>
          <span class="bottom"></span>
        </div>
        <div class="choose_row">
          <div class="choos_Box" style="background: #c19a68">
            <div class="Room_left">
              <div class="Room_num">301</div>
              <div class="Room_username">陈女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <img src="../../assets/img/2.png" />
            </div>
          </div>
          <div class="choos_Box" style="background: #c19a68">
            <div class="Room_left">
              <div class="Room_num">302</div>
              <div class="Room_username">陈女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <img src="../../assets/img/2.png" />
            </div>
          </div>
          <div class="choos_Box" style="background: #eeee">
            <div class="Room_left">
              <div class="Room_num">303</div>
              <div class="Room_username">准备中</div>
              <img class="search_icon" src="../../assets/img/4.png" />
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <!-- <img src="../assets/img/2.png" /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="Room_chooseItem">
        <div class="choose_tips">
          <div class="tips_text">杭州玺园阁/4楼</div>
          <span class="bottom"></span>
        </div>
        <div class="choose_row">
          <div class="choos_Box" style="background: #c19a68">
            <div class="Room_left">
              <div class="Room_num">401</div>
              <div class="Room_username">王女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <img src="../../assets/img/2.png" />
            </div>
          </div>
          <div class="choos_Box" style="background: #c19a68">
            <div class="Room_left">
              <div class="Room_num">402</div>
              <div class="Room_username">刘女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <div class="two_people">
                <img src="../../assets/img/2.png" />
                <img src="../../assets/img/2.png" />
              </div>
            </div>
          </div>
          <div class="choos_Box" style="background: #c19a68">
            <div class="Room_left">
              <div class="Room_num">403</div>
              <div class="Room_username">刘女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <div class="two_people">
                <img src="../../assets/img/2.png" />
                <img src="../../assets/img/2.png" />
              </div>
            </div>
          </div>
          <div class="choos_Box" style="background: #c19a68">
            <div class="Room_left">
              <div class="Room_num">404</div>
              <div class="Room_username">刘女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <div class="two_people">
                <img src="../../assets/img/2.png" />
                <img src="../../assets/img/2.png" />
              </div>
            </div>
          </div>
          <div class="choos_Box" style="background: #c19a68">
            <div class="Room_left">
              <div class="Room_num">405</div>
              <div class="Room_username">刘女士</div>
            </div>
            <div class="Room_right">
              <img src="../../assets/img/3.png" />
              <div class="two_people">
                <img src="../../assets/img/2.png" />
                <img src="../../assets/img/2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Main_Right">
      <div class="Main_Subscribe">
        <div class="Subscribe_title">
          <div class="Subscribe_tips">当日预约</div>
          <div
            class="Subscribe_Items"
            style="border-bottom: 2px solid darkgoldenrod"
          >
            <div class="top"></div>
            <div class="Subscribe_text">待受理</div>
          </div>
          <div class="Subscribe_Items">待执行</div>
          <div class="Subscribe_Items">已完成</div>
        </div>
        <div class="Subscribe_Content">
          <div class="Content_Items">
            <div class="UserName">陈女士</div>
            <div class="UserPhone">18917828888</div>
            <div class="UserDo">孕期古方养发</div>
            <div class="UserTime">2020.4.20 上午11:30</div>
            <div class="UserTeacher">王老师</div>
          </div>
          <div class="Content_Items">
            <div class="UserName">陈女士</div>
            <div class="UserPhone">18917828888</div>
            <div class="UserDo">孕期古方养发</div>
            <div class="UserTime">2020.4.20 上午11:30</div>
            <div class="UserTeacher">王老师</div>
          </div>
          <div class="Content_Items">
            <div class="UserName">陈女士</div>
            <div class="UserPhone">18917828888</div>
            <div class="UserDo">孕期古方养发</div>
            <div class="UserTime">2020.4.20 上午11:30</div>
            <div class="UserTeacher">王老师</div>
          </div>
        </div>
      </div>
      <div class="Now_Remind">
        <div class="Remind_title">当日提醒</div>
        <div class="Remind_content">
          <div class="Remind_Row">
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">预约参观提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/6.png" />
              <div class="Remind_num">1</div>
              <div class="Remind_text">未跟踪提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">客户回访提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">孕期服务提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">预产期提醒</div>
            </div>
          </div>
          <div class="Remind_Row">
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">入所提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/6.png" />
              <div class="Remind_num">1</div>
              <div class="Remind_text">出所提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">投诉处理提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">客户欠款提醒</div>
            </div>
            <div class="Remind_Item">
              <img src="../../assets/img/5.png" />
              <div class="Remind_num">0</div>
              <div class="Remind_text">特殊情况处理</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    detailRoom() {
      this.$router.push({ path: "ArrivalNotice", query: { id: 202 } });
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/base.css";
@import "../../assets/css/index.css";
</style>