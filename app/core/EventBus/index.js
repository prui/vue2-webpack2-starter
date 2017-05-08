import Vue from 'vue';
var bus = new Vue();

export default bus;
export let plugin = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      this.$bus = bus;
    }
  });
};
