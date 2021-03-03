<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <div class="items">
        <img src="../../assets/img/13.png" />
        <div class="Right_itemsTitle">查看</div>
      </div>

      <div class="items">
        <img src="../../assets/img/14.png" />
        <div class="itemsTitle">导出</div>
      </div>
    </el-header>

    <el-main style="height: 700px;">
      <el-header style="height:30px;background: #eee;">产康基础问诊</el-header>
      <el-form :model="form">
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>客户姓名</span>
            </div>
            <el-input v-model="form.customer_name" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>联系方式</span>
            </div>
            <el-input v-model="form.customer_phone" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>年龄</span>
            </div>
            <el-input v-model="form.customer_age" autocomplete="off"></el-input>岁
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>身高</span>
            </div>
            <el-input v-model="form.customer_height" autocomplete="off"></el-input>CM
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产前体重</span>
            </div>
            <el-input v-model="form.before_weight" autocomplete="off"></el-input>KG
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产后体重</span>
            </div>
            <el-input v-model="form.now_weight" autocomplete="off"></el-input>KG
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>分娩日期</span>
            </div>
            <el-date-picker
              v-model="form.childbirth_date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>分娩方式</span>
            </div>
            <el-input v-model="form.childbirth_type" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>胎次</span>
            </div>
            <el-input v-model="form.child_num" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>胎重</span>
            </div>
            <el-input v-model="form.child_weight" autocomplete="off"></el-input>KG
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>分娩医院</span>
            </div>
            <el-input v-model="form.childbirth_hospital" autocomplete="off"></el-input>
          </el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>宝宝性别</span>
            </div>
            <el-input v-model="form.baby_sexe" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产程快慢</span>
            </div>
            <el-input v-model="form.speed" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span>前后胎间隔</span>
            </div>
            <el-input v-model="form.interval" autocomplete="off"></el-input>
          </el-col>
          <el-col></el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>入住日期</span>
            </div>
            <el-date-picker
              v-model="form.to_date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>出所日期</span>
            </div>
            <el-date-picker
              v-model="form.leave_date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>

          <el-col>
            <div class="label_title">
              <span>家庭住址</span>
            </div>
            <el-input v-model="form.home_adres" autocomplete="off" style="width:500px"></el-input>
          </el-col>

          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>职业</span>
            </div>
            <el-input v-model="form.job" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>运动爱好</span>
            </div>
            <el-input v-model="form.like" autocomplete="off"></el-input>
          </el-col>

          <el-col>
            <div class="label_title">
              <span>带宝宝情况</span>
            </div>
            <el-input v-model="form.baby_status" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span>康复期望度</span>
            </div>
            <el-input v-model="form.want" autocomplete="off"></el-input>
          </el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <el-header style="height:30px;background: #eee;">生理机能诊断</el-header>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>月经规律</span>
            </div>
            <el-select v-model="form.regular" placeholder>
              <el-option label="常规律" value="shanghai"></el-option>
              <el-option label="非常规" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>初潮年龄</span>
            </div>
            <el-input v-model="form.first_age" autocomplete="off"></el-input>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>月经周期天数</span>
            </div>
            <el-input v-model="form.week_days" autocomplete="off"></el-input>
          </el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>月经状况</span>
            </div>
            <el-checkbox-group v-model="form.checkedstatus">
              <el-checkbox v-for="items in status" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>性生活</span>
            </div>
            <el-checkbox-group v-model="form.checkedsex">
              <el-checkbox v-for="items in sex" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>腰腹部</span>
            </div>
            <el-checkbox-group v-model="form.checkedwaist">
              <el-checkbox v-for="items in waistStatus" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>二便</span>
            </div>
            <el-checkbox-group v-model="form.checkedEB">
              <el-checkbox v-for="items in EB" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>产后身体变化</span>
            </div>
            <el-checkbox-group v-model="form.checkedbody">
              <el-checkbox v-for="items in body" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-header style="height:30px;background: #eee;">胸部情况</el-header>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>乳房健康情况</span>
            </div>
            <el-checkbox-group v-model="form.checkeXB">
              <el-checkbox v-for="items in XB" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-header style="height:30px;background: #eee;">身体各部分情况</el-header>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>头部</span>
            </div>
            <el-checkbox-group v-model="form.checkeAll_body">
              <el-checkbox v-for="items in All_body" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>肩颈部</span>
            </div>
            <el-checkbox-group v-model="form.checkeneck">
              <el-checkbox v-for="items in neck" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>腰背部</span>
            </div>
            <el-checkbox-group v-model="form.checkeback">
              <el-checkbox v-for="items in back" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>腿部</span>
            </div>
            <el-checkbox-group v-model="form.checkeleg">
              <el-checkbox v-for="items in leg" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>手臂部</span>
            </div>
            <el-checkbox-group v-model="form.checkearm">
              <el-checkbox v-for="items in arm" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>脚部</span>
            </div>
            <el-checkbox-group v-model="form.checkefoot">
              <el-checkbox v-for="items in foot" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>四肢</span>
            </div>
            <el-checkbox-group v-model="form.checkelimbs">
              <el-checkbox v-for="items in limbs" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-header style="height:30px;background: #eee;">中医亚健康现象诊断</el-header>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>面色</span>
            </div>
            <el-checkbox-group v-model="form.checkeface">
              <el-checkbox v-for="items in face" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>光泽</span>
            </div>
            <el-checkbox-group v-model="form.checkeluster">
              <el-checkbox v-for="items in luster" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>起色</span>
            </div>
            <el-checkbox-group v-model="form.checkebetterr">
              <el-checkbox v-for="items in better" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>情感</span>
            </div>
            <el-checkbox-group v-model="form.checkeemotional">
              <el-checkbox v-for="items in emotional" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>身体状态</span>
            </div>
            <el-checkbox-group v-model="form.checkebody_status">
              <el-checkbox v-for="items in body_status" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>睡眠</span>
            </div>
            <el-checkbox-group v-model="form.checkessleep">
              <el-checkbox v-for="items in sleep" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col>
            <div class="label_title">
              <span class="improtant">*</span>
              <span>眼部</span>
            </div>
            <el-checkbox-group v-model="form.checkeeyes">
              <el-checkbox v-for="items in eyes" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-header style="height:30px;background: #eee;">宝妈入住体查情况</el-header>
        <el-row>
          <div class="label_title">
            <span class="improtant">*</span>
            <span>乳房</span>
          </div>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;width:202px">
            <div class="label_title" style="width:100px;">
              <span>乳头皲裂</span>
            </div>
            <el-radio v-model="form.radio" label="1">有</el-radio>
            <el-radio v-model="form.radio" label="2">无</el-radio>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title" style="width:100px;">
              <span>腋下淋巴</span>
            </div>
            <el-checkbox-group v-model="form.checkelymphatic">
              <el-checkbox
                v-for="items in lymphatic"
                :label="items"
                :key="items"
                style="width:90px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title" style="width:50px;">
              <span>乳头</span>
            </div>
            <el-checkbox-group v-model="form.checkeRT">
              <el-checkbox
                v-for="items in RT"
                :label="items"
                :key="items"
                style="width:90px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title" style="width:50px;">
              <span>乳房</span>
            </div>
            <el-checkbox-group v-model="form.checkeRF">
              <el-checkbox
                v-for="items in RF"
                :label="items"
                :key="items"
                style="width:10px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title" style="width:50px;">
              <span>奶量</span>
            </div>
            <el-checkbox-group v-model="form.checkemilk">
              <el-checkbox
                v-for="items in milk"
                :label="items"
                :key="items"
                style="width: 10px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <div class="label_title">
            <span class="improtant">*</span>
            <span>腹部</span>
          </div>
        </el-row>

        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title" style="width:100px;">
              <span>皮肤颜色</span>
            </div>
            <el-checkbox-group
              v-model="form.checkeskinColor"
              style="display: flex;align-items: center;"
            >
              <el-checkbox
                v-for="items in skinColor"
                :label="items"
                :key="items"
                style="width:80px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title" style="width:100px;">
              <span>腹直肌分离</span>
            </div>
            <el-checkbox-group
              v-model="form.checkerectus"
              style="display: flex;align-items: center;"
            >
              <el-checkbox
                v-for="items in rectus"
                :label="items"
                :key="items"
                style="width:50px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>肌肉僵硬程度</span>
            </div>
            <input v-model="form.jr_status" placeholder />
          </el-col>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;width: 440px;">
            <div class="label_title">
              <span>腹部温度</span>
            </div>
            <el-checkbox-group v-model="form.checkebody_C">
              <el-checkbox
                v-for="items in body_C"
                :label="items"
                :key="items"
                style="width:10px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>子宫情况</span>
            </div>
            <input v-model="form.ZG_status" placeholder />
            <el-checkbox-group v-model="form.checkezg">
              <el-checkbox v-for="items in zg" :label="items" :key="items" style="100px">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>腹部温度</span>
            </div>
            <el-checkbox-group v-model="form.checkebody_C2">
              <el-checkbox
                v-for="items in body_C2"
                :label="items"
                :key="items"
                style="width:10px;"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;width: 440px;">
            <div class="label_title">
              <span>剖宫产伤口</span>
            </div>
            <input v-model="form.PG_wound" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;width: 500px;">
            <div class="label_title">
              <span>切口方式</span>
            </div>
            <input v-model="form.wound_type" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>伤口大小</span>
            </div>
            <input v-model="form.wound_size" placeholder />
          </el-col>
        </el-row>
        <el-row>
          <div class="label_title">
            <span class="improtant">*</span>
            <span>下肢</span>
          </div>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>臀部皮肤颜色</span>
            </div>
            <el-checkbox-group v-model="form.TB_skinColor">
              <el-checkbox
                v-for="items in TB"
                :label="items"
                :key="items"
                style="width:50px"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>腰背腿</span>
            </div>
            <el-checkbox-group v-model="form.backAndleg">
              <el-checkbox v-for="items in back_leg" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>骨盆外扩</span>
            </div>
            <el-checkbox-group v-model="form.pelvis_open">
              <el-checkbox v-for="items in pelvis" :label="items" :key="items">{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <div class="label_title">
            <span class="improtant">*</span>
            <span>外阴</span>
          </div>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>侧切情况</span>
            </div>
            <el-checkbox-group v-model="form.side_cut">
              <el-checkbox
                v-for="items in cut_status"
                :label="items"
                :key="items"
                style="width:30px"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>撕裂</span>
            </div>
            <el-radio v-model="form.tear" label="1">有</el-radio>
            <el-radio v-model="form.tear" label="2">无</el-radio>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>外阴颜色</span>
            </div>
            <el-checkbox-group v-model="form.WYcolor">
              <el-checkbox
                v-for="items in WY_color"
                :label="items"
                :key="items"
                style="width:30px"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>阴吹</span>
            </div>
            <el-checkbox-group v-model="form.YC">
              <el-checkbox
                v-for="items in is_YC"
                :label="items"
                :key="items"
                style="width:30px"
              >{{items}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>脱垂情况</span>
            </div>
            <input v-model="form.TC_status" placeholder />
          </el-col>
        </el-row>
        <el-row>
          <div class="label_title">
            <span class="improtant">*</span>
            <span>臀部</span>
          </div>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>左：髂前上棘</span>
            </div>
            <input v-model="form.qia_qian" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>髂后上棘</span>
            </div>
            <input v-model="form.qia_hou" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>坐骨结节</span>
            </div>
            <input v-model="form.nodules" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>髋骨</span>
            </div>
            <input v-model="form.hip" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>尾骶骨</span>
            </div>
            <input v-model="form.sacrum" placeholder />
          </el-col>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>右：髂前上棘</span>
            </div>
            <input v-model="form.right_qia_qian" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>髂后上棘</span>
            </div>
            <input v-model="form.right_qia_hou" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>坐骨结节</span>
            </div>
            <input v-model="form.right_nodules" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>髋骨</span>
            </div>
            <input v-model="form.right_hip" placeholder />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>尾骶骨</span>
            </div>
            <input v-model="form.right_sacrum" placeholder />
          </el-col>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;width:50%">
            <div class="label_title" style="width:100px">
              <span>耻骨联合</span>
            </div>
            <input v-model="form.pubic" placeholder style="width:60%" />
          </el-col>
          <el-col style="display:flex;align-items: center;width:50%">
            <div class="label_title" style="width:100px">
              <span>左右腿长短</span>
            </div>
            <input v-model="form.leftRight_leg" placeholder style="width:60%" />
          </el-col>
        </el-row>
        <el-row>
          <div class="label_title">
            <span class="improtant">*</span>
            <span>臀部</span>
          </div>
        </el-row>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>大椎</span>
            </div>
            <input v-model="form.big_job" placeholder style="width:60%" />
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>八髎</span>
            </div>
            <input v-model="form.ba_liao" placeholder style="width:60%" />
          </el-col>
        </el-row>
        <el-header style="height:30px;background: #eee;">盆底肌监测及治疗</el-header>
        <el-row>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>家庭康复器</span>
            </div>
            <el-radio-group v-model="form.home">
              <el-radio :label="3">有</el-radio>
              <el-radio :label="6">无</el-radio>
            </el-radio-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>阴道哑铃</span>
            </div>
            <el-radio-group v-model="form.YD">
              <el-radio :label="3">有</el-radio>
              <el-radio :label="6">无</el-radio>
            </el-radio-group>
          </el-col>
          <el-col style="display:flex;align-items: center;">
            <div class="label_title">
              <span>触诊情况</span>
            </div>
            <input v-model="form.CZ_status" placeholder style="width:60%" />
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          border
          @cell-mouse-enter="handleMouseEnter"
          @cell-mouse-leave="handleMouseOut"
          :span-method="arraySpanMethod"
          style="width: 100%"
        >
          <el-table-column label="阶段" width="180" prop="name"></el-table-column>
          <el-table-column label="治疗前评估" width="180">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.befor_assessment }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.befor_assessment" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第一次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.first }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.first" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第二次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.second }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.second" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第三次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.third }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.third" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第四次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.fourth }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.fourth" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第五次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.fifth }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.fifth" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第六次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.sixth }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.sixth" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第七次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.seventh }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.seventh" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第八次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.eighth }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.eighth" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第九次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.ninth }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.ninth" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="第十次" width="140">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.tenth }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.tenth" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="治疗后评估" width="180">
            <template scope="scope">
              <span v-if="!scope.row.editeFlag">{{ scope.row.after_assessment }}</span>
              <span v-if="scope.row.editeFlag" class="cell-edit-input">
                <el-input v-model="scope.row.befor_assessment" placeholder></el-input>
              </span>
              <span
                v-if="!scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleEdit(scope.$index,scope.row)"
              >
                <i class="el-icon-edit"></i>
              </span>
              <span
                v-if="scope.row.editeFlag"
                style="margin-left: 10px;"
                class="cell-icon"
                @click="handleSave(scope.$index,scope.row)"
              >
                <i class="el-icon-document"></i>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        customer_name: "",
        customer_phone: "",
        customer_age: "",
        customer_height: "",
        before_weight: "",
        TC_status: "",
        qia_qian: "",
        qia_hou: "",
        nodules: "",
        hip: "",
        sacrum: "",
        right_qia_qian: "",
        right_qia_hou: "",
        right_nodules: "",
        right_hip: "",
        right_sacrum: "",
        pubic: "",
        leftRight_leg: "",
        big_job: "",
        ba_liao: "",
        home: "",
        CZ_status: "",
        YD: "",
        wound_size: "",
        PG_wound: "",
        wound_type: "",
        checkedstatus: [],
        checkedsex: [],
        checkedwaist: [],
        checkedEB: [],
        checkedbody: [],
        checkeXB: [],
        checkeAll_body: [],
        checkeneck: [],
        checkeback: [],
        checkeleg: [],
        checkearm: [],
        checkefoot: [],
        checkelimbs: [],
        checkeface: [],
        checkeluster: [],
        checkebetterr: [],
        checkeemotional: [],
        checkebody_status: [],
        checkessleep: [],
        checkeeyes: [],
        radio: "",
        checkelymphatic: [],
        checkeRT: [],
        checkeRF: [],
        checkemilk: [],
        checkeskinColor: [],
        YC: [],
        tear: false,
        WYcolor: [],
        side_cut: [],
        pelvis_open: [],
        backAndleg: [],
        TB_skinColor: [],
        checkebody_C2: [],
        ZG_status: "",
        checkezg: [],
        jr_status: "",
        checkebody_C: [],
        checkerectus: []
      },

      status: [
        "月经提前","月经推后","月经前后无定期", "痛经","血块", "量多","量少", "闭经", "绝经"
      ],

      sex: ["一天一行", "一天多行", "几天一行", "不定期"],

      waistStatus: [
        "腰酸", "腹胀","胃痛","腹冷痛", "食量少", "喜辛辣","喜生冷"
      ],

      EB: ["便秘", "便干", "便稀", "尿黄", "尿量少", "尿多清长", "痔疮"],

      body: [
        "身体酸痛","肩颈酸痛", "腰背酸痛","关节疼痛","小腹胀痛","皮肤问题","容易疲倦",
        "妇科炎症", "妊娠纹","失眠多梦", "头痛", "多汗","畏寒", "手脚冰凉","脱发","肥胖","皮肤松弛","胸部", "咳嗽漏尿",
        "压力性漏尿", "性交疼痛", "不自主漏尿", "下肢水肿","高血压","低血糖","静脉曲张", "血液粘稠"
      ],

      XB: [
        "乳腺癌","肿块切除", "乳腺增生","非哺乳期液体流出","乳腺炎", "纤维癌","囊肿","乳腺管肉头状癌"
      ],

      All_body: ["全头痛", "偏头痛", "顶痛", "后头痛", "头晕", "无疼痛"],

      neck: ["僵硬", "酸痛", "寒凉", "肩周炎", "颈椎病"],

      back: ["腰部酸痛", "腰肌劳损", "怕冷", "肌肉僵硬", "脊椎问题", "背痛"],

      leg: ["关节炎", "静脉曲张", "水肿", "皮组织敏感", "其他"],

      arm: ["皮肤松弛", "酸痛乏力", "怕风", "其他"],

      foot: ["脚痛", "足部干裂", "足癣", "足跟痛", "胀热"],

      limbs: ["经常五心烦热", "经常四肢不温", "四肢发干麻木", "易出汗", "正常"],

      face: ["白", "黑", "青", "黄", "红", "正常面色"],

      luster: ["无光泽", "有光泽", "晦暗"],

      better: ["佳", "不佳", "无神", "颓废"],

      emotional: ["易喜", "易怒", "苦闷", "冷漠", "抑郁", "正常"],

      body_status: [
        "易感冒","乳房胀痛", "易叹气","胸肋偶有窜痛","烦躁","口气不清新","乏力疲劳", "食欲不佳","下蹲眩晕"
      ],

      sleep: ["失眠", "多梦", "易醒", "嗜睡", "夜间多汗", "易惊醒"],

      eyes: ["眼涩", "眼疲劳", "浮肿", "黑眼圈", "红血丝"],

      lymphatic: ["有副乳", "有压痛", "有色素沉着", "无色素沉着"],

      RT: ["大", "小", "正常", "凹陷"],

      RF: ["红", "紫", "涨", "硬", "软"],

      milk: ["多", "少", "适中"],

      skinColor: ["有色素沉着", "无色素沉着", "有疹", "无疹"],

      rectus: ["一指", "二指", "三指", "四指", "五指"],

      body_C: ["凉", "正常"],

      zg: ["产后7天宫缩乏力", "继发性宫缩乏力"],

      body_C2: ["多", "少", "鲜红", "血块", "异味"],

      TB: ["臀缝黑", "手感冷", "尾骨凸", "臀缝线异常", "环跳凹", "痘"],

      back_leg: ["腰麻", "腰痛", "背冷", "腿部水肿"],

      pelvis: ["外侧疼痛", "脂肪多", "长短腿", "腿部怕冷", "踝关节外扩"],

      cut_status: ["左侧切", "右侧切", "无"],

      WY_color: ["正常", "深", "浅"],

      is_YC: ["有", "无", "程度"],

      tableData: [
        {
          name: "前静息测试阶段",
          befor_assessment: "",
          first: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
          seventh: "",
          eighth: "",
          ninth: "",
          tenth: "",
          after_assessment: "",
          advice: "",
          editeFlag: false
        },
        {
          name: "快肌(类肌)测试阶段",
          befor_assessment: "",
          first: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
          seventh: "",
          eighth: "",
          ninth: "",
          tenth: "",
          after_assessment: "",
          editeFlag: false
        },
        {
          name: "耐力测试阶段",
          befor_assessment: "",
          first: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
          seventh: "",
          eighth: "",
          ninth: "",
          tenth: "",
          after_assessment: "",
          editeFlag: false
        },
        {
          name: "后静息测试阶段",
          befor_assessment: "",
          first: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
          seventh: "",
          eighth: "",
          ninth: "",
          tenth: "",
          after_assessment: "",
          editeFlag: false
        },
        {
          name: "选用治疗方案",
          befor_assessment: "",
          first: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
          seventh: "",
          eighth: "",
          ninth: "",
          tenth: "",
          after_assessment: "",
          editeFlag: false
        },
        {
          name: "测试值",
          befor_assessment: "",
          first: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
          seventh: "",
          eighth: "",
          ninth: "",
          tenth: "",
          after_assessment: "",
          editeFlag: false
        },
        {
          name:
            "治疗方案:A、神经肌肉电刺激 B、肌电触发电刺激 C、放松训练 D、Kegel模板训练 F、多媒体生物反馈"
        },
        {
          name: "治疗后评估："
        },
        {
          name: "建议调理方案："
        }
      ],
      inputColumn1: "", //第一列的输入框
      rowIndex: "",
      zl_row: ""
    };
  },
  methods: {
    handleEdit: function(index, row) {
      //遍历数组改变editeFlag
      console.log(row);
      console.log(index);
      this.tableData[index].editeFlag = true;
      if (row == 7) {
        this.zl_row = row;
      }
    },
    handleSave: function(index, row) {
      //保存数据，向后台取数据
      this.tableData[index].editeFlag = false;
    },
    handleMouseEnter: function(row, column, cell, event) {
      //   cell.children[0].children[1].style.color="black";
    },
    handleMouseOut: function(row, column, cell, event) {
      //   cell.children[0].children[1].style.color="#ffffff";
    },
    // 合并行和列
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == 6) {
        return [1, 13];
      } else if (rowIndex == 7 || rowIndex == 8) {
        if (columnIndex == 1) return [1, 12];
      }
    }
  }
};
</script>
<style  scoped>
.el-header,
.items {
  display: flex;
  align-items: center;
  margin: 0 10px;
  margin-left: auto;
}
.el-row {
  margin: 20px;
}
.el-input,
.el-select {
  width: 202px;
}
.el-row .el-col {
  margin: 0 15px;
}
.el-row .el-col .label_title {
  padding: 5px 0;
}
.el-checkbox-group {
  border: none;
}
input {
  border: 0;
  border-bottom: 1px solid #eee;
  outline: none;
}
.cell-edit-input .el-input,
.el-input__inner {
  width: 90px;
}
.cell-icon {
  cursor: pointer;
  color: #333;
}
</style>