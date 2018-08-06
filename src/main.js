import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import './registerServiceWorker'
import { Vuetify, VApp, VNavigationDrawer, VFooter, VList, VBtn, VIcon, VGrid, VToolbar, VCard, VDivider, VAvatar, transitions } from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import './assets/stylus/main.styl'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
    secondary: '#e57373',
    accent: '#550024',
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
