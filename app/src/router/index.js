import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import '../assets/script/layout.js'
import '../assets/css/style.css'
import Index from '../components/index/index.vue'
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }]
})
