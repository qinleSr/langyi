<template>
<!-- 产康管理 --产品管理 -->
  <div class="All_Main">
    <div class="Tab_Right">
          <div class="Right_items" @click="add_product">
            <img src="../../assets/img/11.png" />
            <div class="Right_itemsTitle">新增</div>
          </div>
          <div class="Right_items">
            <img src="../../assets/img/14.png" />
            <div class="Right_itemsTitle">导出</div>
          </div>
     </div>
    <div class="All_Content">
        <tr>
            <th>序号</th>
            <th style="width:400px">产品名称</th>
            <th>产品类型</th>
            <th>操作方式</th>
            <th>服务时间</th>
            <th>库存</th>
            <th>产品价格</th>
            <th>产品规格</th>
            <th>操作</th>
        </tr>
        <tr class="td_row">
            <td>1</td>
            <td style="width: 400px;display: flex;align-items: center;color:#333;"><img src="../../assets/img/23.jpg" style="width:150px;height:100px;padding: 0 10px;">无痛乳腺疏通</td>
            <td>产褥期乳房管理类</td>
            <td>手法</td>
            <td>30分钟</td>
            <td>10</td>
            <td>¥298.00~2198.00</td>
            <td style="display: flex;align-items: center;justify-content: center;">
              <div class="rules">1次</div>
              <div class="rules">10次</div>
            </td>
            <td>
              <button>修改</button>
            <button>删除</button>
             </td>
        </tr>
        <div class="Allcontent_Footer">
             <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="12"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
        </div>
    </div>
    <!-- 新增弹框 -->
    <el-dialog title="新增" :visible.sync="addForm">
  <el-form :model="form">
    <el-row>
      <el-col style="width:130px;">
        <div class="label_title">
          <span class="improtant">*</span>
          <span>序号</span>
        </div>
        <el-input v-model="form.index" style="width:130px;"></el-input>
      </el-col>
      <el-col style="width:260px;"></el-col>
      <el-col>
        
        <div class="label_title">
          <span class="improtant">*</span>
          <span>产品名称</span>
        </div>
        <el-input v-model="form.product_name"></el-input>
      </el-col>
      <el-col>
        <div class="label_title">
          <span class="improtant">*</span>
          <span>产品分类</span>
        </div>
        <el-input v-model="form.product_type"></el-input>
      </el-col>
      
    </el-row>
    <el-row>
      <el-col></el-col>
      <el-col >
        <div class="label_title">
          <span>价格</span>
        </div>
        <el-input placeholder=""v-model="form.price">
                   <i slot="suffix" class="el-input__icon ">元</i>
        </el-input>
      </el-col>
      <el-col style="width:130px;">
        <div class="label_title">
          <span>单位</span>
        </div>
        <el-input v-model="form.unit" style="width:130px;"></el-input>
      </el-col>
      <el-col style="width:130px;">
        <div class="label_title">
          
          <span>库存</span>
        </div>
        <el-input v-model="form.inventory" style="width:130px;"></el-input>
      </el-col>
    </el-row>
    <el-row>
   
     
      <el-col style="width:130px;">
        <div class="label_title">
          <span>产品图片</span>
        </div>
        <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </el-col>
      <el-col></el-col>
      <el-col class="goodsBox">
        <div class="label_title" >
          <span>多规格</span>
        </div>
        <el-row class="goods">
          <el-input v-model="form.goods_size" style="width:130px;"></el-input>
          <el-input v-model="form.goods_price" style="width:130px;"></el-input>
          <el-input v-model="form.goods_num" style="width:130px;"></el-input>
          <div class="btn">+</div>
          <div class="btn">-</div>
        </el-row>
        <el-row class="goods">
          <el-input v-model="form.goods_size" style="width:130px;"></el-input>
          <el-input v-model="form.goods_price" style="width:130px;"></el-input>
          <el-input v-model="form.goods_num" style="width:130px;"></el-input>
          <div class="btn">+</div>
          <div class="btn">-</div>
        </el-row>
        <el-row class="goods">
          <el-input v-model="form.goods_size" style="width:130px;"></el-input>
          <el-input v-model="form.goods_price" style="width:130px;"></el-input>
          <el-input v-model="form.goods_num" style="width:130px;"></el-input>
          <div class="btn">+</div>
          <div class="btn">-</div>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addForm = false">取 消</el-button>
    <el-button type="primary" @click="addForm = false">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>
<script>
import Search from "../Conpontool/Search.vue";
export default {
  name: "CustomerAll",
  components: {
    Search
  },
  data() {
    return {
      value1: "",
      currentPage4: 4,
      addForm:false,
      form:{},
       imageUrl: ''
    };
  },
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      // 新增产品
      add_product(){
        this.addForm = true
      },
      //上传图片
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === '*';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return  isLt2M;
      }
  }
};
</script>
<style  scoped>
.All_Main {
  padding: 10px 0;
}
.All_Main .Tab_Right {
  display: flex;
  align-items: center;
  
}

.All_Content{
    margin:  20px;
    min-width: 1659px;
}
.All_Content th{
    width: 180px;
    padding: 20px 0;
   
    background: #E7E7E6;
}
.All_Content td{
    width: 180px;
    text-align: center;
    padding: 10px 0;
    color: #7A6F69;
    font-size: 14px;
}
.All_Content td .rules{
      border: 1px solid #7A6F69;
    width: 50px;
    margin: 0 5px;
}
td button{
  outline: none;
}
.All_Content td button{
    border: 0;
    background: #C19A68;
    width: 60px;
    height: 30px;
    border-radius: 3px;
    color: #fff;
    margin: 0 5px;
}
.All_Content .td_row{
  display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.All_Content .Allcontent_Footer{
    margin: 10px;
}
.el-row{
  margin-bottom: 15px;

}
.el-row .el-col{
  margin: 0 20px;
}
.el-col .label_title{
  padding: 5px 0;
}
.el-input,.el-select{
  width: 202px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 1px solid #eee;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .goods .el-input{
    margin: 0 10px;
  }
  .goods .btn{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    margin:0 5px;
    color: #fff;
    background: #c19a68;
  }
</style>