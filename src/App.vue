<template>
  <div id="app">
    <CAlert :show="true" color="success">Alert</CAlert>
    <br/>
    <CTextarea
      label="My textarea"
      style="width:200px"
      value="3"
    />
    <br/>
    <CIcon name="cil-pencil" height="24"/>
    <br/>
    <Button wrong-option="sth" :type="['hehe']">Element UI button</Button>
    <br/>
    <CButton wrong-option="sth" :color="['success']" v-c-tooltip.hover="'tooltip'">
      Coreui button
    </CButton>
    <br/>
    <CChartBar style="width:400px;" :datasets="[{ data: [1,2,3,4,5,6] }]"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CAlert, CTextarea, CButton, CTooltip, CIcon } from '@coreui/vue/src';
import { Button } from 'element-ui';
import { CChartBar } from '@coreui/vue-chartjs/src/index.js';

export default Vue.extend({
  name: 'app',
  directives: {
    'c-tooltip': CTooltip,
  },
  components: {
    Button,
    CAlert,
    CTextarea,
    CButton,
    CIcon,
    CChartBar,
  },
});
</script>
