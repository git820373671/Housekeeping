import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import '../assets/script/layout.js'
import apiUrl from '../assets/script/apiUrl.js'
import '../assets/css/style.css'
import Index from '../components/index/index.vue'
/* 积分兑换 */
import Integral from '../components/integral/index.vue'
import IntegralExchange from '../components/integral/exchange.vue'
import IntegralDetail from '../components/integral/detail.vue'
/* 便民服务 */
import Convenience from '../components/convenience/index.vue'
import ConvenienceList from '../components/convenience/list.vue'
import ConvenienceDetail from '../components/convenience/detail.vue'
import ConvenienceRelease1 from '../components/convenience/release1.vue'
import ConvenienceRelease2 from '../components/convenience/release2.vue'
import ConvenienceRelease3 from '../components/convenience/release3.vue'
/* 保洁 */
import Cleaning from '../components/cleaning/index.vue'
import SmallClassification from '../components/cleaning/smallClassification.vue'
import AllClassification from '../components/cleaning/allClassification.vue'
import Sort from '../components/cleaning/sort.vue'
import DetNanny from '../components/cleaning/detailNanny.vue'
import DetRefrig from '../components/cleaning/detailRefrigerator.vue'
import DetGlass from '../components/cleaning/detailGlass.vue'
import DetLand from '../components/cleaning/detailLand.vue'
import NannyPersonal from '../components/cleaning/nannyPersonal.vue'
import Evaluate from '../components/cleaning/evaluate.vue'
import AppNanny from '../components/cleaning/appointmentNanny.vue'
import AppClean from '../components/cleaning/appointmentCleaning.vue'
import AppRefrig from '../components/cleaning/appointmentRefrigerator.vue'
import AppLand from '../components/cleaning/appointmentLand.vue'
import SubmitPage from '../components/cleaning/submitPage.vue'
import SubmitState from '../components/cleaning/submitSuccess.vue'

/* 我的 */
import UserIndex from '../components/user/index.vue'
import UserCoupon from '../components/user/coupon.vue'
import UserBalance from '../components/user/balance.vue'
import UserIntegral from '../components/user/integral.vue'
import UserAdAdd from '../components/user/addressAdd.vue'
import UserAdLocation from '../components/user/addressLocation.vue'
import UserLogistics from '../components/user/logistics.vue'
import UserGiftList from '../components/user/giftList.vue'
import UserDistribution from '../components/user/distribution.vue'
import UserConsumption from '../components/user/consumption.vue'
import ChooseAddress from '../components/user/address.vue'
import Invite from '../components/user/invite.vue'

/* 我的订单 */
import OrderList from '../components/order/list.vue'
import OrderDetail from '../components/order/detail.vue'
import OrderEvaluate from '../components/order/evaluate.vue'

/* 充值 */
import Recharge from '../components/recharge/recharge.vue'
import State from '../components/recharge/state.vue'
import Rule from '../components/recharge/rule.vue'

/* 购物车 */
import Car from '../components/car/car.vue'
import Pay from '../components/car/pay.vue'

Vue.use(Router)
Vue.use(Resource)
Vue.use(apiUrl)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/integral/integral',
      name: 'Integral',
      component: Integral
    }, {
      path: '/integral/exchange',
      name: 'IntegralExchange',
      component: IntegralExchange
    }, {
      path: '/integral/detail/:id',
      name: 'IntegralDetail',
      component: IntegralDetail
    },
    {
      path: '/convenience/convenience',
      name: 'Convenience',
      component: Convenience
    },
    {
      path: '/convenience/list/:id',
      name: 'ConvenienceList',
      component: ConvenienceList
    },
    {
      path: '/convenience/detail/:id',
      name: 'ConvenienceDetail',
      component: ConvenienceDetail
    },
    {
      path: '/convenience/release1',
      name: 'ConvenienceRelease1',
      component: ConvenienceRelease1
    },
    {
      path: '/convenience/release2/:id',
      name: 'ConvenienceRelease2',
      component: ConvenienceRelease2
    },
    {
      path: '/convenience/release3/:id',
      name: 'ConvenienceRelease3',
      component: ConvenienceRelease3
    },
    {
      path: '/cleaning/index',
      name: 'Cleaning',
      component: Cleaning
    },
    {
      path: '/cleaning/smallClassification/:id',
      name: 'SmallClassification',
      component: SmallClassification
    },
    {
      path: '/cleaning/allClassification',
      name: 'AllClassification',
      component: AllClassification
    },
    {
      path: '/cleaning/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/cleaning/detailNanny/:id',
      name: 'DetNanny',
      component: DetNanny
    },
    {
      path: '/cleaning/detailRefrig',
      name: 'DetRefrig',
      component: DetRefrig
    },
    {
      path: '/cleaning/detailGlass/:id',
      name: 'DetGlass',
      component: DetGlass
    },
    {
      path: '/cleaning/detailLand/:id',
      name: 'DetLand',
      component: DetLand
    },
    {
      path: '/cleaning/appNanny',
      name: 'AppNanny',
      component: AppNanny
    },
    {
      path: '/cleaning/appClean/:id',
      name: 'AppClean',
      component: AppClean
    },
    {
      path: '/cleaning/appRefrig',
      name: 'AppRefrig',
      component: AppRefrig
    },
    {
      path: '/cleaning/appLand',
      name: 'AppLand',
      component: AppLand
    },
    {
      path: '/cleaning/nannyPersonal/:id',
      name: 'NannyPersonal',
      component: NannyPersonal
    },
    {
      path: '/cleaning/evaluate',
      name: 'Evaluate',
      component: Evaluate
    },
    {
      path: '/cleaning/subPage/:type',
      name: 'SubmitPage',
      component: SubmitPage
    },
    {
      path: '/cleaning/subState',
      name: 'SubmitState',
      component: SubmitState
    },
    {
      path: '/user/address',
      name: 'ChooseAddress',
      component: ChooseAddress
    },
    {
      path: '/user/index',
      name: 'UserIndex',
      component: UserIndex
    },
    {
      path: '/user/coupon',
      name: 'UserCoupon',
      component: UserCoupon
    },
    {
      path: '/user/balance',
      name: 'UserBalance',
      component: UserBalance
    },
    {
      path: '/user/integral',
      name: 'UserIntegral',
      component: UserIntegral
    },
    {
      path: '/user/addressAdd',
      name: 'UserAdAdd',
      component: UserAdAdd
    },
    {
      path: '/user/addressLocation',
      name: 'UserAdLocation',
      component: UserAdLocation
    },
    {
      path: '/user/logistics',
      name: 'UserLogistics',
      component: UserLogistics
    },
    {
      path: '/user/giftList',
      name: 'UserGiftList',
      component: UserGiftList
    },
    {
      path: '/user/distribution',
      name: 'UserDistribution',
      component: UserDistribution
    },
    {
      path: '/user/consumption',
      name: 'UserConsumption',
      component: UserConsumption
    },
    {
      path: '/order/list/:type',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/order/detail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/order/evalute',
      name: 'OrderEvaluate',
      component: OrderEvaluate
    }, {
      path: '/user/invite',
      name: 'Invite',
      component: Invite
    }, {
      path: '/recharge/recharge',
      name: 'Recharge',
      component: Recharge
    }, {
      path: '/recharge/state',
      name: 'State',
      component: State
    }, {
      path: '/recharge/rule',
      name: 'Rule',
      component: Rule
    }, {
      path: '/car',
      name: 'Car',
      component: Car
    }, {
      path: '/pay',
      name: 'Pay',
      component: Pay
    }
  ]
})
