import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Input,Form,FormItem,Container,
  Header,Main,Footer,Aside,
  Submenu,MenuItem,MenuItemGroup,Menu,
  DatePicker,Pagination,Breadcrumb,BreadcrumbItem,
  Dialog,Button,Select,Option,Checkbox,CheckboxGroup
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
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
