<template>
<div class="head_main">
      <div class="head_icon">
        <img src="../../assets/img/7.jpg"></img>
      </div>
      <div class="head_content">
        <div class="Content_head">
          <div class="Content_con">
            <img src="../../assets/img/8.png">
            <div class="Content_conText">玺园阁母婴护理中心(杭州店)</div>
          </div>
          <div class="Content_Rightcon">
            <img src="../../assets/img/9.png">
            <div class="RightItems">1</div>
            <div class="RightItems">2</div>
            <div class="RightItems">3</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "navBar"
};
</script>
<style scoped>
.head_main {
  height: 60px;
  display: flex;
  align-items: center;
  background: cornflowerblue;
}
.head_main .head_icon{
width: 200px;
  height: 60px;
 
}
.head_main .head_icon img{
 width: 200px;
  height: 60px;
}
.head_content .Content_head{
    display: flex;
    align-content: center;
}
.head_content .Content_head .Content_con{
    display: flex;
    align-content: center;
    color: #ffff;
    margin-right: auto;
}
.Content_head .Content_con img{
    width: 20px;
    height: 20px;
}
.Content_head  .Content_Rightcon{
    display: flex;
    align-items: center;
    margin-left: auto;
}
.Content_head .Content_Rightcon img{
    width: 20px;
    height: 20px;
}
.Content_head .Content_Rightcon .RightItems{
    margin: 0 10px;
}
</style>