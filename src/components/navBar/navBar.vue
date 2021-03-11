<template>
  <div class="head_main">
    <div class="head_icon">
      <img src="../../assets/img/logo.png" alt="" />
    </div>
    <div class="Content_head">
      <div class="Content_con">
          <img class="Content_con_img" src="../../assets/img/8.jpg" />
        <div class="Content_conText">玺圆阁母婴护理中心(上海·滨江旗舰店)</div>
      </div>
      <div class="Content_Rightcon">
        <img class="Content_Rightcon_img" src="../../assets/img/9.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
import CommonTab from "../CommonTab/CommonTab.vue";
export default {
  name: "navBar",
  components: { CommonTab },
};
</script>
<style scoped lang="less">
.head_main {
  height: 80px;
  display: flex;
  background: linear-gradient(to right, #5b4b41, #8d796d);
}
.head_icon {
  width: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  margin-right: 40px;
  // display: table-cell; //主要是这个属性
  // vertical-align: middle;
  // text-align: center;
  img {
    width: 154px;
    height: 54px;
    margin-top: 14px;
    margin-left: 20px;
  }
}
.Content_con_img {
  width: 40px;
  height: 30px;
  display: table-cell; //主要是这个属性
  vertical-align: middle;
  text-align: center;
  // line-height: 30px;
  // text-align: center;
  // margin: 0 auto;
}
// .Content_con > img {
//   margin: 0 10px;
// }
.Content_head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to left, #524b47, #5d4d43);

  height: 30px;
}
.Content_con {
  display: flex;
  align-content: center;
  color: #ffff;
  margin-right: auto;
  min-width: 300px;
}
// .Content_head .Content_con img {
//   width: 20px;
//   height: 20px;
// }
.Content_head .Content_Rightcon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
}
// .Content_head .Content_Rightcon img {
//   width: 20px;
//   height: 20px;
// }
.Content_head .Content_Rightcon .RightItems {
  margin: 0 10px;
}
.Content_conText {
  line-height: 30px;
  padding-left: 10px;
}
.Content_Rightcon_img {
  width: 40px;
  height: 30px;
  margin-right: 50px;
  // line-height: 30px;
  // text-align: center;
  // padding-top: 5px;
  // box-sizing: border-box;
}
</style>