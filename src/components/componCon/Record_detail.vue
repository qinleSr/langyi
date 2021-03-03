<template>
  <el-container>
    <el-aside width="160px">
      <div class="left_menu">
        <div class="menu_block">
          <div class="menu_title" >妈妈护理记录</div>
          <div  :class="{active: zujian == 'RecordOne',menu_item}" @click="Tab('RecordOne')">妈妈入所评估</div>
          <div  :class="{active: zujian == 'RecordTwo',menu_item}"  @click="Tab('RecordTwo')">妈妈每日护理记录</div>
          <div :class="{active: zujian == 'RecordThree',menu_item}" @click="Tab('RecordThree')">妈妈护理记录单</div>
          <div :class="{active: zujian == 'RecordFour',menu_item}" @click="Tab('RecordFour')">特殊护理记录单</div>
          <div :class="{active: zujian == 'RecordFive',menu_item}"  @click="Tab('RecordFive')">护理项目完成登记表</div>
          <div :class="{active: zujian == 'RecordSix',menu_item}" @click="Tab('RecordSix')">出所小结</div>
        </div>
        <div class="menu_block">
          <div class="menu_title" >宝宝护理记录</div>
          <div :class="{active: zujian == 'RecordSeven',menu_item}"  @click="Tab('RecordSeven')"  >宝宝入所评估</div>
          <div :class="{active: zujian == 'RecordEight',menu_item}" @click="Tab('RecordEight')" >宝宝每日护理记录</div>
          <div :class="{active: zujian == 'RecordNine',menu_item}" @click="Tab('RecordNine')" >宝宝护理记录单</div>
          <div :class="{active: zujian == 'RecordTen',menu_item}" @click="Tab('RecordTen')">特殊护理记录单</div>
          <div :class="{active: zujian == 'RecordEleven',menu_item}"  @click="Tab('RecordEleven')">宝宝用药执行单</div>
          <div :class="{active: zujian == 'RecordTwelve',menu_item}" @click="Tab('RecordTwelve')">体温曲线图</div>
          <div :class="{active: zujian == 'RecordThirteen',menu_item}" @click="Tab('RecordThirteen')">体重曲线图</div>
          <div :class="{active: zujian == 'RecordFourteen',menu_item}" @click="Tab('RecordFourteen')">大便曲线图</div>
          <div :class="{active: zujian == 'RecordFifteen',menu_item}" @click="Tab('RecordFifteen')">小便曲线图</div>
        </div>
        <div class="menu_block">
          <div class="menu_title">查房记录</div>
          <div :class="{active: zujian == 'RecordSixteen',menu_item}" @click="Tab('RecordSixteen')">护士长查房</div>
          <div :class="{active: zujian == 'RecordSeventeen',menu_item}" @click="Tab('RecordSeventeen')">泌乳顾问查房</div>
          <div :class="{active: zujian == 'RecordEighteen',menu_item}" @click="Tab('RecordEighteen')">产科查房</div>
          <div :class="{active: zujian == 'RecordNineteen',menu_item}" @click="Tab('RecordNineteen')">儿科查房</div>
          <div :class="{active: zujian == 'RecordTwenty',menu_item}" @click="Tab('RecordTwenty')">中医查房</div>
        </div>
      </div>
    </el-aside>
    <el-main>
        <div :is="zujian" keep-alive ></div>
    </el-main>
  </el-container>
</template>
<script>
import RecordOne from "../Business/recordOne.vue"
import RecordTwo from "../Business/recordTwo"
import RecordThree from "../Business/recordThree.vue"
import RecordFour from "../Business/recordFour.vue";
import RecordFive from "../Business/recordFive.vue"
import RecordSix from "../Business/recordSix.vue"
import RecordSeven from "../Business/recordSeven.vue"
import RecordEight from "../Business/recordEight.vue"
import RecordNine from "../Business/recordNine.vue"
import RecordTen from "../Business/recordTen.vue"
import RecordEleven from "../Business/recordEleven.vue"
import RecordTwelve from "../Business/recordTwelve.vue"
import RecordThirteen from "../Business/recordThirteen.vue"
import RecordFourteen from "../Business/recordFourteen.vue"
import RecordFifteen from "../Business/recordFifteen.vue"
import RecordSixteen from "../Business/recordSixteen.vue"
import RecordSeventeen from "../Business/recordSeventeen.vue"
import RecordEighteen from "../Business/recordEighteen.vue"
import RecordNineteen from "../Business/recordNineteen.vue"
import RecordTwenty from "../Business/recordTwenty.vue"
export default {
     
     data(){
         return{
             zujian:'RecordOne',
             is_choose:true,
             menu_item:{
                background: '#dedede',
  borderBottom: '1px solid #eee',
  fontSize: '14px',
  cursor: 'pointer',
             }
         }
     },
  components: { RecordOne,RecordTwo,RecordThree,RecordFour,RecordFive,
  RecordSix,RecordSeven,RecordEight,RecordNine,RecordTen,RecordEleven,
  RecordTwelve,RecordThirteen,RecordFourteen,RecordFifteen,RecordSixteen,
  RecordSeventeen,RecordEighteen,RecordNineteen,RecordTwenty
   },
  methods:{
      Tab(m){
        console.log('11',m)
          this.zujian = m
          // this.is_choose =f
      }
  }
};
</script>
<style  scoped>
.el-container {
  margin: 10px;
}
.left_menu {
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid #999;
}
.left_menu .menu_block {
  margin: 10px 0;
  width: 140px;
}
.left_menu .menu_block .menu_item,
.menu_title {
  padding: 5px;
}
.left_menu .menu_block .menu_item {
  /* background: #dedede; */
  border-bottom: 1px solid #eee;
  font-size: 14px;
  cursor: pointer;
}

.left_menu .menu_block .menu_title {
  background: #000000;
  color: #fff;
}
.active{
  background: #C19A68;
  color: #fff;
}
</style>