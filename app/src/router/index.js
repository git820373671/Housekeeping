import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import '../assets/script/layout.js'
import '../assets/css/style.css'
import Index from '../components/index/index.vue'
import Integral from '../components/integral/index.vue'
import IntegralExchange from '../components/integral/exchange.vue'
import IntegralDetail from '../components/integral/detail.vue'
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/integral/integral',
      name: 'Integral',
      component: Integral
    },{
      path: '/integral/exchange',
      name: 'IntegralExchange',
      component: IntegralExchange
    },{
      path: '/integral/detail/:id',
      name: 'IntegralDetail',
      component: IntegralDetail
    }]
})
