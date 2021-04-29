import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// Axios
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueMaterial)

// add these before Vue is instantiated
window.axios = axios

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
