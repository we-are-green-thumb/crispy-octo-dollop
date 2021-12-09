import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
import Vuetify from 'vuetify'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import axios from "axios";

Vue.use(Vuetify);

Vue.config.productionTip = false
// Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify: new Vuetify(),
}).$mount('#app')

// new Vue({
//   el : "#app",
//   router,
//   template:<App/>,
//   components: {App}
// });