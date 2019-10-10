import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.use(VueRouter)
// axios.defaults.baseURL = ''   默认的基础接口路径
axios.defaults.withCredentials = true //异步请求：
Vue.prototype.$axios = axios

// 导入组件
import faceuptea from '../components/faceuptea.vue'
import index from '../components/index.vue'
import romantictea from '../components/romantictea.vue'
import teanew from '../components/teanew.vue'
import teastory from '../components/teastory.vue'

import buyPage from '../components/buyPage.vue'
import infoNews from '../components/infoNews.vue'

//创建路由对象
const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: index
    },{
        path: '/faceuptea',
        component: faceuptea
    },{
        path: '/romantictea',
        component: romantictea
    },{
        path: '/teanew',
        component: teanew
    },{
        path: '/teastory',
        component: teastory
    },{
        path: '/buyPage',
        component: buyPage
    },{
        path: '/infoNews',
        component: infoNews
    },]
})
//导航守卫
router.beforeEach((to, from, next) => {
    next()
})
export default router