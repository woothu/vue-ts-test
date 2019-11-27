import Vue from 'vue';
import App from './App.vue';
import { cilPencil } from '@coreui/icons';

Vue.config.productionTip = false;

new Vue({
  icons: { cilPencil },
  render: (h) => h(App),
}).$mount('#app');
