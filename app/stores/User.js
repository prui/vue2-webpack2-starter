import Vue from 'vue';

Vue.mixin({
  created: function() {
    this.$Session = {
      update: (userId, token) => {
        this.$store.commit('updateUserSession', {userId, token});
        this.$store.commit('updateUserSessionStorage');
      },
      destroy: () => {
        this.$store.commit('destroyUserSession');
        this.$store.commit('deleteUserSessionStorage');
      },
      deleteStorage: () => {
        this.$store.commit('deleteUserSessionStorage');
      },
      updateStorage: () => {
        this.$store.commit('updateUserSessionStorage');
      },
      isLogin: () => {
        return window.sessionStorage.userId && window.sessionStorage.token;
      }
    };
  }
});

export default {
  state : {
    userId: window.sessionStorage.userId,
    token: window.sessionStorage.token,
    userInfo: undefined
  },
  mutations : {
    updateUserSession(state, user) {
      state.userId = user.userId;
      state.token = user.token;
    },
    destroyUserSession(state) {
      state.userId = undefined;
      state.token = undefined;
      state.userInfo = undefined;
    },
    deleteUserSessionStorage() {
      delete window.sessionStorage.userId;
      delete window.sessionStorage.token;
    },
    updateUserSessionStorage(state) {
      window.sessionStorage.userId = state.userId;
      window.sessionStorage.token = state.token;
    }
  },
  actions : {
    login(store) {
      // var text_user = {
      //   'grant_type': 'client_credentials',
      //   'client_id': 'ClientXH',
      //   'client_secret': 'c75bad1b17a2cfbe9a6e06'
      // };
      // return Vue.http({
      //   method: 'POST',
      //   url: SUSTC_API + '/oauth/token',
      //   body: text_user
      // }).then((response) => {
      //   return response.data;
      // });
    }
  }
};
