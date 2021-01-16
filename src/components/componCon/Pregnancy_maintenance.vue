<template>
  <div class="CustmerBox">
    <div class="CustmerBox_Head">
      <div class="Tab">
        <div class="Tab_Right">
          <div class="Right_items" >
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
          <PregnancyList></PregnancyList>
      </div>
    </div>
  </div>
</template>
<script>
import PregnancyList from "../Business/Pregnancy_maintenancelist.vue";
export default {
  name: "customer",
  components: { PregnancyList },
  data() {
    return {
     
      active: false,
   
     
    };
  },
  created() {},
  mounted() {},

  methods: {
    
  
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
.el-button--primary {
  background: #c19a68;
  color: #fff;
  border-color: #c19a68;
}
.Dialog_row {
  display: flex;
  align-items: center;
}
.Dialog_row .Dialog_items {
  margin: 10px 20px;
}
</style>