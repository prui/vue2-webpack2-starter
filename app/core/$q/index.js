import $q from 'q';

export default function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      this.$q = $q;
    }
  });
};
