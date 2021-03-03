<template>
  <div class="settle_accounts_detail">
    <el-card class="left-card">
      <div class="detailed">
        <div class="tit"></div>
        <div class="detail_image">
          <img src="" alt="" />
        </div>
        <div class="detailed_content">
          <div class="detailed_con">
            <h4>结账明细清单</h4>
            <p>CUSTOMERS INVOICE</p>
          </div>
          <div class="detailed_list">
            <el-row
              class="detail_list_data"
              v-for="(item, index) in detailList"
              :key="index"
            >
              <el-col :span="15" class="detail_name"
                ><div>{{ item.name }}</div></el-col
              >
              <el-col :span="6" class="detail_price"
                ><div>￥{{ item.price }}</div>
              </el-col>
              <el-col :span="2.5" class="detail_yiem"
                ><div>{{ item.tiem }}</div>
              </el-col>
            </el-row>
          </div>
          <div class="detail_total">总计：￥{{ detailTotal }}</div>
          <div class="detail_signature">
            <p style="font-size: 14px">贵宾签字：</p>
            <p style="font-size: 12px">Your Signature：</p>
          </div>
        </div>
        <div class="detailed_footer">
          <div class="detailed_footer_con">
            <p>
              请您仔细核对以上款项⾦额，确认⽆误后签名。<br />本⼈同意⽀付以上款项，并对此账单涉及的项⽬和⾦额。
            </p>
          </div>
        </div>
      </div>
      <div class="detailed_but">
        <el-button class="nobeing_client">所外客户</el-button>
        <el-button class="being_client">在住客户</el-button>
      </div>
    </el-card>
    <el-card class="right_card">
      <div class="right_card_header">
        <!-- 面包屑 -->
        <Bread></Bread>
        <div class="detail_search">
          <el-input
            class="confinement_row_input"
            v-model="detailInput"
            placeholder="输入产品名称"
          ></el-input>
          <el-button type="primary">搜索</el-button>
        </div>
      </div>
      <div class="right_card_con">
        <!-- tap切换 -->
        <el-tabs
          :stretch="true"
          type="border-card"
          tab-position="right"
          class="detail_tap"
        >
          <el-tab-pane label="项目推荐">
            <div class="tap_con">
              <div
                v-for="(item, index) in detailList"
                :key="index"
                class="tap_item"
              >
                <!-- 商品图片 -->
                <div class="tap_item_image">
                  <img src="" alt="" />
                </div>
                <div class="tap_item_con">
                  <!-- 名称 -->
                  <div class="tap_item_name">{{ item.name }}</div>
                  <!-- 价格 -->
                  <div class="tap_item_price">
                    <div class="tap_item_num">￥1000/天</div>
                    <el-input-number
                      v-if="!addShop"
                      size="mini"
                      v-model="num"
                      @change="handleChange"
                      :min="0"
                      :max="10"
                      label="描述文字"
                    ></el-input-number>
                  </div>
                  <!-- 次数 -->
                  <div class="tap_item_but">
                    <div>
                      <el-button v-if="detailBut" size="mini" plain
                        >淑/悦</el-button
                      >
                      <el-button v-if="detailBut" size="mini" plain
                        >荣/悦</el-button
                      >
                      <el-button v-if="!detailBut" size="mini" plain
                        >24H</el-button
                      >
                      <el-button v-if="!detailBut" size="mini" plain
                        >12H</el-button
                      >
                      <el-button v-if="!detailBut" size="mini" plain
                        >首次</el-button
                      >
                      <el-button v-if="!detailBut" size="mini" plain
                        >1次</el-button
                      >
                      <el-button v-if="!detailBut" size="mini" plain
                        >5次</el-button
                      >
                    </div>
                    <div v-if="addShop" class="tap_add_icon">
                      <i @click="addDetailShop" class="el-icon-circle-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="⺟婴⽤品">⺟婴⽤品</el-tab-pane>
          <el-tab-pane label="家属点餐">家属点餐</el-tab-pane>
          <el-tab-pane label="妈妈服务">妈妈服务</el-tab-pane>
          <el-tab-pane label="宝宝服务">宝宝服务</el-tab-pane>
          <el-tab-pane label="其他">其他</el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
import Bread from "../Business/Bread";
export default {
  components: {
    Bread,
  },
  data() {
    return {
      detailInput: "",
      // 账单模拟数据
      detailList: [
        { name: "双胞胎或多胞胎宝宝护理", price: 100, tiem: "首次" },
        { name: "宝宝托管服务", price: 100, tiem: "首次" },
        { name: "孕期专⻋接送陪产检服务", price: 100, tiem: "首次" },
        { name: "孕期乳房评估", price: 100, tiem: "首次" },
        { name: "双胞胎或多胞胎宝宝护理", price: 100, tiem: "首次" },
        { name: "宝宝托管服务", price: 100, tiem: "首次" },
        { name: "孕期专⻋接送陪产检服务", price: 100, tiem: "首次" },
        { name: "孕期乳房评估", price: 100, tiem: "首次" },
        { name: "双胞胎或多胞胎宝宝护理", price: 100, tiem: "首次" },
        { name: "孕期乳房评估", price: 100, tiem: "首次" },
      ],
      // 商品数量
      num: 1,
      // 次数控制
      detailBut: true,
      // 控制商品按钮显示
      addShop: true,
    };
  },
  computed: {
    // 总价格
    detailTotal() {
      var total = 0;
      this.detailList.map((item, index) => {
        total += item.price;
      });
      return total;
    },
  },
  updated(){
    
  },
  methods: {
    // 商品计数
    handleChange(value) {
      console.log(value);
      if (this.num == 0) {
        this.addShop = true;
      }
    },
    // 添加商品
    addDetailShop() {
      this.addShop = false;
    },
  },
};
</script>
<style scoped lang="less">
.settle_accounts_detail {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e7e7e7;
  display: flex;
}
.left-card {
  width: 32%;
  margin-right: 20px;
}
.right_card {
  width: 100%;
}
.detailed_but {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.nobeing_client {
  background-color: #6f6059;
  color: #fff;
}
.being_client {
  background-color: #bb956f;
  color: #fff;
}
.detailed {
  width: 100%;
  height: 666px;
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
}
.tit {
  background-color: #000;
  height: 10px;
}
.detail_image {
  height: 70px;
  background-color: #ccc;
}
.right_card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.detail_search {
  display: flex;
  align-items: center;
  margin-right: 180px;
}
.confinement_row_input {
  margin-right: 15px;
  width: 300px;
}
.detail_tap {
  height: 635px;
  // .el-tabs_item {
  //   height: 100px;
  //   line-height: 100px;
  // }
  .tap_con {
    display: flex;
    flex-wrap: wrap;
  }
  .tap_item {
    width: 24%;
    margin: 5px;
    border: 2px solid #dfdfdf;
    box-sizing: border-box;
    .tap_item_image {
      background-color: #ccc;
      height: 120px;
    }
    .tap_item_con {
      // display: flex;
      // align-items: flex-start;
      // flex-direction: column;
      // justify-content: space-between;
      padding: 5px 10px;
      .tap_item_name {
        // font-size: 14px;
      }
      .tap_item_price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-input-number {
          width: 90px;
        }
        .tap_item_num {
          // font-size: 14px;
        }
      }
      .tap_item_but {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .tap_add_icon > i {
          color: #bb956f;
        }
      }
    }
  }
}
.el-tabs_item {
  height: 100px;
}
.right_card_con {
  margin: 20px;
  border: 1px solid #ccc;
}
.detailed_con {
  margin-bottom: 10px;
  border-bottom: 3px dashed #eee;
  h4 {
    margin: 0;
    font-weight: 0;
  }
  p {
    margin: 0;
    margin-bottom: 15px;
  }
}
.detailed_content {
  margin: 20px;
  box-sizing: border-box;
  margin-bottom: 22px;
  .detailed_list {
    font-size: 14px;
    .el-row {
      display: flex;
      list-style: none;
      align-items: center;
      padding: 5px 0;
      justify-content: space-between;
    }
  }
  .detail_total {
    margin: 20px 0;
    padding: 10px 15px;
    background-color: #ccc;
  }
  .detail_signature {
    p {
      margin: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
.detailed_footer {
  background-color: #eee;
  height: 10%;
  padding: 10px 20px;
  box-sizing: border-box;
  .detailed_footer_con {
    border-top: 3px dashed #ccc;
    p {
      font-size: 12px;
      margin: 10px 0;
      color: #aaa;
    }
  }
}
</style>