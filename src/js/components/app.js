import Vue from 'vue'
import vmApp from './app.vue'

Vue.config.keyCodes.pageDown = 34
Vue.config.keyCodes.pageUp = 33

let app = Vue.extend(vmApp)
new app().$mount('#app')