<template>
  <!-- 人事管理 -->
  <el-container>
    <!-- 引入头部 -->
    <el-container>
      <el-container>
        <div id="app">
          <el-main>
            <!-- 面包屑 -->
            <Bread></Bread>
            
            <el-row>
              <el-col :span="15">
                <el-calendar>
                  <template slot="dateCell" slot-scope="{ date, data }">
                    <!--自定义内容-->
                    <div style="height: 100%">
                      <div
                        class="calendar-day"
                        @click="deployUpdate(date, data)"
                      >
                        {{ data.day.split("-").slice(2).join("-") }}
                        <div v-for="(item, index) in calendarData" :key="index">
                          <div
                            v-if="
                              item.months.indexOf(
                                data.day.split('-').slice(1)[0]
                              ) != -1
                            "
                          >
                            <div
                              v-if="
                                item.days.indexOf(
                                  data.day.split('-').slice(2).join('-')
                                ) != -1
                              "
                            >
                              <div class="is-selected">
                                {{ item.things }}：{{ item.ff }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </el-calendar>
              </el-col>
              <el-col :span="9">
                <el-tabs type="border-card">
                  <el-tab-pane label="排班">
                    <el-form
                      ref="deployForm"
                      :model="temp"
                      label-position="left"
                      label-width="100px"
                      style="padding: 20px"
                    >
                      <el-form-item label="日期" prop="value3">
                        <el-date-picker
                          v-model="temp.value3"
                          type="date"
                          placeholder="选择日期"
                        ></el-date-picker>
                      </el-form-item>
                      <el-form-item label="自然日" prop="state">
                        <el-select
                          filterable
                          v-model="temp.state"
                          placeholder="请选择自然日"
                        >
                          <el-option
                            v-for="item in state"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <div
                        class="content_pai"
                        v-for="(person, index) in whether"
                        :key="person.value"
                      >
                        <span style="margin-right: 50px">
                          {{ person.label }} :</span
                        >
                        <el-radio-group v-model="radioArray[index]">
                          <el-radio
                            v-for="opt in radio1"
                            :key="opt.value + '_' + person.value"
                            :label="person.value + '_' + opt.value"
                          >
                            {{ opt.label }}
                          </el-radio>
                        </el-radio-group>
                      </div>
                      <el-button
                        style="margin-left: 45%; margin-top: 15px"
                        size="medium"
                        type="primary"
                        plain
                        @click="deployCreateData()"
                      >
                        保存
                      </el-button>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="复制排班">
                    <el-form
                      ref="deployForm"
                      :model="temp"
                      label-position="left"
                      label-width="100px"
                      style="padding: 20px"
                    >
                      <el-form-item label="日期" prop="state">
                        <el-date-picker
                          v-model="temp.value4"
                          type="date"
                          placeholder="选择日期"
                        ></el-date-picker>
                      </el-form-item>

                      <el-button
                        style="margin-left: 45%; margin-top: 15px"
                        size="medium"
                        type="primary"
                        plain
                        @click="deployCreateData()"
                      >
                        保存
                      </el-button>
                    </el-form>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
              <el-col :span="14" style="margin-left: 15px">
                <el-card class="box-card">
                  <el-form
                    ref="deployForm"
                    :model="temp"
                    label-position="left"
                    label-width="100px"
                    style="padding: 20px"
                  >
                    <el-form-item label="月份" prop="state">
                      <el-date-picker
                        v-model="temp.value4"
                        type="month"
                        placeholder="选择日期"
                      ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="班次" prop="state">
                      <el-select v-model="value1" multiple placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>

                    <el-button
                      style="margin-left: 45%; margin-top: 15px"
                      size="medium"
                      type="primary"
                      @click="deployCreateData()"
                    >
                      保存
                    </el-button>
                  </el-form>
                </el-card>
              </el-col>
            </el-row>
          </el-main>
        </div>
        <!-- 引入底部 -->
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import Bread from "../Business/Bread"; // 引入面包屑组件
export default {
  components: {
    Bread, // 注册面包屑组件
  },
  data() {
    return {
      value4: "",
      value3: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
      value2: [],
      radioArray: [],
      radio: "",
      state: [
        { value: 1, label: "启用" },
        { value: 2, label: "禁用" },
      ],
      gdfd: "ddd",
      radio1: [
        { label: "白班", value: "1" },
        { label: "夜班", value: "2" },
        { label: "中班", value: "3" },
      ],
      whether: [
        { label: "马冬梅", value: "1" },
        { label: "贾玲", value: "2" },
      ], // 是否
      calendarData: [
        { months: ["08", "20"], days: ["15"], things: "马冬梅", ff: "白班" },
        { months: ["08", "20"], days: ["15"], things: "贾玲", ff: "白班" },
        { months: ["10", "11"], days: ["02"], things: "去公园野炊" },
        { months: ["11"], days: ["02"], things: "看星星" },
        { months: ["11"], days: ["02"], things: "看月亮" },
      ],
      value: new Date(),
      ss: true,
      temp: {},
    };
  },
  mounted() {},
  methods: {
    deployCreateData() {
      // 添加配置项保存
      this.$refs["deployForm"].validate((valid) => {
        if (valid) {
          var that = this;
          console.log(this.radioArray);
        }
      });
    },
    deployUpdate(date, data) {
      console.log(date, data);
      console.log(data.day);
      this.temp.value3 = data.day;
      this.$forceUpdate();
    },
  },
};
</script>
<style>
.is-selected {
  color: #1989fa;
  font-size: 12px;
}
.calendar-day {
  height: 100%;
}
.content_pai {
  line-height: 24px;
  color: #606266;
}
</style>