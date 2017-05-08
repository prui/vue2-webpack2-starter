export default {
  state: {
    tempData: {},
  },
  mutations: {
    updateTempData(state, data) {
      state.tempData[data.id] = data;
    }
  },
  actions: {

  }
};
