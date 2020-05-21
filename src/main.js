import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    closeBtn(){
      this.$emit('close');
    }
  }
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
