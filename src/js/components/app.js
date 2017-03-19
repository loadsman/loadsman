import Vue from 'vue'
import vmApp from './app.vue'

Vue.config.keyCodes.pageUp = 33
Vue.config.keyCodes.pageDown = 34
Vue.config.keyCodes.end = 35
Vue.config.keyCodes.home = 36

new Vue(vmApp).$mount('#app')