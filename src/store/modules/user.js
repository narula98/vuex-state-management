import StoreService from '../../services/store-service';

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },

  getters: {

  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

  },

  actions: {

    resigterUser({ commit }, user) {
      return StoreService.registerUser(user).then((resp) => commit('setUser', resp)).catch((e) => {
        throw new Error(e);
      });
    },

    signIn({ commit }, userLogin) {
      return StoreService.getUser(userLogin)
        .then((resp) => commit('setUser', resp)).catch((e) => {
          throw new Error(e);
        });
    },
  },
};
