import ResultHandler from './ResultHandler';

ResultHandler.plugin = function(Vue) {
  Vue.mixin({
    created: function() {
      this.$ResultHandler = ResultHandler;
    }
  });
};

export default ResultHandler;
