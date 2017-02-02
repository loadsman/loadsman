import Vue from 'vue'
import vmApp from './app.vue'

let app = Vue.extend(vmApp)
new app().$mount('#app')

import preceptDecorator from '../instances/preceptDecorator.js'
preceptDecorator.precept