import domain from './domain';
import constant from './constant';

export default function(Vue) {
  Vue.mixin({
    created: function() {
      this.$config = {
        ...domain,
        ...constant
      };
    }
  });
};
