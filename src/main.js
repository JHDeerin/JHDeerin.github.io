/**
 * Starts the web application in "App.vue"
 */

import Vue from 'vue'
import lozad from 'lozad'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Initialize lozad
const observer = lozad('.lozad', {
  root: document.getElementById('main'),
  rootMargin: '3000px' // load when 3000px away (yes, alot, but it's actually a similar threshold to the native HTML lazy loader on Chrome)
});
observer.observe();
