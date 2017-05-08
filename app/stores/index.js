import Vue from 'vue';
import Vuex from 'vuex';
import User from './User';

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 使用严格模式
  modules: {
    User
  }
});
