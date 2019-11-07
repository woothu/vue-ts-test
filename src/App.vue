<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <CAlert :show="true" color="success">hehe</CAlert>
    <CTextarea
      label="My textarea"
      style="width:200px"
      :isValid="(val) => val > 4"
      validFeedback="Value is greater than 4"
      invalidFeedback="Value is smaller than 4"
      value="3"
    />

    <CIcon name="pencil" height="24"/>

    <BButton variant="success">
      BVue button
    </BButton>
    <CButton color="success" v-c-tooltip.hover="'hehe'">
      Coreui button
    </CButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
// treeshaking works if sideeffects=false in coreui/vue
import { CAlert, CTextarea, CButton, CTooltip } from '@coreui/vue/src';
// import CoreuiVue from '@coreui/vue';
import { BButton, VBTooltip } from 'bootstrap-vue';

// Vue.use(CoreuiVue);

export default Vue.extend({
  name: 'app',
  directives: {
    'b-tooltip': VBTooltip,
    'c-tooltip': CTooltip,
  },
  components: {
    HelloWorld,
    CAlert,
    CTextarea,
    BButton,
    CButton,
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
