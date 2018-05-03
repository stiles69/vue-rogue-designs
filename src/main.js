import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { Vuetify, VApp, VNavigationDrawer, VFooter, VList, VBtn, VIcon, VGrid, VToolbar, VCard, VDivider, VAvatar, transitions } from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import './assets/stylus/main.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VDivider,
    VAvatar,
    transitions
  },
  theme: {
    primary: '#690303',
    secondary: '#ef9a9a',
    accent: '#ba6b6c',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
