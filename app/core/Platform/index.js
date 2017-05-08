import PlatformTool from './PlatformTool';
let platform = new PlatformTool();

export default platform;

export let plugin = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      this.$platform = platform;
    }
  });
};
