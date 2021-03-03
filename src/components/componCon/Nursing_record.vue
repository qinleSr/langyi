 <template>
<!-- 在所护理记录 -->
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
         <Search class="Search"></Search>
      </div>
      <div class="cards">
       <div class="items_Row">
           <div class="items_box" @click="go_detail">
               <div class="room_num">201</div>
               <img src="../../assets/img/17.png">
               <div class="items_rightCon">
                   <div class="rightCon_row">
                       <div class="rightConLeft">
                           <div class="rightCon_title">客户姓名:</div>
                           <div class="rightCon_username">陈一一</div>
                       </div>
                       <div class="rightConright">
                           <div class="Contract_title">合同套餐:</div>
                           <div class="Contract_food">荣·套餐</div>
                       </div>
                   </div>
                    <div class="rightCon_row">
                       <div class="rightConLeft">
                           <div class="rightCon_title">宝宝姓名:</div>
                           <div class="rightCon_username">陈宝宝</div>
                       </div>
                       <div class="rightConright">
                           <div class="Contract_title">入住天数:</div>
                           <div class="Contract_food">21</div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="items_box">
               <div class="room_num">201</div>
               <img src="../../assets/img/17.png">
               <div class="items_rightCon">
                   <div class="rightCon_row">
                       <div class="rightConLeft">
                           <div class="rightCon_title">客户姓名:</div>
                           <div class="rightCon_username">陈一一</div>
                       </div>
                       <div class="rightConright">
                           <div class="Contract_title">合同套餐:</div>
                           <div class="Contract_food">荣·套餐</div>
                       </div>
                   </div>
                    <div class="rightCon_row">
                       <div class="rightConLeft">
                           <div class="rightCon_title">宝宝姓名:</div>
                           <div class="rightCon_username">陈宝宝</div>
                       </div>
                       <div class="rightConright">
                           <div class="Contract_title">入住天数:</div>
                           <div class="Contract_food">21</div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="items_box">
               <div class="room_num">201</div>
               <img src="../../assets/img/17.png">
               <div class="items_rightCon">
                   <div class="rightCon_row">
                       <div class="rightConLeft">
                           <div class="rightCon_title">客户姓名:</div>
                           <div class="rightCon_username">陈一一</div>
                       </div>
                       <div class="rightConright">
                           <div class="Contract_title">合同套餐:</div>
                           <div class="Contract_food">荣·套餐</div>
                       </div>
                   </div>
                    <div class="rightCon_row">
                       <div class="rightConLeft">
                           <div class="rightCon_title">宝宝姓名:</div>
                           <div class="rightCon_username">陈宝宝</div>
                       </div>
                       <div class="rightConright">
                           <div class="Contract_title">入住天数:</div>
                           <div class="Contract_food">21</div>
                       </div>
                   </div>
               </div>
           </div>
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
     
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 去详情页
    go_detail(){
        this.$router.push('/RecordDetail')
    }
  
  }
};
</script>
<style  scoped>
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
.CustmerBox_Head .Tab .Search{
        margin-left: auto;
    padding: 10px 20px;
    min-width: 400px;
}
.cards{
    margin: 10px;
}
.cards .items_Row{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}
.cards .items_Row .items_box{
    width: 33.3%;
    height: 50px;
    min-width: 400px;
    display: flex;
    align-items: center;
        position: relative;
            padding: 0 50px;
}
.cards .items_Row .items_box img{
    position: absolute;
    object-fit: cover;
}
.items_box .items_rightCon{
    width: 100%;
     border: 1px solid #9999;
      height: 62px;
      margin-left: 100px;
}
.items_box .items_rightCon .rightCon_row{
        display: flex;
    align-items: center;
     margin: 10px 20px;
}
.items_box .room_num{
    position: absolute;
    z-index: 1100;
    top: 50%;
        left: 80px;
    font-size: 20px;
    color: #fff;
    transform: translate(0, -50%);
}
.items_rightCon .rightCon_row .rightConLeft{
    display: flex;
    align-items: center;
}
.rightCon_row .rightConLeft .rightCon_title{
    color: #8888;
    font-size: 12px;
}
.rightCon_row .rightConLeft .rightCon_username{
    font-size: 13px;
}
.items_rightCon .rightCon_row .rightConright{
    display: flex;
    align-items: center;
    margin-left: auto;
}
.rightCon_row .rightConright .Contract_title{
    color: #8888;
    font-size: 12px;
}
.rightCon_row .rightConright .Contract_food{
    font-size: 13px;
    width: 50px;
}
</style>