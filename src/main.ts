import Vue from 'vue';
import App from './App.vue';
import { CIcon } from '@coreui/icons-vue';
// import CoreuiVue from '@coreui/vue';
import { pencil } from '@coreui/icons';

Vue.config.productionTip = false;
// Vue.use(CoreuiVue);
Vue.component('CIcon', CIcon);

new Vue({
  icons: { pencil },
  render: (h) => h(App),
}).$mount('#app');
