import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import '../assets/script/layout.js'
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
import SubNanny from '../components/cleaning/submitNanny.vue'
import SubRefrig from '../components/cleaning/submitRefrigerator.vue'
import SubSuccess from '../components/cleaning/submitSuccess.vue'

Vue.use(Router)
Vue.use(Resource)

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
      path: '/cleaning/detailGlass/id',
      name: 'DetGlass',
      component: DetGlass
    },
    {
      path: '/cleaning/detailLand/id',
      name: 'DetLand',
      component: DetLand
    },
    {
      path: '/cleaning/appNanny',
      name: 'AppNanny',
      component: AppNanny
    },
    {
      path: '/cleaning/nannyPersonal/id',
      name: 'NannyPersonal',
      component: NannyPersonal
    },
    {
      path: '/cleaning/evaluate',
      name: 'Evaluate',
      component: Evaluate
    },
    {
      path: '/cleaning/subNanny/:id',
      name: 'SubNanny',
      component: SubNanny
    },
    {
      path: '/cleaning/subRefrig',
      name: 'SubRefrig',
      component: SubRefrig
    },
    {
      path: '/cleaning/success',
      name: 'SubSuccess',
      component: SubSuccess
    }
  ]
})
