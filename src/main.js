import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import Vuex from 'vuex'
import store from './store/store'
import less from 'less'
Vue.use(less)
Vue.use(Vuex)
import {
  Input, Form, FormItem, Container,
  Header, Main, Footer, Aside,
  Submenu, MenuItem, MenuItemGroup, Menu,
  DatePicker, Pagination, Breadcrumb, BreadcrumbItem,
  Dialog, Button, Select, Option, Checkbox, CheckboxGroup,
  Table, TableColumn, Row, Col, Calendar, Tabs, TabPane,
  Radio, RadioGroup, Card, Tag, Message, Upload, Dropdown,
  DropdownItem, DropdownMenu,InputNumber
} from 'element-ui'
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Container)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Calendar)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Upload)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(InputNumber)
Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
