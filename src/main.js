import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from '../src/store'
import animated from 'animate.css'
import $ from "@/plug-in/jquery-3.4.1.js";
Vue.use(animated);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
