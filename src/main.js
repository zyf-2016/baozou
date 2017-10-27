import Vue from 'vue'
import App from './App'
import 'common/stylus/index.styl'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
// import VueResource from 'vue-resource'
import axios from 'axios'
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('static/loading.gif')
})
Vue.prototype.$http = axios
// Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
