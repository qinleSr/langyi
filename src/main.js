import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Input,Form,FormItem,Container,Header,Main,Footer,Aside} from 'element-ui'
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Container)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
