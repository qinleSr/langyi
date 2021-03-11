<template>
  <!-- 产康项目管理 - 产康增值服务-->
  <div class="CustmerBox">
    <div class="serve_Box">
      <!-- 左侧账单区域 -->
      <!-- <div class="order_list">
        <div class="footer">
          <button class="solt_btn" style="background-color: #7a6f69;" @click="customerForm">所外客户</button>
          <button class="solt_btn" style="background-color: #c19a68;">在住客户</button>
        </div>
      </div> -->
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
              请您仔细核对以上款项金额，确认无误后签名。<br />本人同意支付以上款项，并对此账单涉及的项目和金额。
            </p>
          </div>
        </div>
      </div>
      <div class="detailed_but">
        <el-button class="nobeing_client" @click="customerForm">所外客户</el-button>
        <el-button class="being_client">在住客户</el-button>
      </div>
    </el-card>
      <!-- 右侧项目区域 -->
      <div class="project_box">
        <div class="project_head">
          <Search class="Search"></Search>
        </div>
        <div class="project_ConBox">
            <div class="project_Con">
          <div class="tab-card" style="display: block;">
            <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/25.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/26.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/27.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/28.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-card" style="display: none;">
            <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/23.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/25.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/26.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/27.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-card" style="display: none;">
            <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/25.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/23.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/26.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/28.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-card" style="display: none;">
            <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/28.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/27.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/26.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/27.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-card" style="display: none;">
            <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/23.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/25.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/26.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/27.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-card" style="display: none;">
              <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/23.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/27.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/28.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/26.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-card" style="display: none;">
            <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/23.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/25.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/26.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/27.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="tab-card" style="display: none;">
            <div class="project_list">
                  <div class="project_items">
                      <img src="../../assets/img/23.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/28.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                  <div class="project_items">
                      <img src="../../assets/img/25.jpg">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add">-</div>
                              <div class="amoun">1</div>
                              <div class="minus">+</div>
                          </div>
                      </div>
                  </div>
                   <div class="project_items">
                      <img src="../../assets/img/26.jpg" mode="scaleToFill">
                      <div class="project_row">
                          <div class="project_left">
                              <div class="title">暖宫散寒</div>
                              <div class="price">¥2198.00</div>
                          </div>
                          <div class="project_right">
                              <div class="type">仪器</div>
                              <div class="time">30分钟</div>
                          </div>
                      </div>
                      <div class="project_footer">
                          <div class="footer_left">
                              <div class="number">1次</div>
                              <div class="number">10次</div>
                          </div>
                          <div class="footer_right">
                              <div class="add" @click="jian">-</div>
                              <div class="amoun">1</div>
                              <div class="minus"@click="jia">+</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="Tab">
          <ul class="tabs">
            <li v-for="(tab,index) in tabsName">
              <div class="tab-link" @click="tabsSwitch(index)" :class="{active:tab.isActive}">
                <div class="TabName">{{tab.name}}</div>
              </div>
            </li>
          </ul>
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
      tabsName: [
        {
          name: "产褥期乳房管理类",
          isActive: true
        },
        {
          name: "产后乳房保养类",
          isActive: false
        },
        {
          name: "产后专项体质调理类",
          isActive: false
        },
        {
          name: "女性器官专项调理类",
          isActive: false
        },
        {
          name: "产后功能康复类",
          isActive: false
        },
        {
          name: "温灸热疗调理类",
          isActive: false
        },
        {
          name: "产后美丽纤体塑形类",
          isActive: false
        },
        {
          name: "舒缓放松调理类",
          isActive: false
        }
      ],
      active: false,
       detailList: [
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
        { name: "暖宫散寒", price: 100, tiem: "首次" },
      ],
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
    },
    // jian
    jian(){},
    jia(){},
    // 所外客户表单
    customerForm(){
      this.$router.push('/OutCustomer')
    }
      }
};
</script>
<style  scoped>
.CustmerBox {
  margin: 10px;
  box-shadow: 2px 2px 2px #eee;
  border-radius: 3px;
}
.serve_Box {
  display: flex;
  align-items: center;
}
.serve_Box .order_list {
  height: 740px;
  width: 350px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  position: relative;
}
.serve_Box .project_box {
  width: 100%;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  margin-left: 20px;

}
.project_box .project_ConBox{
  display: flex;
}
.project_Con .project_list{
    display: flex;
    align-items: center;
}
.project_box .project_head {
  margin: 20px;
}
.project_head .Search {
  margin-left: auto;
}
.Tab .tabs {
  list-style: none;
  width: 112px;
  text-align: center;
}
.Tab .tabs li {
  border: 1px solid #999;
}
.tabs .tab-link {
  width: 90px;
  height: 50px;
  padding: 10px;
  cursor: pointer;
}
.tabs .tab-link.active {
  background: #c19a68;
  color: #fff;
}
.project_items{
        width: 260px;
    border: 1px solid #eee;
    box-shadow: 2px 2px 2px #eee;
    font-size:13px;
    margin: 10px;
}
.project_items img{
        width: 260px;
    height: 130px;
    object-fit: cover;
}
.project_items .project_row{
    display: flex;
    align-items: center;
    margin: 0 5px;
}
.project_row .project_left{}
.project_row .project_left .price{
    padding: 5px 0;
    color: #c19a68;
}
.project_row .project_right{
    margin-left: auto;
    color: #c19a68;
}
.project_row .project_right .time{
    padding: 5px 0;
}
.project_items .project_footer{
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin: 0 5px;
}
.project_footer .footer_left{
    display: flex;
    align-items: center;
    text-align: center;
}
.project_footer .footer_left .number{
        border: 1px solid #eee;
    width: 40px;
    margin-right: 5px;
}
.project_footer .footer_right{
    display: flex;
    align-items: center;
    margin-left: auto;
    text-align: center;
    border: 1px solid #c19a68;
    border-radius: 5px;
}
.project_footer .footer_right .add{
    border-right: 1px solid #eee;
    width: 16px;
    height: 20px;
}
.project_footer .footer_right .minus{
     border-left: 1px solid #eee;
    width: 16px;
    height: 20px;
}
.project_footer .footer_right .amoun{
        width: 20px;
}
.order_list .footer{
position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    margin-bottom: 20px;
}
.footer .solt_btn{
      border: none;
    outline: none;
    margin: 0 20px;
    width: 100px;
    border-radius: 8px;
        text-align: center;
    line-height: 20px;
    padding: 5px 0;
    color: #fff;
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
</style>
