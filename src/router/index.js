import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import IndexCon from '../components/componCon/IndexCon.vue'
import Customer from '../components/componCon/Customer.vue'
import CustomeTrack from '../components/componCon/Customer_tracking.vue'
import SigningContract from '../components/componCon/Signing_Contract.vue'
import PregnancyMaintenance from '../components/componCon/Pregnancy_maintenance.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    // redirect:'/Home',
    component: Home
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    redirect:'/IndexCon',
    children: [
      {
        path: "/IndexCon",
        component: IndexCon
    },
      {
          path: "/Customer",
          component: Customer,
      },
      {
        path: "/CustomeTrack",
        component: CustomeTrack
    },
    {
      path: "/SigningContract",
      component: SigningContract
  },
  {
    path: "/PregnancyMaintenance",
    component: PregnancyMaintenance
},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
