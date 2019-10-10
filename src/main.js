import Vue from 'vue';
//引入element-ui
import ElementUI from 'element-ui';
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
//main.js中引用
//bus状态管理
import BusFactory from 'vue-happy-bus'
//使用全局变量引用
Vue.prototype.$BusFactory=BusFactory;
Vue.use(ElementUI);
//引入vue-lazyload
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: require('./statics/img/lazyload.gif'),
  loading: require('./statics/img/lazyload.gif'),
});
Vue.config.productionTip = false;
import router from './router/index';
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
