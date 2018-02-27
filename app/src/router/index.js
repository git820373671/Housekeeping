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
    }]
})
