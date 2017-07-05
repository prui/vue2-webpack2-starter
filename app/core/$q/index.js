import $q from 'q';

export default $q;

export let plugin = function(Vue) {
    Vue.mixin({
        beforeCreate: function() {
            this.$q = $q;
        }
    });
};