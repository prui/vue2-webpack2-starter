import RouterStore from './store';

const store = new RouterStore();


/**
 * 初始化
 */
let init = function($route) {
  this.$options.routeData = {};
  this.$options.routeData._url = store.getUrl($route.history.current);
};
let loadData = function() {
  let cache = store.getItem(this.$options.routeData._url);
  if (!document.querySelector('#app-content')) {
    return;
  }
  let back = document.querySelector('#app-content').getAttribute('transition-direction') == 'back';
  if (cache && back) {
    Object.assign(this.$data, cache);
  }
};

/**
 * 保存数据
 */
let saveData = function() {
  let back = document.querySelector('#app-content').getAttribute('transition-direction') == 'back';
  var newData = {};
  if (!back)
  Object.keys(this.$data).forEach((k) => (newData[k] = this.$data[k]));
  store.setItem(this.$options.routeData._url, newData);
};


export default {
  created() {
    this.$cache = store;
    return loadData.call(this);
  },
  data() {
    return init.call(this, this.$router);
  },
  destroyed() { // 组件卸载
    saveData.call(this);
  }

};
