import { createStore } from 'vuex';
import filterProducts from '../products/filter-products';
import StoreService from '../services/store-service';

const store = createStore({
  state() {
    return {
      user: null,
      products: null,
      cartItems: [],
    };
  },

  getters: {
    filteredProducts(state) {
      return (filter) => filterProducts(filter, state.products);
    },
    calculatePrice(state) {
      return state.cartItems.reduce((curr, next) => curr + next.price, 0);
    },

  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setCartItems(state, item) {
      state.cartItems = [...state.cartItems, item];
    },
    setProducts(state, products) {
      state.products = products;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        const resp = await StoreService.fetchProducts();
        commit('setProducts', resp);
      } catch {
        throw new Error('Service');
      }
    },

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
});

export default store;
