// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import UploadButton from 'vuetify-upload-button'
import Axios from 'axios'
import 'vuetify/dist/vuetify.min.css'

Vue.prototype.$http = Axios
// Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwt')

Vue.use(Vuetify)
Vue.use(UploadButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
