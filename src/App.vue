<template>
  <div id="app">
    <CAlert :show="true" color="success">hehe</CAlert>
    <CTextarea
      label="My textarea"
      style="width:200px"
      :isValid="(val) => val > 4"
      validFeedback="Value is greater than 4"
      invalidFeedback="Value is smaller than 4"
      value="3"
    />

    <CIcon name="cil-pencil" height="24"/>

    <CButton color="success" v-c-tooltip.hover="'hehe'">
      Coreui button
    </CButton>

    <CChartBar style="width:400px;" :datasets="[{ data: [1,2,3,4,5,6] }]"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CAlert, CTextarea, CButton, CTooltip, CIcon } from '@coreui/vue/src';
import { CChartBar } from '@coreui/vue-chartjs/src/index.js';

export default Vue.extend({
  name: 'app',
  directives: {
    'c-tooltip': CTooltip,
  },
  components: {
    CAlert,
    CTextarea,
    CButton,
    CIcon,
    CChartBar,
  },
});
</script>
