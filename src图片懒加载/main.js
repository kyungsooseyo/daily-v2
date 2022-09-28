import Vue from 'vue'
import App from './App.vue'
import lazy from './directives/lazy';
Vue.directive('lazy', lazy);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
