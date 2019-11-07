// project throws an error when coreui-vue is symlinked, due to some issue with symlinks 
// when using typescript
module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/issues/3678
    ['@vue/app', { useBuiltIns: "entry" }]
  ]
}
