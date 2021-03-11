import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import IndexCon from '../components/componCon/IndexCon.vue'
import Customer from '../components/componCon/Customer.vue'
import CustomeTrack from '../components/componCon/Customer_tracking.vue'
import SigningContract from '../components/componCon/Signing_Contract.vue'
import PregnancyMaintenance from '../components/componCon/Pregnancy_maintenance.vue'
import PersonnelManagement from '../components/componCon/personnel_management.vue'
import ArrivalNotice from '../components/componCon/Arrival_notice.vue'
import LeaveNotice from '../components/componCon/Leave_notice.vue'
import Innotice from '../components/componCon/In_notice.vue'
import Inhandle from '../components/componCon/In_handle.vue'
import Checkroom from '../components/componCon/Check_room.vue'
import Maintenance from '../components/componCon/Maintenance_tracking.vue'
import MotherLog from '../components/componCon/Mother_log.vue'
import DirectionalService from '../components/componCon/Directional_service.vue'
import Complaints from '../components/componCon/Complaints.vue'
// 客户满意度
import CustomerSatisfaction from '../components/componCon/CustomerSatisfaction.vue'
// 结账明细
import SettleAccountsDetail from '../components/componCon/SettleAccountsDetail.vue'
// 产品设置
import ProductSet from '../components/componCon/ProductSet.vue'
import NursingRecord from '../components/componCon/Nursing_record.vue'
import NurseManagement from '../components/componCon/Nurse_management.vue'
// 护士排班
import NurseScheduling from '../components/componCon/NurseScheduling.vue'
// 护士考勤
import NurseAttendance from '../components/componCon/NurseAttendance.vue'
import ProfessionalCare from '../components/componCon/Professional_care.vue'
import CarerWage from '../components/componCon/Carer_wage.vue'
import NursingSubscribe from '../components/componCon/Nursing_subscribe.vue'
// 狐狸报表
import NursingReport from '../components/componCon/NursingReport.vue'
// 月子菜单
import ConfinementMenu from '../components/componCon/ConfinementMenu.vue'
import RowMeal from '../components/componCon/Row_meal.vue'
import NutritionAssessment from '../components/componCon/Nutrition_assessment.vue'
import DietaryTaboos from '../components/componCon/Dietary_taboos.vue'
// 食材采购
import IngredientsProcurement from '../components/componCon/IngredientsProcurement.vue'
// 厨房库存
import KitchenInventory from '../components/componCon/KitchenInventory.vue'
// 部门排版管理
import DepartmentTypesettingAdmin from '../components/componCon/DepartmentTypesettingAdmin.vue'
import ProductionIndex from '../components/componCon/Production_index.vue'
import PeopleManagement from '../components/componCon/People_management.vue'
// 业绩记录
import performanceRecord from '../components/componCon/performanceRecord.vue'
// 手工记录
import CraftRecord from '../components/componCon/CraftRecord.vue'
// 人事管理
import PersonnelAdmin from '../components/componCon/PersonnelAdmin.vue'
import DueProject from '../components/componCon/Due_project.vue'
import ProductControl from '../components/componCon/Product_control.vue'
import AddedServices from '../components/componCon/Added_services.vue'
import CustomerInformation from '../components/componCon/Customer_information.vue'
import CustomerType from '../components/componCon/Customer_type.vue'
import PhysicalAssessment from '../components/componCon/Physical_assessment.vue'
import CustomerReturn from '../components/componCon/Customer_return.vue'
import PackageManagement from '../components/componCon/Package_management.vue'
import BackSign from '../components/componCon/Back_sign.vue'
import GuestRooms from '../components/componCon/Guest_rooms.vue'
// 房态信息表
import HouseState from '../components/componCon/HouseState.vue'
// 客房信息表
import GuestRoom from '../components/componCon/GuestRoom.vue'
import RecordDetail from '../components/componCon/Record_detail.vue'
import BodyAss from '../components/componCon/body_ass.vue'
import OutCustomer from '../components/componCon/out_customer.vue'
import AddNutrition from '../components/componCon/add_nutrition.vue'
// 入住通知房间
import NoticeForm from '../components/componCon/Notice_form.vue'
import moveInNotice from '../components/componCon/move_inNotice'
import confinementEdit from '../components/componCon/confinementEdit'
import confinementFind from '../components/componCon/confinementFind'

import Menu from '../components/menu/menu'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    // redirect:'/Home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: 'menu',
  //   // redirect:'/Home',
  //   component: Menu
  // },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    redirect: '/IndexCon',
    children: [
      {
        path: "/IndexCon",
        component: IndexCon,
        meta: {
          name: '首页'
        }
      },
      {
        path: "/Customer",
        component: Customer,
        meta: {
          name: '客户信息管理'
        }
      },
      {
        path: "/CustomeTrack",
        component: CustomeTrack,
        meta: {
          name: '客户跟踪管理'
        }
      },
      {
        path: "/SigningContract",
        component: SigningContract,
        meta: {
          name: '签约管理'
        }
      },
      {
        path: "/PregnancyMaintenance",
        component: PregnancyMaintenance,
        meta: {
          name: "孕期维护管理"
        }
      }, {
        path: '/PersonnelManagement',
        component: PersonnelManagement,
        meta: {
          name: '人事管理'
        }
      }, {
        path: '/moveInNotice',
        component: moveInNotice,
        meta: {
          name: '入住通知'
        }
      }, {
        path: '/ArrivalNotice',
        component: ArrivalNotice,
        meta: {
          name: '入住通知房间信息'
        }
      }, {
        path: '/LeaveNotice',
        component: LeaveNotice,
        meta: {
          name: "出所办理"
        }
      }, {
        path: '/Innotice',
        component: Innotice,
        meta: {
          name: '入所准备'
        }
      }, {
        path: '/Inhandle',
        component: Inhandle,
        meta: {
          name: '入所办理'
        }
      }, {
        path: '/Checkroom',
        component: Checkroom,
        meta: {
          name: "客房检查"
        }
      }, {
        path: '/Maintenance',
        component: Maintenance,
        meta: {
          name: "维护跟踪"
        }
      }, {
        path: '/MotherLog',
        component: MotherLog,
        meta: {
          name: "妈妈日志"
        }
      }, {
        path: '/DirectionalService',
        component: DirectionalService,
        meta: {
          name: "所内定向服务"
        }
      }, {
        path: '/Complaints',
        component: Complaints,
        meta: {
          name: "客户申诉投诉管理"
        }
      }, {
        path: '/CustomerSatisfaction',
        component: CustomerSatisfaction,
        meta: {
          name: "客户满意度"
        }
      }, {
        path: '/SettleAccountsDetail',
        component: SettleAccountsDetail,
        meta: {
          name: "结账明细"
        }
      }, {
        path: '/NursingRecord',
        component: NursingRecord,
        meta: {
          name: "在所护理记录"
        }
      }, {
        path: '/NurseManagement',
        component: NurseManagement,
        meta: {
          name: "护士人员管理"
        }
      }, {
        path: '/NurseScheduling',// 护士排班
        component: NurseScheduling,
        meta: {
          name: "护士排班"
        }
      }, {
        path: '/NurseAttendance',// 护士考勤
        component: NurseAttendance,
        meta: {
          name: "护士考勤"
        }
      }, {
        path: '/ProfessionalCare',
        component: ProfessionalCare,
        meta: {
          name: "专护士信息"
        }
      }, {
        path: '/CarerWage',
        component: CarerWage,
        meta: {
          name: "专护士薪资结算"
        }
      }, {
        path: '/NursingSubscribe',
        component: NursingSubscribe,
        meta: {
          name: "护理预约"
        }
      }, {
        path: '/ConfinementMenu',
        component: ConfinementMenu,
        meta: {
          name: "月子餐单"
        }
      }, {
        path: '/NursingReport',
        component: NursingReport,
        meta: {
          name: "护理报表"
        }
      }, {
        path: '/RowMeal',
        component: RowMeal,
        meta: {
          name: "月子排餐"
        }
      }, {
        path: '/confinementEdit',
        component: confinementEdit,
        meta: {
          name: "月子编辑"
        }
      }, {
        path: '/confinementFind',
        component: confinementFind,
        meta: {
          name: "月子查看"
        }
      }, {
        path: '/NutritionAssessment',
        component: NutritionAssessment,
        meta: {
          name: "客户营养评价"
        }
      }, {
        path: '/DietaryTaboos',
        component: DietaryTaboos,
        meta: {
          name: "饮食禁忌"
        }
      }, {
        path: '/IngredientsProcurement',
        component: IngredientsProcurement,
        meta: {
          name: "食品采购"
        }
      }, {
        path: '/KitchenInventory',
        component: KitchenInventory,
        meta: {
          name: "厨房库存"
        }
      }, {
        path: '/DepartmentTypesettingAdmin',
        component: DepartmentTypesettingAdmin,
        meta: {
          name: "部门排版管理"
        }
      }, {
        path: '/ProductionIndex',
        component: ProductionIndex,
        meta: {
          name: "产康首页"
        }
      }, {
        path: '/PeopleManagement',
        component: PeopleManagement,
        meta: {
          name: "人员管理"
        }
      }, {
        path: '/PersonnelAdmin',
        component: PersonnelAdmin,
        meta: {
          name: "人事管理"
        }
      }, {
        path: '/performanceRecord',
        component: performanceRecord,
        meta: {
          name: "业绩记录"
        }
      }, {
        path: '/CraftRecord',
        component: CraftRecord,
        meta: {
          name: "手工记录"
        }
      }, {
        path: '/DueProject',
        component: DueProject,
        meta: {
          name: "项目预约"
        }
      }, {
        path: '/ProductControl',
        component: ProductControl,
        meta: {
          name: "产品管理"
        }
      }, {
        path: '/AddedServices',
        component: AddedServices,
        meta: {
          name: "产康增值服务"
        }
      }, {
        path: '/CustomerInformation',
        component: CustomerInformation,
        meta: {
          name: "产康客户信息管理"
        }
      }, {
        path: '/CustomerType',
        component: CustomerType,
        meta: {
          name: "客户分类管理"
        }
      }, {
        path: '/PhysicalAssessment',
        component: PhysicalAssessment,
        meta: {
          name: "客户自身评价"
        }
      }, {
        path: '/CustomerReturn',
        component: CustomerReturn,
        meta: {
          name: "产康客户回访"
        }
      }, {
        path: '/PackageManagement',
        component: PackageManagement,
        meta: {
          name: '套餐管理'
        }
      }, {
        path: '/BackSign',
        component: BackSign,
        neta: {
          name: "退签管理"
        }
      }, {
        path: '/GuestRooms',
        component: GuestRooms,
        meta: {
          name: '客房信息表（列表）'
        }
      }, {
        path: '/HouseState',// 房态信息表
        component: HouseState,
        meta: {
          name: '房态信息表'
        }
      }, {
        path: '/GuestRoom',// 客房信息表（填表）
        component: GuestRoom,
        meta: {
          name: '客房信息表（填表）'
        }
      }, {
        path: '/RecordDetail',// 结账明细
        component: RecordDetail,
        meta: {
          name: '结账明细'
        }
      }, {
        path: '/ProductSet',// 产品设置
        component: ProductSet,
        meta: {
          name: '产品设置'
        }
      }, {
        path: '/BodyAss',
        component: BodyAss
      }, {
        path: '/OutCustomer',
        component: OutCustomer
      }, {
        path: '/AddNutrition',
        component: AddNutrition
      },
      {
        path: '/NoticeForm',
        component: NoticeForm
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
