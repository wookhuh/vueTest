import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import user from './components/vue_Tutorial/User'

Vue.config.productionTip = false

Vue.component('componentName', user)

export const eventBus = new Vue({
  methods: {
    listEdit(memo, index) {
      this.$emit('listEditEventBus', memo, index)
    },
    userEdit() {
      this.$emit('userEditEventBus', new Date())
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
