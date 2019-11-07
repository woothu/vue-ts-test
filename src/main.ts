import Vue from 'vue';
import App from './App.vue';
import { CIconPlugin } from '@coreui/icons-vue';
import CoreuiVue from '@coreui/vue';
import { freeSet } from '@coreui/icons';

Vue.config.productionTip = false;
Vue.use(CoreuiVue);
Vue.use(CIconPlugin, freeSet);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
