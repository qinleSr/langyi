<template>
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <ul class="tabs">
          <li v-for="(tab,index) in tabsName">
            <div class="tab-link" @click="tabsSwitch(index)" :class="{active:tab.isActive}">
              <div class="TabName">{{tab.name}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cards">
        <div class="tab-card" style="display: block;">
            <CustmerTAll></CustmerTAll>
        </div>
        <div class="tab-card" style="display: none;">我是有效</div>
        <div class="tab-card" style="display: none;">我是暂停</div>
        <div class="tab-card" style="display: none;">我是审核中</div>
      </div>
    </div>
  </div>
</template>
<script>
import CustmerTAll from '../Business/Customer_T_all.vue';
export default {
  name: "customer",
  components:{CustmerTAll },
  data() {
    return {
      tabsName: [
        {
          name: "全部",
          isActive: true
        },
        {
          name: "有效",
          isActive: false
        },
        {
          name: "暂停",
          isActive: false
        },
        {
          name: "审核中",
          isActive: false
        }
      ],
      active: false
    };
  },
  created() {},
  mounted() {},
  
  methods: {
    tabsSwitch: function(tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-card"),
        len = tabCardCollection.length;
      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
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
}
.CustmerBox_Head .Tab ul {
  display: flex;
  align-items: center;
}
.CustmerBox_Head .Tab ul li {
  list-style: none;
  width: 100px;
  text-align: center;
  cursor: pointer;
}
.tabs .tab-link.active {
  border-bottom: 3px solid #7a6f69;
}
.CustmerBox_Head .CustmerBox_Right {
  display: flex;
  align-content: center;
}
.tabs .tab-link .TabName {
  padding: 10px 0;
}
.cards .tab-card {
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 1px 1px 1px #eee;
}
.Tab .Tab_Right{
    display: flex;
    align-items: center;
    margin-left: auto;
}
 .Tab_Right .Right_items{
   width: 100px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
 .Tab_Right .Right_items .Right_itemsTitle{
     padding: 0 10px;
 }
</style>