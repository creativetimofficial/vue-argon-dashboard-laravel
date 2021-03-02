/*!

=========================================================
* Vue Argon Dashboard Laravel - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-argon-dashboard-laravel
* Copyright Creative Tim (https://www.creative-tim.com) & UPDIVISION (https://www.updivision.com)

* Coded by www.creative-tim.com & www.updivision.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import axios from "axios";
import VueAxios from "vue-axios";
import IsDemo from "./plugins/isDemo"

Vue.use(VueAxios, axios);
Vue.use(IsDemo);

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
const app = new Vue({
  router: router,
  store: store,
  el: "#app",
  render: h => h(App)
});

store.$app = app;